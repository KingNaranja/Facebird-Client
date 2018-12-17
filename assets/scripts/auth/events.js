
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const addEvents =()=>{
    $('#sign-up').on('submit', onSignUp)

}

const onSignUp = function(event){
    event.preventDefault()

    // get form data
    const data = getFormFields(event.target)
    
    api.signUp(data)
        .then(ui.signUpSuccess)
        .catch(ui.signUpFailure)
        
}

module.exports = {
    addEvents, 
    onSignUp
}