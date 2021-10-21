import axios from 'axios'
import apiUrl from '../apiConfig'

export const postCreate = (data, user) => {
  return axios({
    url: apiUrl + '/post',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data
  })
}

export const postIndex = user => {
  return axios({
    url: apiUrl + '/post',
    method: 'GET',
    // include an authorization header, that includes our user's token
    // so the API knows who to sign out
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const galleryNoUser = () => {
  return axios({
    url: apiUrl + '/post/',
    method: 'GET'
    // include an authorization header, that includes our user's token
    // so the API knows who to sign out
  })
}

export const postShow = (user, id) => {
  return axios({
    url: apiUrl + '/post/' + id,
    method: 'Get',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const postDelete = (user, id) => {
  return axios({
    url: apiUrl + '/post/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
export const postUpdate = (id, post, user) => {
  return axios({
    url: apiUrl + '/post/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { post }
  })
}

export const userPostShow = (user) => {
  return axios({
    url: apiUrl + '/',
    method: 'Get'
    // headers: {
    //   'Authorization': `Bearer ${user.token}`
    // }
  })
}
