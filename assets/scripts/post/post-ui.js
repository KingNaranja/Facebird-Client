'use strict'

const showToast = require('../toastr/toasts')

// assigns our handlebars template to variables
const allPostsTemplate = require('../templates/get-all-posts.handlebars')
const allMyPostsTemplate = require('../templates/get-all-my-posts.handlebars')
const onePostTemplate = require('../templates/get-one-post-form.handlebars')
const myLatestPostTemplate = require('../templates/get-my-latest-post.handlebars')

// runs on a succesful create post
const createPostSuccess = apiData => {
  // uses toastr to tell user of a succesful create posts
  // Look in auth/ui for a greater explanation of how toastr works
  showToast('createpost-pass', 'post')
  // clears form data
  $('#new-post')[0].reset()
}

const createPostFailure = apiData => {
  // console.log(apiData)
  showToast('createpost-fail', 'post')
}

const getAllPostsSuccess = apiData => {
  // console.log(apiData)
  // showToast('allposts-pass', 'post')

  // calls the handlebars template "allPostsTemplate"
  // with the api response data, structured in a posts object
  // the handlebars template is a js function that can accept data as an object.
  const allThePosts = allPostsTemplate({ posts: apiData.posts })
  // inserts the formatted template data into the DOM
  $('#feed').html(allThePosts)
  return ''
}

const getAllPostsFailure = apiData => {
  // console.log(apiData)
  showToast('allposts-fail', 'post')
}

const getLatestPostSuccess = apiData => {
  // console.log(apiData)

  const latestPost = myLatestPostTemplate({ post: apiData.post })
  $('#recent-post-container').html(latestPost)

  // showToast('mylatestpost-success', 'post')
  return ''
}

const getLatestPostFailure = () => {
  // console.log('you failed')
  showToast('mylatestpost-fail', 'post')
}

const updatePostSuccess = apiData => {
  // console.log(apiData)
  showToast('updatepost-pass', 'post')

  $('#update-modal').modal('hide')
  return ''
}

const updatePostFailure = apiData => {
  // console.log(apiData)
  // console.log(`you didn't update a post!`)
  showToast('updatepost-fail', 'post')
}

const deletePostSuccess = apiData => {
  // console.log(apiData)
  showToast('deletepost-pass', 'post')
}

const deletePostFaliure = apiData => {
  // console.log(apiData)
  showToast('deletepost-fail', 'post')
}

const getAllMyPostsSuccess = apiData => {
  // console.log(apiData)
  const allMyPosts = allMyPostsTemplate({ posts: apiData.posts })
  $('#feed').html(allMyPosts)
  // showToast('allmyposts-pass', 'post')
}

const getAllMyPostsFailure = apiData => {
  // console.log(apiData)
  showToast('allmyposts-fail', 'post')
}

const getOnePostSuccess = apiData => {
  // console.log(apiData)
  const modalContent = onePostTemplate({ post: apiData.post })
  $('#update-modal-body').html(modalContent)
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
  getAllMyPostsFailure,
  getOnePostSuccess,
  getLatestPostSuccess,
  getLatestPostFailure
}
