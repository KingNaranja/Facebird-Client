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


const signInSuccess = (data) => {
    // clear form values 
    $('#sign-in')[0].reset()
    

    // stores user info 
    store.user = data.user 

    console.log(data.user) // => user object

    // user login feedback
    toggle(`${store.user.nickname} signed In Successfully!`)

    // toggle view for online users
    $('#sign-up').toggle()
    $('#sign-in').toggle()
    $('#facebird').toggle()

    $('#user-online').toggle()
    
    // show changePass/logout modal as well
	

    

    

}

const signInFailure = () => {
    // clear form values 
    $('#sign-in')[0].reset()
    
    toggle('Failed to Sign-In! Try Again ?')

}


 module.exports = {
     toggle, 
     signUpSuccess,
     signUpFailure,
     signInSuccess,
     signInFailure
 }