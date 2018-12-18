'use strict'

const createPostSuccess = function (apiData) {
  console.log(apiData)
  console.log('you created a post!')
}

const createPostFailure = function (apiData) {
  console.log(apiData)
  console.log(`you didn't create a post!`)
}

module.exports = {
  createPostSuccess,
  createPostFailure
}
