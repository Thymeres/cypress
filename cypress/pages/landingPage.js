export {
    loginBtn,
    userLoginLabel,
    deletAccountBtn,
    product1ViewBtn
}

const loginBtn = () => cy.get('a[href="/login"]')
const userLoginLabel = () => cy.get('i.fa-user')
const deletAccountBtn = () => cy.get('a[href="/delete_account"')
// function deleteAccountBtn(){
//     return  cy.get('a[href="/delete_account"')
// }

// const sumOf = (a, b) => { return a+b }

// function sumOf (a, b) {
//     return a + b 
// }


const product1ViewBtn = () => cy.get('a[href="/product_details/1"]')