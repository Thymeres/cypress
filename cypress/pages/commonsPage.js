import  * as landingPage  from './landingPage'

export {
    successContinueBtn,
    headerTitle,
    deleteAccount,
}

const successContinueBtn = () => cy.get('a[data-qa="continue-button"]')
const headerTitle = () => cy.get('h2.title')

function deleteAccount() {
    // Delete Account
    landingPage.deletAccountBtn().click()
    // Delete account success page
    headerTitle().should('have.text', 'Account Deleted!')
    successContinueBtn().click()
    // Verify user is logged out
    cy.get('i.fa-lock').should('not.contain', ' Logout!')
    cy.contains('Logged in as ' + userData.name).should('not.exist')
}