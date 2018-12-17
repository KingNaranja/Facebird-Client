const store = require('../store')

// TESTING ui feedback 
const toggle = (message) => {
    // sets the message to be shown
    $('#feedback').text(message)

    // hide message after 2 seconds 
	setTimeout(()=>{
		$('#feedback').toggle()
		},2000)
}

const signUpSuccess = () => {
    // clear form values 
    $('#sign-up')[0].reset()
    
    toggle('signed up Successfully!')

    

}

const signUpFailure = () => {
    // clear form values 
    $('#sign-up')[0].reset()
    
    toggle('Failed to Sign-Up! Try Again ?')

}


 module.exports = {
     toggle, 
     signUpSuccess,
     signUpFailure
 }