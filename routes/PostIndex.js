import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
//  impoort out axios request to get all mocies
import { postIndex } from '../api/post'
class PostIndex extends Component {
  constructor (props) {
    super(props)
    //  keep track of the movies in state initially we dont have movies
    this.state = {
      pictures: null
    }
  }
  //  once the component is created and inserted into the dom
  componentDidMount () {
    // destructure our props
    const { msgAlert, user } = this.props

    // fetch all of our movies
    postIndex(user)
      .then(res => this.setState({ posts: res.data.posts }))
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
          <Link to={`/posts/${post._id}`} key={post._id}>
            <Card bg='secondary' className="cardStyle" key={post.id} style={{ width: '18rem' }}>
              <Card.Img varient='top' className='img' src={post.url} style={{ height: 200 }}/>
              <Card.Body className="card-body">
                <button className="upButton">View Post</button>
              </Card.Body>
            </Card>
          </Link>
        )
      }
    })

    const cardContanierLayout = {
      display: ' flex',
      justifyContent: 'Center',
      flexFlow: 'row wrap',
      border: 'solid'
    }
    // return (
    //   <div className="row">
    //     <div className="col-sm-10 col-md-8 mx-auto mt-5">
    //       <h3>Picture Gallery</h3>
    //       <ul>
    //         {picturesJSX}
    //       </ul>
    //     </div>
    //   </div>
    // )
    return (
      <div>
        <h3>Post Board</h3>
        <div style={cardContanierLayout}>
          { postsJSX }
        </div>
      </div>
    )
  }
}

export default PostIndex
