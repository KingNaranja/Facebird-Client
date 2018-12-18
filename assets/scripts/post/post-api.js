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

const getAllPosts = (data) => {
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET',
    headers: {Authorization: `Token token=${userToken}`},
    data
  })
}

const updatePost = data => {
  const userToken = userStore.user.user.token
  const id = data.post._id
  return $.ajax({
    url: config.apiUrl + `/posts/${id}`,
    method: 'PATCH',
    headers: {Authorization: `Token token=${userToken}`},
    data
  })
}

const deletePost = function (data) {
  const userToken = userStore.user.user.token
  const id = data.post._id
  return $.ajax({
    url: config.apiUrl + `/posts/${id}`,
    method: 'DELETE',
    headers: {Authorization: `Token token=${userToken}`}
  })
}

module.exports = {
  createPost,
  getAllPosts,
  updatePost,
  deletePost
}
