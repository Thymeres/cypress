export {
    gender1Box,
    passwordTxt,
    birthDayBox,
    birthMonthBox,
    birthYearBox,
    newsletterBox,
    optinBox,
    firstNameTxt,
    lastNameTxt,
    address1Txt,
    countryBox,
    stateTxt,
    cityTxt,
    zipcodeTxt,
    mobileNumberTxt,
    createAccountBtn,
}

const gender1Box = () => cy.get('input#id_gender1')
const passwordTxt = () => cy.get('input#password')
const birthDayBox = () => cy.get('select#months')
const birthMonthBox = () => cy.get('select#days')
const birthYearBox = () => cy.get('select#years')
const newsletterBox = () => cy.get('type#newsletter')
const optinBox = () => cy.get('type#optin')
const firstNameTxt = () => cy.get('input#first_name')
const lastNameTxt = () => cy.get('input#last_name')
const address1Txt = () => cy.get('input#address1')
const countryBox = () => cy.get('select#country')
const stateTxt = () => cy.get('input#state')
const cityTxt = () => cy.get('input#city')
const zipcodeTxt = () => cy.get('input#zipcode')
const mobileNumberTxt = () => cy.get('input#mobile_number')
const createAccountBtn = () => cy.get('button[data-qa="create-account"]')



