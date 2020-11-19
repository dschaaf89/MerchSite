import React from "react";
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <li>{props.Name} : {props.Quantity}</li>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  Name: PropTypes.string.isRequired,
  Description: PropTypes.string,
  Quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;