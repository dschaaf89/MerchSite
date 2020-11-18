import React from "react";
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <React.Fragment>
      <li>{props.Name} : {props.Quantity}</li>
    </React.Fragment>
  );
}

Item.propTypes = {
  Name: PropTypes.string.isRequired,
  Quantity: PropTypes.number.isRequired
};

export default Item;