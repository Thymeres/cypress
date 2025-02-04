export {
    successContinueBtn,
    headerTitle,
}

const successContinueBtn = () => cy.get('a[data-qa="continue-button"]')
const headerTitle = () => cy.get('h2.title')
const password = 'Password1!'