export
{   
    addressTitleFirstLastNameLabel,
    addressCompanyLabel,
    address1Label,
    address2Label,
    addressCityStateZipcodeLabel,
    addressCountryLabel,
    addressPhoneLabel,
    orderCommentTxt,
    paymentNameOnCardTxt,
    paymentCardNumberTxt,
    paymentCVCTxt,
    paymentExpiryMonthTxt,
    paymentExpiryYearTxt,
    addToCartBtn,
    viewCartBtn,
    cartProceedBtn,
    placeOrdertBtn,
    payBtn
}

const addressTitleFirstLastNameLabel = () => cy.get('li.address_firstname').eq(0)
const addressCompanyLabel = () => cy.get('li.address_address1').eq(0)
const address1Label = () => cy.get('li.address_address1').eq(1)
const address2Label = () => cy.get('li.address_address1').eq(2)
const addressCityStateZipcodeLabel = () => cy.get('li.address_city').eq(0)
const addressCountryLabel = () => cy.get('li.address_country_name').eq(0)
const addressPhoneLabel = () => cy.get('li.address_phone').eq(0)

const orderCommentTxt = () => cy.get('textarea[name="message"]')
const paymentNameOnCardTxt = () => cy.get('input[name="name_on_card"]')
const paymentCardNumberTxt = () => cy.get('input[name="card_number"]')
const paymentCVCTxt = () => cy.get('input[name="cvc"]')
const paymentExpiryMonthTxt = () => cy.get('input[name="expiry_month"]')
const paymentExpiryYearTxt = () => cy.get('input[name="expiry_year"]')

const addToCartBtn = () => cy.get('button.btn-default.cart')
const viewCartBtn = () =>  cy.get('a[href="/view_cart"]').eq(1)
const cartProceedBtn = () => cy.get('a.check_out')
const placeOrdertBtn = () =>  cy.get('a[href="/payment"]')
const payBtn = () => cy.get('button[data-qa="pay-button"]')