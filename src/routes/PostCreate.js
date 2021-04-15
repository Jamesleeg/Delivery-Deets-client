import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PostForm from './PostForm'
import { postCreate } from '../api/post'
class PostCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {
        restaurant: '',
        body: '',
        zipcode: null
      },

      createdPostId: null
    }
  }

  handleChange = event => {
    event.persist()

    this.setState(state => {
      // return our state Change
      return {

        post: { ...state.post, [event.target.name]: event.target.value }
      }
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    const { user, msgAlert } = this.props
    const { post } = this.state

    postCreate(post, user)
      .then(res => this.setState({ createdPostId: res.data._id }))
      // .then(res => console.log('this is res.data.post._id', res))
      .then(() => msgAlert({
        heading: 'Created Post Successfully',
        message: 'Showing Created Post.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed Creating Post',
          message: 'Could not create post with error' + error.messge,
          variant: 'danger'
        })
      })
  }
  render () {
    const { post, createdPostId } = this.state
    if (createdPostId) {
      return <Redirect to={`/post-show/${createdPostId}`} />
    }
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Create A Post</h3>
          <PostForm

            post={post}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}
export default PostCreate
