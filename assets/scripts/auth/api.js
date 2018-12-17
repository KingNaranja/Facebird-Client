'use strict'

const config = require('../config')
const store = require('../store')


const signUp = (data) => {
    return $.ajax({
        url:config.apiUrl + '/sign-up',
        method: 'POST',
        data: data
    })
}

const signIn = (data) => {
    console.log(data)

    return $.ajax({
        url:config.apiUrl + '/sign-In',
        method: 'POST',
        data: data
    })
}
module.exports = {
    signUp,
    signIn
}