import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PostForm = ({ post, zipcode, restaurant, body, handleSubmit, handleChange }) => (
  <div className="container">
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Restaurant</h3>
        <Form.Group controlId="restaurant">
          <Form.Label>Restaurant</Form.Label>
          <Form.Control
            type="text"
            name="restaurant"
            value={restaurant}
            placeholder="Enter Restaurant"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="zipcode">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control
            type="number"
            name="zipcode"
            value={zipcode}
            placeholder="Enter Zipcode"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="body">
          <Form.Label>Deets</Form.Label>
          <Form.Control
            type="text"
            name="body"
            value={body}
            placeholder="Enter Deets"
            onChange={handleChange}
          />
        </Form.Group>
        <Button onClick={handleSubmit}
          variant="primary"
          type="submit"
        >
            Submit
        </Button>

      </div>
    </div>
  </div>
  // <Form onSubmit={handleSubmit}>
  //   <label>Restaurant</label>
  //   <input
  //     required
  //     placeholder='Enter Restaurant Title'
  //     // the name[title] refers to the piece of state that we want to update
  //     name='restaurant'
  //     value={post.restaurant}
  //     onChange={handleChange}
  //   />
  //
  //   <label>Zipcode</label>
  //   <input
  //     required
  //     placeholder='Enter Zipcode'
  //     // the name[director] refers to the piece of state that we want to update
  //     name='zipcode'
  //     value={post.zipcode}
  //     onChange={handleChange}
  //   />
  //   <label>DEETS</label>
  //   <input
  //     required
  //     placeholder='Enter DeliveryDeets'
  //     // the name[director] refers to the piece of state that we want to update
  //     name='body'
  //     value={post.body}
  //     onChange={handleChange}
  //   />
  //   <Button type='submit'>Submit</Button>
  // </Form>
)

export default PostForm
