import React from "react";
import Item from './Item'
import PropTypes from 'prop-types';


function ListView(props) {
  return (
    <React.Fragment>
      <hr />
        { Object.values(props.Items).map((item) => {
          return <Item
            whenItemClicked = { props.onItemSelection }
            Name={item.Name}
            Description={item.Description}
            Quantity={item.Quantity}
            id={item.id}
            key={item.id}/>
        })}
    </React.Fragment>
  );
}

Item.propTypes = {
  Items: PropTypes.object,
  onItemSelection: PropTypes.func
};

export default ListView;