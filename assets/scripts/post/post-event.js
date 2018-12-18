'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./post-api.js')
const ui = require('./post-ui.js')

const addPostEventListeners = function () {
  $('#new-post').on('submit', onCreatePost)
  $('#get-all-posts').on('submit', onGetAllPosts)
  $('update-post').on('submit', onUpdatePost)
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
  api.updatePost(data)
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFailure)
}

module.exports = {
  addPostEventListeners
}
