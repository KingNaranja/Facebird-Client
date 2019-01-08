'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./post-api.js')
const ui = require('./post-ui.js')

const addPostEventListeners = () => {
  // most event listeners will need to be chained onto the return of
  // posts from the Api (aka, on sign in/get all posts)
  $('#change-view :checkbox').change(changeFeedView)
  $('#new-post').on('submit', onCreatePost)
}

const addPostHandlers = () => {
  $('.update-post').on('click', showUpdate)
  $('.delete-post').on('click', onDeletePost)
  return ''
}

let currentFeedView = false

const changeFeedView = () => {
  // feed contains all users posts after sign-in
  $('#create-post-container').toggle()
  $('#recent-post-container').toggle()
  // if my posts arent in the view
  if (!currentFeedView) {
    // add my posts to the feed
    currentFeedView = true
    onGetAllMyPosts()
    // onGetLatestPost()
    // show (toggle) #create-post-form
  } else {
    // add all posts to the feed
    onGetAllPosts()
    currentFeedView = false
    // get my last post
    // remove #create-post-form
  }
}

const addPostUpdateButton = () => {
  $('#update-text').on('submit', onUpdatePost)
}

const showUpdate = event => {
  event.preventDefault()

  const postId = $(event.target).closest('section').data('id')
  $('#update-modal').modal('show')
  api.getOnePost(postId)
    .then(ui.getOnePostSuccess)
    .then(addPostUpdateButton)
    .catch()
}

const onCreatePost = event => {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.createPost(data)
    .then(ui.createPostSuccess)
    .then(onGetAllMyPosts)
    .catch(ui.createPostFailure)
}

const onGetLatestPost = () => {
  // Because Get Latest Post can be called on page load or a button click,
  // checks if event is truthy before running prevent default
  if (event) { event.preventDefault() }

  api.getLatestPost()
    .then(ui.getLatestPostSuccess)
    .catch(ui.getLatestPostFailure)
}

const onGetAllPosts = event => {
  if (event) { event.preventDefault() }

  api.getAllPosts()
    .then(ui.getAllPostsSuccess)
    .then(addPostHandlers)
    .catch(ui.getAllPostsFailure)

  onGetLatestPost()
  return ''
}

const onUpdatePost = event => {
  event.preventDefault()

  // how do we want to display changes to the post?
  const formData = getFormFields(event.target)

  const postId = $(event.target).closest('section').data('id')

  api.updatePost(formData, postId)
    .then(ui.updatePostSuccess)
    .then(onGetAllMyPosts)
    .catch(ui.updatePostFailure)

  onGetLatestPost()
}

const onDeletePost = () => {
  event.preventDefault()

  const postId = $(event.target).closest('section').data('id')
  api.deletePost(postId)
    .then(ui.deletePostSuccess)
    .then(onGetAllMyPosts)
    .catch(ui.deletePostFaliure)

  onGetLatestPost()
}

const onGetAllMyPosts = () => {
  api.getAllMyPosts()
    .then(ui.getAllMyPostsSuccess)
    .then(addPostHandlers)
    .catch(ui.getAllMyPostsFailure)
}

module.exports = {
  addPostEventListeners,
  onGetAllPosts,
  onGetAllMyPosts,
  changeFeedView
}
