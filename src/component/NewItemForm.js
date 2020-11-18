import React from 'react'
import PropTypes from 'prop-types'
import {v4} from 'uuid'

function NewItemForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='Name'
          placeholder='Enter a Name' />
        <input
          type='text'
          name='Description'
          placeholder='Enter a Description' />
          <input
          type='number'
          name='Quantity'
          placeholder='Enter a Quantity' />
          <button type ='submit'>Submit</button>
          {/* Add cancel button */}
      </form>
    </React.Fragment>
  )
};

export default NewItemForm;