import * as landingPage from '../pages/landingPage'
import * as loginPage from '../pages/loginPage'
import * as commonPage from '../pages/commonsPage'
import { getTimestamp } from '../support/dateUtility'
import { createUser } from '../support/api/accountAPI'
import userData from '../fixtures/defaultUserData.json'
import * as checkoutPage from '../pages/checkoutPage'

describe('User checkout test', function () { 

    const emailAddress = 'testEmailAddress' + getTimestamp() + '@example.com'


    before(() => {
        // Creates a user to be used in the test
        createUser({
            email : emailAddress,
        })
    })

    it('Should be able to checkout', () => {
    
        landingPage.loginBtn().should('be.visible')
        landingPage.loginBtn().click()
        loginPage.userSignupLabel().should('be.visible')
        loginPage.emailLoginTxt().type(emailAddress)
        loginPage.passwordLoginTxt().type(userData.password)
        loginPage.loginBtn().click()

        cy.contains('Logged in as ' + userData.name).should('be.visible')

        landingPage.product1ViewBtn().click()
        cy.contains('Blue Top').should('be.visible')
        cy.contains('Write Your Review').should('be.visible')

        checkoutPage.addToCartBtn().click()

        cy.contains('Your product has been added to cart.').should('be.visible')
        checkoutPage.viewCartBtn().click()

        cy.contains('Shopping Cart').should('be.visible')
        cy.contains('Blue Top').should('be.visible')
        checkoutPage.cartProceedBtn().click()

        cy.contains('Address Details').should('be.visible')

        checkoutPage.addressTitleFirstLastNameLabel().should('have.text', 'Mr. firstNameTest lastNameTest')
        checkoutPage.addressCompanyLabel().should('have.text', 'companyTest')
        checkoutPage.address1Label().should('have.text', 'address1Test')
        checkoutPage.address2Label().should('have.text', 'address2Test')
        checkoutPage.addressCityStateZipcodeLabel().contains('cityTest stateTest zipcodeTest')
        checkoutPage.addressCountryLabel().should('have.text', 'Canada')
        checkoutPage.addressPhoneLabel().should('have.text', '1234567890')
        cy.contains('Blue Top').should('be.visible')

        checkoutPage.orderCommentTxt().type('Blue Top')
        checkoutPage.placeOrdertBtn().click()

        checkoutPage.paymentNameOnCardTxt().type('firstNameTest lastNameTest')
        checkoutPage.paymentCardNumberTxt().type('2222 1234 5678 8910')
        checkoutPage.paymentCVCTxt().type('321')
        checkoutPage.paymentExpiryMonthTxt().type('01')
        checkoutPage.paymentExpiryYearTxt().type('2003')

        checkoutPage.payBtn().click()

        cy.contains('Order Placed!').should('be.visible')

        commonPage.successContinueBtn().click()

        // Home Page confirm user created
        cy.contains('Logged in as ' + userData.name).should('be.visible')
        // Delete Account
        landingPage.deletAccountBtn().click()
        // Delete account success page
        commonPage.headerTitle().should('have.text', 'Account Deleted!')
        commonPage.successContinueBtn().click()
        // Verify user is logged out
        cy.get('i.fa-lock').should('not.contain', ' Logout!')
        cy.contains('Logged in as ' + userData.name).should('not.exist')
    
    })
})