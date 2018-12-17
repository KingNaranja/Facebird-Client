
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const addEvents =()=>{
    $('#sign-up').on('submit', onSignUp)
    $('#sign-in').on('submit', onSignIn)



}

const onSignUp = function(event){
    event.preventDefault()

    // get form data
    const data = getFormFields(event.target)
    
    api.signUp(data)
        .then(ui.signUpSuccess)
        .catch(ui.signUpFailure)
        
}

const onSignIn = function(event){
    event.preventDefault()

    // get form data
    const data = getFormFields(event.target)
    console.log(data)
    
    api.signIn(data)
        .then(ui.signInSuccess)
        .catch(ui.signInFailure)
        
}

module.exports = {
    addEvents, 
    onSignUp,
    onSignIn
}