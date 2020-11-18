import React from 'react'
import PropTypes from 'prop-types'
import {v4} from 'uuid'

function NewItemForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewItemForm}>
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
  function handleNewItemForm(event){
    event.preventDefault();
    props.onNewItemForm({Name: event.target.Name.value, Description: event.target.Description.value, Quantity: event.target.Quantity.value, id:v4()});
  }
};

export default NewItemForm;