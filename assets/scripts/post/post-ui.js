'use strict'

const allPostsTemplate = require('../templates/get-all-posts.handlebars')

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
  const allThePosts = allPostsTemplate({posts: apiData.posts})
  $('#feed').html(allThePosts)
  return ''
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

const deletePostSuccess = function (apiData) {
  console.log(apiData)
  console.log(`you deleted a post`)
}

const deletePostFaliure = function (apiData) {
  console.log(apiData)
  console.log(`you didn't delete a post`)
}

const getAllMyPostsSuccess = function (apiData) {
  console.log(apiData)
  const allMyPosts = allPostsTemplate({posts: apiData.posts})
  $('#feed').html(allMyPosts)
  console.log(`you got your posts!`)
}

const getAllMyPostsFailure = function (apiData) {
  console.log(apiData)
  console.log(`you didn't get your posts!`)
}

module.exports = {
  createPostSuccess,
  createPostFailure,
  getAllPostsSuccess,
  getAllPostsFailure,
  updatePostSuccess,
  updatePostFailure,
  deletePostSuccess,
  deletePostFaliure,
  getAllMyPostsSuccess,
  getAllMyPostsFailure
}
