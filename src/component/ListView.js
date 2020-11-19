import React from "react";
import Item from './Item'
import PropTypes from 'prop-types';


function ListView(props) {
  return (
    <React.Fragment>
      <ul>
        {props.Items.map((item, index) => 
        <Item
          whenItemClicked = {props.onTicketSelection}
          Name={item.Name}
          Description={item.Description}
          Quantity={item.Quantity}
          id={ticket.id}
          key={item.id}/>
        )}
      </ul>
    </React.Fragment>
  );
}

Item.propTypes = {
  Items: PropTypes.array.isRequired,
  onItemSelection: PropTypes.func
};

export default ListView;