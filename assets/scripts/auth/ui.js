const store = require('../store')


const toggle = (message) => {

    $('#feedback').text(message)

	$('#feedback').toggle()
// hide response after 2 seconds 
	setTimeout(()=>{
		$('#feedback').toggle()
		},2000)
}

const signUpSuccess = (data) => {
    // clear form values 
    $('#sign-up')[0].reset()
    
    toggle('signed up Successfully!')

    console.log(data)

}

const signUpFailure = (error) => {
    // clear form values 
    $('#sign-up')[0].reset()
    
    toggle('Failed to Sign-Up!')
    console.log(error)

}


 module.exports = {
     toggle, 
     signUpSuccess,
     signUpFailure
 }