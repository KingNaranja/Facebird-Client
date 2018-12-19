'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./post-api.js')
const ui = require('./post-ui.js')

const addPostEventListeners = function () {
  // temp event listeners
  $('#get-all-posts').on('submit', onGetAllPosts)
  $('#get-all-my-posts').on('submit', onGetAllMyPosts)
  // most event listeners will need to be chained onto the return of
  // posts from the Api (aka, on sign in/get all posts)
}

const addPostHandlers = function () {
  $('.new-post').on('click', onCreatePost)
  $('.update-post').on('click', onUpdatePost)
  $('.delete-post').on('click', onDeletePost)
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

  api.getAllPosts()
    .then(ui.getAllPostsSuccess)
    .then(addPostHandlers)
    .catch(ui.getAllPostsFailure)
}

const onUpdatePost = event => {
  event.preventDefault()
  console.log(event)

  // how do we want to display changes to the post?
  const data = getFormFields(event.target)
  console.log(data)

  api.updatePost(data)
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFailure)
}

const onDeletePost = function () {
  event.preventDefault()
  console.log(event)

  const postId = event.target.closest('section').data('id')

  api.deletePost(postId)
    .then(ui.deletePostSuccess)
    .catch(ui.deletePostFaliure)
}

const onGetAllMyPosts = function (event) {
  event.preventDefault()
  console.log(event)

  api.getAllMyPosts()
    .then(ui.getAllMyPostsSuccess)
    .then(addPostHandlers)
    .catch(ui.getAllMyPostsFailure)
}

module.exports = {
  addPostEventListeners
}
