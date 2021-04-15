import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

// import messages from '../AutoDismissAlert/messages'
import { userPostShow } from '../../api/post'

const UserPost = ({ user, msgAlert }) => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    userPostShow(user)
      .then(response => setPosts(response.data.posts))
  }, [])

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h4>My Deets</h4>
        {posts && posts.map(post => {
          return (
            <Link to={`/posts/${post._id}`} key={post._id}>
              <h4>{post.restaurant}</h4>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default withRouter(UserPost)
