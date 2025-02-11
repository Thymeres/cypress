import * as landingPage from '../pages/landingPage'
import * as loginPage from '../pages/loginPage'
import * as registerPage from '../pages/registerPage'
import * as commonPage from '../pages/commonsPage'
import { getTimestamp } from '../support/dateUtility'
import userData from '../fixtures/defaultUserData.json'

describe('User registration tests', function () { 

    it('Should be able to successfuly register', () => {
      
        const emailAddress = 'testEmailAddress' + getTimestamp() + '@example.com'

        landingPage.loginBtn().should('be.visible')
        landingPage.loginBtn().click()
        loginPage.userSignupLabel().should('be.visible')
        loginPage.nameSignupTxt().type(userData.name)
        loginPage.emailSignupTxt().type(emailAddress)
        loginPage.signupBtn().click()

        // Register Page
        cy.get('h2.title').eq(0).should('have.text', 'Enter Account Information')
        cy.get('h2.title').eq(1).should('have.text', 'Address Information')
        // Filling up required field forms
        registerPage.gender1Box().click()
        registerPage.passwordTxt().type(userData.password)
        registerPage.birthDayBox().select(userData.birthDate)
        // Should be selecting value not the text
        registerPage.birthMonthBox().select(userData.birthMonth)
        registerPage.birthYearBox().select(userData.birthYear)
        registerPage.firstNameTxt().type(userData.firstName)
        registerPage.lastNameTxt().type(userData.lastName)
        registerPage.address1Txt().type(userData.address1)
        registerPage.countryBox().select('Canada')
        registerPage.stateTxt().type(userData.state)
        registerPage.cityTxt().type(userData.city)
        registerPage.zipcodeTxt().type(userData.zipcode)
        registerPage.mobileNumberTxt().type(userData.mobileNumber)
        registerPage.createAccountBtn().click()
        //  Success Page
        commonPage.headerTitle().should('have.text', 'Account Created!')
        commonPage.successContinueBtn().click()
        // Home Page confirm user created
        cy.contains('Logged in as ' + userData.name).should('be.visible')
        
        commonPage.deleteAccount()

    })
})


