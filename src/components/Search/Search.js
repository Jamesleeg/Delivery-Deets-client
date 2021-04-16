import React from 'react'

const SearchBox = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type='search'
        className='search'
        placeholder={props.placeholder}
        onChange= {props.handleChange}
      />
      <button type='submit'>Search</button>
    </form>
  )
}
export default SearchBox
