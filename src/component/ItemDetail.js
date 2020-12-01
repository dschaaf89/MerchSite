import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete } = props;
  let quantity = item.Quantity;
  if(parseInt(quantity) === 0) {
    quantity = 'Out Of Stock';
  }

  function handleChangeItemQuantityButton(item, isSub, dif) {
    dif = parseInt(dif);
    props.onChangeItemQuantityClick({
      Name: item.Name, 
      Description: item.Description, 
      Quantity: isSub ? (item.Quantity === 0 ? 0 : item.Quantity = parseInt(item.Quantity) - dif) : item.Quantity = parseInt(item.Quantity) + dif, //  --item.Quantity  ===  item.Quantity = item.Quantity - 1
      id: item.id});
  }

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>Name: {item.Name}<br />
      Description: {item.Description}<br />
      Quantity: {quantity}</h3>
      <button onClick = {()=> handleChangeItemQuantityButton(item, true, 1) }>Buy</button> {/* reduce quantity */}
      <button onClick = {()=> handleChangeItemQuantityButton(item, false, 10)  }>Stock</button> {/* increase quantity props.onStockClick*/}
      <button onClick = { props.onClickingEdit }>Update Item</button>
      <button onClick = {() => onClickingDelete(item.id) }>Close Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onChangeItemQuantityClick: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;