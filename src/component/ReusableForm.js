import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
    );
  }
  
  ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
  };
  
  export default ReusableForm;