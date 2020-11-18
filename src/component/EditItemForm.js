import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditItemForm (props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({
      Name: event.target.Name.value, 
      Description: event.target.Description.value, 
      Quantity: event.target.Quantity.value, 
      id: item.id});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler = {handleEditItemFormSubmission}
        buttonText="Update Item" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  onEditItem: PropTypes.func
};

export default EditItemForm;