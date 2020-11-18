import React from 'react'
import ItemController from './ItemController'
import ListView from "./ListView";

const itemCatalog = [
  {
    Name: 'Apple',
    Description: 'Red and delicious',
    Quantity: 6
  },
  {
    Name: 'Grape',
    Description: 'Green, seedless, and juicey',
    Quantity: 8
  }
]

function ItemList () {

  return (
    <React.Fragment>
      <ItemController />
      <div id="list-view">
        <ListView
          Items={itemCatalog} />
      </div>
    </React.Fragment>
  );

}

export default ItemList;