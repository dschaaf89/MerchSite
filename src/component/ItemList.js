import React from 'react'
import ItemController from './ItemController'
import ListView from "./ListView";


function ItemList () {

  return (
    <React.Fragment>
      <ItemController />
      <ListView />
    </React.Fragment>
  );

}
export default ItemList;