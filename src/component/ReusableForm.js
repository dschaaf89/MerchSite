import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  console.log("in reuseable form");
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='Name'
          defaultValue={props.Name ? props.Name : ""}
          placeholder='Enter a Name' />
          <br />
        <input
          type='text'
          name='Description'
          defaultValue={props.Description ? props.Description : ""}
          placeholder='Enter a Description' /> 
          <br />
        <input
          type='number'
          name='Quantity'
          min='0'
          max='28'
          defaultValue={props.Quantity ? props.Quantity : ""}
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