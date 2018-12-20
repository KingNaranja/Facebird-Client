const store = require('../store')
const posts = require('../post/post-event.js')
const showToast = require('../toastr/toasts')


// TESTING ui feedback
// showToast requires ui action as param to display
// feedback to the user

const signUpSuccess = () => {
    // clear form values
    $('#sign-up')[0].reset()

    showToast('signup-pass')



}

const signUpFailure = () => {
    // clear form values
    $('#sign-up')[0].reset()

    showToast('signup-fail')

}


const signInSuccess = (data) => {
    // clear form values
    $('#sign-in')[0].reset()


    // stores user info
    store.user = data.user

    console.log(data.user) // => user object

    // user login feedback
    showToast('signin-pass')


    // toggle view for online users
    $('#sign-up').toggle()
    $('#sign-in').toggle()
    $('#facebird').toggle()

    $('#user-online').toggle()

    return ''

    // show changePass/logout modal as well






}

const signInFailure = () => {
    // clear form values
    $('#sign-in')[0].reset()

    showToast('signin-fail')

}

const changePassSuccess = () => {
    // $('#change-pass-form')[0].reset()

    showToast('changepass-success')

    $('.pass-form').val('')
    // hides modal
    $('#user-modal').modal('hide')
}

const changePassFailure = (error) => {
    // clear password form
    $('.pass-form').val('')

    $('#changePassResponse').text('Failed to change password')
    console.log(error)
}


const signOutSuccess = () => {
    showToast('signout-pass')

    // return to the first view
    $('#sign-up').toggle()
    $('#sign-in').toggle()
    $('#facebird').toggle()
    $('#user-online').toggle()
    // close user-auth modal
    $('#user-modal').modal('hide')


}

const signOutFailure = () => {
    showToast('signout-fail')
}

 module.exports = {
     signUpSuccess,
     signUpFailure,
     signInSuccess,
     signInFailure,
     changePassSuccess,
     changePassFailure,
     signOutSuccess,
     signOutFailure
 }
