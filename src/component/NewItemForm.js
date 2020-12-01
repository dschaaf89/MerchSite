import React from 'react'
import PropTypes from 'prop-types'
import {v4} from 'uuid'
import ReusableForm from "./ReusableForm";

function NewItemForm(props) {
  console.log("in new form");
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      Name: event.target.Name.value, 
      Description: event.target.Description.value, 
      Quantity: event.target.Quantity.value === "" || event.target.Quantity.value < 0 ? 0 : event.target.Quantity.value, 
      id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleNewItemFormSubmission}
        buttonText = "Add Item" />
    </React.Fragment>
  )
};

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;