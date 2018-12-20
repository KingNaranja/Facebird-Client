// const store = require('../store')

function Toast(type, css, msg) {
    this.type = type;
    this.css = css;
    this.msg = msg
}


const uiToasts = {
    'signup-pass': new Toast('success', 'toast-top-right', 'Signed-Up Successfully!'),
    'signout-pass':new Toast('success', 'toast-top-right', 'You signed out!'),
    'signin-pass':new Toast('success', 'toast-top-right', 'Signed In Successfully!'),
    'changepass-success':new Toast('success', 'toast-top-right', 'Successfully changed password'),
    'signin-fail':new Toast('warning', 'toast-top-right', 'Failed to Sign-In! Try Again ?'),
    'changepass-fail':new Toast('warning', 'toast-top-right', 'Failed to change password'),
    'signup-fail':new Toast('warning', 'toast-top-right', 'Failed to Sign-Up! Try Again ?'),
    'signout-fail':new Toast('warning', 'toast-top-right', 'You couldnt signed out!')

}



// var i = 0;

// $('#tryMe').click(function () {
//     $('#tryMe').prop('disabled', true);
//     delayToasts();
// });

// function delayToasts() {
//     if (i === toasts.length) { return; }
//     var delay = i === 0 ? 0 : 2100;
//     window.setTimeout(function () { showToast(); }, delay);

//     // re-enable the button        
//     if (i === toasts.length-1) {
//         window.setTimeout(function () {
//             $('#tryMe').prop('disabled', false);
//             i = 0;
//         }, delay + 1000);
//     }
// }

function showToast(action) {
    toastr.options.positionClass = 'toast-top-full-width';
    toastr.options.extendedTimeOut = 0; //1000;
    toastr.options.timeOut = 1000;
    toastr.options.fadeOut = 250;
    toastr.options.fadeIn = 250;



    const toast = uiToasts[action];
    toastr.options.positionClass = toast.css
    toastr[toast.type](toast.msg)
    
    
}

module.exports = showToast