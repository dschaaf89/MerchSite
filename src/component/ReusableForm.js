import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  // let name = 'Enter a Name';
  // let description = 'Enter a Description';
  // let quantity = 'Enter a Quantity';
  // if (props.Name !== null) {
  //   name = props.Name;
  //   description = props.Description;
  //   quantity = props.Quantity;
  // }
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