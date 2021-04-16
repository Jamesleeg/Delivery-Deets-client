import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
//  impoort out axios request to get all mocies
import { galleryNoUser } from '../../api/post'
class Gallery extends Component {
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
    const { msgAlert } = this.props

    // fetch all of our movies
    galleryNoUser()
      .then(res => this.setState({ posts: res.data.posts }))
      .then(() => msgAlert({
        heading: 'Welcome to DeliveryDeets!',
        message: 'Viewing all Public DEETS. Sign in to add more!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed Loading Post',
          message: 'Could not load post with error' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { posts } = this.state
    if (!posts) {
      return (
        <Spinner animation="grow" varient='primary'/>
      )
    }

    const postsJSX = posts.map(post => {
      if (post !== 'private') {
        return (
          <div key={post._id}>
            <Card bg='secondary' className="cardStyle" key={post.id} style={{ width: '18rem' }}>

              <Card.Body className="card-body">
                <h3> {post.restaurant}</h3>
              </Card.Body>
            </Card>
          </div>
        )
      }
    })

    const cardContanierLayout = {
      display: ' flex',
      justifyContent: 'Center',
      flexFlow: 'row wrap',
      border: 'solid'
    }
    return (
      <div>
        <div className="centered">

        </div>
        <div style={cardContanierLayout}>
          { postsJSX }
        </div>
      </div>
    )
  }
}

export default Gallery
