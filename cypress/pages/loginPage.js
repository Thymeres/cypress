/*
 Ways to store selectors in Cypress. Straightforward storing in variable does not work due Cypress needing
 cy. commands to be called inside an active test. Since variables are attempted to be resolved earlier than runtime,
 the following example errors out:
    const signupButton = cy.get('a[href="/login"')

 Would need to store the selectors in a function like the following:
  function signupButton () {
    return cy.get('a[href="/login"')
    }  

    const signupButton = ()=>  cy.get('a[href="/login"')
*/

export {
    userSignupLabel,
    nameSignupTxt,
    emailSignupTxt,
    signupBtn,
    emailLoginTxt,
    passwordLoginTxt,
    loginBtn
}
// Signup
const userSignupLabel = () => cy.contains('h2', 'New User Signup!')
const nameSignupTxt = () => cy.get('input[data-qa="signup-name"]')
const emailSignupTxt = () => cy.get('input[data-qa="signup-email"]')
const signupBtn = () => cy.get('button[data-qa = "signup-button"]')
// Login
const emailLoginTxt = () => cy.get('input[data-qa="login-email"]')
const passwordLoginTxt = () => cy.get('input[data-qa="login-password"]')
const loginBtn = () => cy.get('button[data-qa = "login-button"]')


