'use strict'

const createPostSuccess = function (apiData) {
  console.log(apiData)
  console.log('you created a post!')
}

const createPostFailure = function (apiData) {
  console.log(apiData)
  console.log(`you didn't create a post!`)
}

const getAllPostsSuccess = apiData => {
  console.log(apiData)
  console.log('you got posts!')
}

const getAllPostsFailure = apiData => {
  console.log(apiData)
  console.log(`you didn't get posts`)
}

const updatePostSuccess = apiData => {
  console.log(apiData)
  console.log('you updated a post!')
}

const updatePostFailure = apiData => {
  console.log(apiData)
  console.log(`you didn't update a post!`)
}

module.exports = {
  createPostSuccess,
  createPostFailure,
  getAllPostsSuccess,
  getAllPostsFailure,
  updatePostSuccess,
  updatePostFailure

}
