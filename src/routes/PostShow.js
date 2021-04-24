// 1. Imports
// Component & Fragment
import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
import { postShow, postDelete, postUpdate } from '../api/post'
import moment from 'moment'

// 2. Class
class PostShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // initially we have no data,  (null)
      post: null,

      // Delete boolean to manage if we've deleted this book
      deleted: false,
      updated: false
    }

    // If we don't use arrow functions, then we need to bind the `this` scope
    // this.deleteBook = this.deleteBook.bind(this)
  }

  // When this component mounts, make a GET
  // request using the ID param in the front-end route URL
  // and set the state to trigger a re-render
  componentDidMount () {
    const { msgAlert, user, match } = this.props

    postShow(user, match.params.id)
    //  set the createdPostId to the _id of the movie we got in the response data
      // .then(res => console.log('this is res', res.data.post))
      .then(res => this.setState({ post: res.data.post }))

      .then(() => msgAlert({
        heading: 'Showing Post Successfully',
        message: 'Showing Created Post.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed Showing Post',
          message: 'Could not show post with error:' + error.messge,
          variant: 'danger'
        })
      })
  }
  //   movieDelete(user, match.params.id)
  // //
  deletePost= () => {
    // axios.delete(apiUrl + '/books/' + this.props.match.params.id)
    const { msgAlert, user, match } = this.props

    postDelete(user, match.params.id)
    //  set the createdPostId to the _id of the movie we got in the response data
      .then(res => this.setState({ deleted: true }))

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
  updatePost = (event) => {
    const { msgAlert, user, match } = this.props
    event.preventDefault()
    postUpdate(match.params.id, this.state.post, user)
      .then(res => this.setState({ updated: true }))
      .then(() => msgAlert({
        heading: 'Updated Post Successfully',
        message: 'Nice! You updated your Post!.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Update Post',
          message: 'Could not udate post with error:' + error.messge,
          variant: 'danger'
        })
      })
  }
  handleChange = event => {
    event.persist()
    this.setState(state => {
      return {
        post: { ...state.post, [event.target.name]: event.target.value }
      }
    })
  }

  render () {
    // create a local variable `book` and set it's value
    // to the value of the `book` key on `this.state`
    const { post, deleted, updated } = this.state
    // 2 scenarios: loading, book to show

    let postJsx = ''

    if (deleted) {
      // if deleted is true, we can redirect
      return <Redirect to="/post-index"/>
    } else if (!post) {
      // loading, no book yet
      postJsx = <p>Loading...</p>
    } else if (updated) {
      return <Redirect to="/post-index"/>
    } else {
      // we have a book! Display it
      postJsx = (
        <div className="row">
          <div className="col-sm-10 col-md-8 mx-auto mt-5">
            <br />

            <h3>Restaurant: {post.restaurant}</h3>
            <h5>Zipcode: {post.zipcode}</h5>
            <h5>Created: {moment(post.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</h5>
            <h3>Deets: {post.body}</h3>
            <br />
            {post.owner === this.props.user._id && <Button variant='primary' onClick={this.deletePost}>Delete Me</Button>}
            <br />
            <br />
            {post.owner === this.props.user._id && <Form className="updateForm" onSubmit={this.updatePost}>
              <input type="text" name="restaurant" placeholder='New Restaurant Here' value={post.restaurant} onChange={this.handleChange}/>
              <br />
              <input type="number" name="zipcode" placeholder='New Zipcode Here' value={post.zipcode} onChange={this.handleChange}/>
              <input type="text" name="body" placeholder='New Deets Here' value={post.body} onChange={this.handleChange}/>
              <Button className="upButton" type="submit">Update</Button>
            </Form>}
          </div>
        </div>

        // <div className="row">
        //   <div className="col-sm-10 col-md-8 mx-auto mt-5">
        //     <br />
        //
        //     <h5>Restaurant: {post.restaurant}</h5>
        //     <h5>Zipcode: {post.zipcode}</h5>
        //     <h5>Deets: {post.body}</h5>
        //   </div>
        // </div>
        //
        // <h5>Created: {moment(post.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</h5>
        // <br />
        // {post.owner === this.props.user._id && <Button variant='primary' onClick={this.deletePicture}>Delete Me</Button>}
        // <br />
        // <br />
        // {post.owner === this.props.user._id && <form className="updateForm" onSubmit={this.updatePost}>
        //   <input type="text" name="restaurant" placeholder='New Restaurant Here' value={post.restaurant} onChange={this.handleChange}/>
        //   <br />
        //   <input type="number" name="zipcode" placeholder='New Zipcode Here' value ={post.zipcode} onChange={this.handleChange}/>
        //   <input type="text" name="body" placeholder='New Deets Here' value={post.body} onChange={this.handleChange}/>
        //   <button className="upButton" type="submit">Update</button>
        // </form>}
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
