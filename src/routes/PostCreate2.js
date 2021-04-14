// import React, { useState } from 'react'
// import { withRouter } from 'react-router-dom'
//
// // import messages from '../AutoDismissAlert/messages'
// import { postCreate } from './../api/Pictures'
//
// import Form from 'react-bootstrap/Form'
// import FormFile from 'react-bootstrap/FormFile'
// import Button from 'react-bootstrap/Button'
// import Image from 'react-bootstrap/Image'
// import Spinner from 'react-bootstrap/Spinner'
// import { Col } from 'react-bootstrap'
//
// const PostCreate = ({ user, msgAlert }) => {
//   const [restaurant, setRestaurant] = useState('')
//   const [zipcode, setZipcode] = useState('')
//   const [body, setBody] = useState(null)
//
//
//   const handleRestaurantChange = event => {
//     setRestaurant(event.target.value)
//   }
//
//   const handleZipcodeChange = event => {
//     const num = event.target.value
//     setZipcode(num)
//   }
//
//   const handleImageSubmit = event => {
//     event.preventDefault()
//     const data = new FormData()
//     data.append('picture', image)
//     data.append('caption', caption)
//     data.append('tag', tag)
//     setLoading(true)
//     setImagePreview(null)
//     postCreate(user, data)
//       .then(response => {
//         setImageURL(response.data.picture.url)
//       })
//       .then(() => setLoading(false))
//       .then(() => msgAlert({
//         heading: 'Picture Successfully Uploaded',
//         message: 'Click to add more pictures to your account!',
//         variant: 'success'
//       }))
//       .catch(error => {
//         msgAlert({
//           heading: 'Failed to Upload Picture ',
//           message: 'Could not upload pictures with error' + error.message,
//           variant: 'danger'
//         })
//       })
//   }
//
//
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-10 col-md-8 mx-auto mt-5">
//           <h3>Upload Image</h3>
//           <Form onSubmit={handleImageSubmit}>
//             <Form.Group controlId="image">
//               <FormFile
//                 required
//                 id="upload-file-input"
//                 label="Upload File Here"
//                 onChange={handleImageAdd}
//               />
//             </Form.Group>
//             <Form.Group controlId="caption">
//               <Form.Label>Caption</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="caption"
//                 value={caption}
//                 placeholder="Enter Caption"
//                 onChange={handleCaptionChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="caption">
//               <Form.Label>Tag</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="tag"
//                 value={tag}
//                 placeholder="Enter Tag"
//                 onChange={handleTagChange}
//               />
//             </Form.Group>
//             <Button
//               variant="primary"
//               type="submit"
//             >
//             Submit
//             </Button>
//           </Form>
//         </div>
//       </div>
//       {loading && <div className="spinner">
//         <Spinner animation="border" variant="info">
//           <span className="sr-only">Loading...</span>
//         </Spinner>
//       </div>}
//       {imageURL &&
//         <div className="row">
//           <div className="col-sm-10 col-md-8 mx-auto mt-5">
//             <Image src={imageURL} thumbnail/>
//           </div>
//         </div>
//       }
//       {imagePreview && <div className="row">
//         <div className="col-sm-10 col-md-8 mx-auto mt-5">
//           <Col xs={6} md={4}>
//             <Image src={imagePreview} thumbnail/>
//           </Col>
//         </div>
//       </div>}
//     </div>
//   )
// }
//
// export default withRouter(PictureUpload)
