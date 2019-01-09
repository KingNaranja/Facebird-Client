'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./post-api.js')
const ui = require('./post-ui.js')

const addPostEventListeners = () => {
  // most event listeners will need to be chained onto the return of
  // post data from the api (aka, on sign in/get all posts)
  // handle the function for toggling the page view between full feed and own posts
  // change is an event listener that listens to the state of the checkbox within change-view
  // checkbox is a boolean type of input
  $('#change-view :checkbox').change(changeFeedView)
  // runs function on submit of new post form data
  $('#new-post').on('submit', onCreatePost)
}

// adds event handlers for individual posts once they are returned from the api
const addPostHandlers = () => {
  // update post button handler
  $('.update-post').on('click', showUpdate)
  // delete post button handler
  $('.delete-post').on('click', onDeletePost)
  return ''
}

// current View on all post feed is false.
// allows for toggling between feed views
let currentFeedView = false

const changeFeedView = () => {
  // feed contains all users posts after sign-in
  // shows/hides create post form
  $('#create-post-container').toggle()
  // shows/hides most recent post
  $('#recent-post-container').toggle()
  // if my posts arent in the view
  if (!currentFeedView) {
    // add my posts to the feed
    currentFeedView = true
    onGetAllMyPosts()
  } else {
    // add all posts to the feed
    onGetAllPosts()
    currentFeedView = false
  }
}

// when an individual post is returned from the api
// add the submit handler for updating post content
const addPostUpdateButton = () => {
  $('#update-text').on('submit', onUpdatePost)
}

// after edit button is clicked,
// retrieve the post that was clicked on
// with the post.text as the value in the edit form
const showUpdate = event => {
  event.preventDefault()

  // assigns data-id of the parent section of the clicked post to a variable

  const postId = $(event.target).closest('section').data('id')
  // launches the update modal
  $('#update-modal').modal('show')
  // calls function to retrieve the post data
  api.getOnePost(postId)
    // adds api data for post into modal body via handlebars
    .then(ui.getOnePostSuccess)
    // triggers event handler for submitting the update
    .then(addPostUpdateButton)
    // missing error handler
    .catch()
}

const onCreatePost = event => {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.createPost(data)
    .then(ui.createPostSuccess)
    // refreshes all my post on page to show that the new post was created
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
    // adds event handlers for all posts
    // here for future app version for when liking is possible
    .then(addPostHandlers)
    .catch(ui.getAllPostsFailure)
  // work around because onGetLatestPost wasn't being called on the getAllPosts event chain.
  onGetLatestPost()
  return ''
}

// does the AJAX request when a post is updated.
const onUpdatePost = event => {
  event.preventDefault()

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
    // calls the get all my posts to show that the post has been deleted
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
