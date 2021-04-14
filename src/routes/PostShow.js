// 1. Imports
// Component & Fragment
import React, { Component, Fragment } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
import { postShow, postDelete } from '../api/post'

// 2. Class
class PostShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // initially we have no data, no book (null)
      post: null,

      // Delete boolean to manage if we've deleted this book
      deleted: false
    }

    // If we don't use arrow functions, then we need to bind the `this` scope
    // this.deleteBook = this.deleteBook.bind(this)
  }

  // When this component mounts, make a GET
  // request using the ID param in the front-end route URL
  // and set the state to trigger a re-render
  componentDidMount () {
    const { msgAlert, user, match } = this.props

    console.log(this.props)
    postShow(user, match.params.id)
    //  set the createdMovieId to the _id of the movie we got in the response data
      .then(res => this.setState({ post: res.data._id }))

      .then(() => msgAlert({
        heading: 'Showing Post Successfully',
        message: 'Showing Created Post.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed Showing Post',
          message: 'Could not create movie with error:' + error.messge,
          variant: 'danger'
        })
      })
  }
  //   movieDelete(user, match.params.id)
  // //
  deletePost= () => {
    // axios.delete(apiUrl + '/books/' + this.props.match.params.id)
    const { msgAlert, user, match } = this.props

    console.log(this.props)
    postDelete(user, match.params.id)
    //  set the createdMovieId to the _id of the movie we got in the response data
      .then(res => this.setState({ deleted: true }))

      .then(() => msgAlert({
        heading: 'Showing Movie Successfully',
        message: 'Showing Created Movie.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed Showing Movie',
          message: 'Could not create movie with error:' + error.messge,
          variant: 'danger'
        })
      })
  }

  render () {
    // create a local variable `book` and set it's value
    // to the value of the `book` key on `this.state`
    const { post, deleted } = this.state
    // 2 scenarios: loading, book to show

    let postJsx = ''

    if (deleted) {
      // if deleted is true, we can redirect
      return <Redirect to="/post"/>
    } else if (!post) {
      // loading, no book yet
      postJsx = <p>Loading...</p>
    } else {
      // we have a book! Display it
      postJsx = (
        <div>
          <h4>{post.restaurant}</h4>
          <h4>{post.zipcode}</h4>
          <p>{post.body}</p>
          <button onClick={this.deletePost}>Delete Me</button>
          <button>
            <Link to={'/update-post/' + this.props.match.params.id}>Update Me</Link>
          </button>
        </div>
      )
    }

    return (
      <Fragment>
        <h1>Just One Post:</h1>
        {postJsx}
      </Fragment>
    )
  }
}

// 3. Exports
export default withRouter(PostShow)
