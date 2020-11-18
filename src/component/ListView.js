import React from "react";
import Item from './Item'
import PropTypes from 'prop-types';


function ListView(props) {
  return (
    <React.Fragment>
      <ul>
        {props.Items.map((item, index) => 
        <a onclick={handleItemDetail}><Item Name={item.Name}
          Quantity={item.Quantity}
          key={item.id}/></a>
        )}
      </ul>
    </React.Fragment>
  );
  // function handleGoToDetails(event){
  //   event.preventDefault();
  //   props.onGoToDetails({ key:});
  // }
}

Item.propTypes = {
  Items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListView;