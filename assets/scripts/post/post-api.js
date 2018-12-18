'use strict'

const config = require('../config.js')
const userStore = require('../store.js')

const createPost = function (data) {
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'POST',
    headers: {Authorization: `Token token=${userToken}`},
    data: data
  })
}

module.exports = {
  createPost
}
