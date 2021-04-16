import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'

// import { withRouter } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
//  impoort out axios request to get all post
// import moment from 'moment'
import { postIndex, postDelete, postUpdate } from '../api/post'
class PostIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: null,
      deleted: false,
      updated: false
    }
  }

  handleChange = event => {
    event.persist()
    this.setState(state => {
      return {
        post: { ...state.post, [event.target.name]: event.target.value }
      }
    })
  }
  //  once the component is created and inserted into the dom

  componentDidMount () {
    // destructure our props
    const { msgAlert, user } = this.props

    // fetch all of our posts
    postIndex(user)
      .then(res => {
        return res
      })
      .then(res => this.setState({ posts: res.data }))
      .then(() => msgAlert({
        heading: 'Loaded Post Successfully',
        message: 'Viewing all Posts. Click on one to see its page',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed Loading Posts ',
          message: 'Could not load posts with error' + error.message,
          variant: 'danger'
        })
      })
  }
  deletePost= () => {
    // axios.delete(apiUrl + '/books/' + this.props.match.params.id)
    const { msgAlert, user } = this.props

    console.log(this.props)
    postDelete(user, this.props.match.params.id)
    //  set the createdPostId to the _id of the movie we got in the response data
      .then(res => this.setState({ deleted: true }))

      .then(() => msgAlert({
        heading: 'deleted post Successfully',
        message: 'Showing Created Post.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed deleting Post',
          message: 'Could not delete post with error:' + error.messge,
          variant: 'danger'
        })
      })
  }

  updatePost = (event) => {
    const { msgAlert, user } = this.props
    event.preventDefault()
    postUpdate(this.props.match.params.id, this.state.post, user)
      .then(res => this.setState({ updated: true }))
      .then(() => msgAlert({
        heading: 'Updated Picture Successfully',
        message: 'Nice! You updated your Image!.',
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

  render () {
    const { posts } = this.state
    //  if we dont have any movies yet show that we are loading them
    if (!posts) {
      return (
        <Spinner animation="grow" varient='primary'/>
      )
    }

    const postsJSX = posts.map(post => {
      if (post !== 'private') {
        return (
          <div>
            <h4>{post.restaurant}</h4>
            <p>{post.zipcode}</p>
            <p>{post.body}</p>
            <Button variant="outline-primary">
              <Link to={`/post-show/${post._id}`} key={post._id}>See Deets!</Link>

            </Button>
          </div>

        // <div className="row">
        //   <div className="col-sm-10 col-md-8 mx-auto mt-5">
        //     <br />
        //
        //     <h5>Restaurant: {post.restaurant}</h5>
        //     <h5>Zipcode: {post.zipcode}</h5>
        //     <h5>Deets: {post.body}</h5>
        //     <h5>Created: {moment(post.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</h5>
        //     <br />
        //     {post.owner === this.props.user._id && <Button variant='primary' onClick={this.deletePost}>Delete Me</Button>}
        //     <br />
        //     <br />
        //     {post.owner === this.props.user._id && <Form className="updateForm" onSubmit={this.updatePost}>
        //       <input type="text" name="restaurant" placeholder='New Restaurant Here' value={post.restaurant} onChange={this.handleChange}/>
        //       <br />
        //       <input type="number" name="zipcode" placeholder='New Zipcode Here' value={post.zipcode} onChange={this.handleChange}/>
        //       <input type="text" name="body" placeholder='New Deets Here' value={post.body} onChange={this.handleChange}/>
        //       <Button className="upButton" type="submit">Update</Button>
        //     </Form>}
        //   </div>
        // </div>
        )
      }
    })

    // const cardContanierLayout = {
    //   display: ' flex',
    //   justifyContent: 'Center',
    //   flexFlow: 'row wrap',
    //   border: 'solid'
    // }
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Deets!</h3>
          <ul key={'post._id'}>
            {postsJSX}
          </ul>
        </div>
      </div>
    )
    //     return (
    //       <div>
    //         <h3>Post Board</h3>
    //         <div style={cardContanierLayout}>
    //           { postsJSX }
    //         </div>
    //       </div>
    //     )
  }
}

export default withRouter(PostIndex)
