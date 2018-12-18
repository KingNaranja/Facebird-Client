'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./post-api.js')
const ui = require('./post-ui.js')

const addPostEventListeners = function () {
  // temp event listeners
  $('#new-post').on('submit', onCreatePost)
  $('#get-all-posts').on('submit', onGetAllPosts)
  $('#update-post').on('submit', onUpdatePost)
  $('#delete-post').on('submit', onDeletePost)
}

const onCreatePost = function (event) {
  event.preventDefault()
  console.log(event)

  const data = getFormFields(event.target)
  console.log(data)

  api.createPost(data)
    .then(ui.createPostSuccess)
    .catch(ui.createPostFailure)
}

const onGetAllPosts = event => {
  event.preventDefault()
  console.log(event)

  const data = getFormFields(event.target)
  console.log(data)

  api.getAllPosts(data)
    .then(ui.getAllPostsSuccess)
    .catch(ui.getAllPostsFailure)
}

const onUpdatePost = event => {
  event.preventDefault()
  console.log(event)

  const data = getFormFields(event.target)
  console.log(data)

  api.updatePost(data)
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFailure)
}

const onDeletePost = function () {
  event.preventDefault()
  console.log(event)

  const data = getFormFields(event.target)
  console.log(data)

  api.deletePost(data)
    .then(ui.deletePostSuccess)
    .catch(ui.deletePostFaliure)
}

module.exports = {
  addPostEventListeners
}
