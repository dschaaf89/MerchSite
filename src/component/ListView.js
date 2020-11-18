import React from "react";
import Item from './Item'
import PropTypes from 'prop-types';

function ListView(props) {
  return (
    <React.Fragment>
      <ul>
        {props.Items.map((item, index) => 
        <Item Name = {item.Name}
          Quantity={item.Quantity}
          key={index}/>
        )}
      </ul>
    </React.Fragment>
  );
}

Item.propTypes = {
  Items: PropTypes.arrayOf(object).isRequired,
};

export default ListView;