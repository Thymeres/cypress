import defaultUserData from '../../fixtures/defaultUserData.json'

export {
    createUser,
}

/**
 * 
 * This function creates a user via api
 * @param {Object} param0
 * @param {String} param0.name
 * @param {String} param0.email
 * @param {String} param0.password
 * @param {String} param0.title
 * @param {Number} param0.birthDate
 * @param {Number} param0.birthMonth Enter number from 1-12
 * @param {Number} param0.birthYear Enter number from 1900 - 2021
 * @param {String} param0.firstName
 * @param {String} param0.lastName
 * @param {String} param0.company
 * @param {String} param0.address1
 * @param {String} param0.address2
 * @param {('Australia'|'Canada'|'India'|'Israel'|'New Zealand'|'Singapore'|'United States')} param0.country Choose between Australia, Canada, India, Israel, New Zealand, Singapore, United States
 * @param {String} param0.zipcode
 * @param {String} param0.state
 * @param {String} param0.city
 * @param {String} param0.mobileNumber
 */
function createUser({
    name = defaultUserData.name, 
    email, 
    password = defaultUserData.password, 
    title = defaultUserData.title,
    birthDate = defaultUserData.birthDate, 
    birthMonth = defaultUserData.birthMonth,
    birthYear = defaultUserData.birthYear,
    firstName = defaultUserData.firstName,
    lastName = defaultUserData.lastName,
    company = defaultUserData.company,
    address1 = defaultUserData.address1,
    address2 = defaultUserData.address2,
    country = defaultUserData.country,
    zipcode = defaultUserData.zipcode,
    state = defaultUserData.state,
    city = defaultUserData.city,
    mobileNumber = defaultUserData.mobileNumber
})
{
   cy.request({
        method : 'POST',
        url : '/api/createAccount',
        form : true,
        body : {
            name : name, 
            email : email, 
            password : password, 
            title : title, 
            birth_date : birthDate, 
            birth_month: birthMonth, 
            birth_year : birthYear, 
            firstname : firstName, 
            lastname : lastName, 
            company : company, 
            address1 : address1, 
            address2 : address2, 
            country : country, 
            zipcode : zipcode, 
            state : state, 
            city : city, 
            mobile_number : mobileNumber
        }
    }).then(response => {
        // Website Test API returns actual status code in body instead of actual statusCode
        const resp = JSON.parse(response.body)
        expect(resp.responseCode).to.equal(201, 'Failed to create user via api :: ' + resp.message)
    })
}

// Hard coded params for API call
// 
// function createUserViaApi() {
//     const url = '/api/createAccount'
//     const email_com = getTimestamp() + '@email.com'

//     const headers = { 'api-token' : ''}

//     cy.request({
//          url : '/api/createAccount',
//          form : {
//              name : 'testname', 
//              email : email_com, 
//              password : 'Password1!', 
//              title : , 
//              birth_date : , 
//              birth_month: , 
//              birth_year : , 
//              firstname :, 
//              lastname : , 
//              company : , 
//              address1 : , 
//              address2 : , 
//              country : , 
//              zipcode : , 
//              state : , 
//              city : , 
//              mobile_number : 
//          }
//      })
//  }

//  createUserViaApi()