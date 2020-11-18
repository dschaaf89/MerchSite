import React from "react";
import ListView from "./ListView";
import EditItemForm from "./EditItemForm";
import NewItemForm from "./NewItemForm";
import ItemDelete from "./ItemDelete";
import ItemDetail from './ItemDetail';

class ItemController extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      formVisibleOnPage: false,
      itemCatalog = [],
      selectedItem: null,
      editing: false
    }
  }
  //event handlers
  handleEditingItemInList = (itemToEdit) => { // editing item in actual array
    const editedItemCatalog = this.state.itemCatalog
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      itemCatalog: editedItemCatalog,
      editing: false,
      selectedItem: null
    });
  }
  handleEditClick = () => { // sets items to edit
    this.setState({editing: true});
  }

  handleDeletingItem = (id) => { /// deletes item from array
    const newItemCatalog = this.state.itemCatalog
      .filter(item => item.id !== id);
    this.setState({
      itemCatalog: newItemCatalog,
      selectedItem: null
    });
  }

  handleClick = () => {  // sets state to normal
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedItem = (id) => { // view item in Detail
    const selectedItem = this.state.item
      .filter(item => item.id === id)[0];
    this.setState({selectedItem});
  }

  handleAddingNewItemToList = (newItem) => { // adds new item to Array
    const newItemCatalog = this.state.itemCatalog
      .concat(newItem);
    this.setState({
      itemCatalog: newItemCatalog,
      formVisibleOnPage: false
    });
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) { // edit
      currentlyVisibleState = <EditItemForm 
        item = {this.state.selectedItem} 
        onEditItem =  {this.handleEditingItemInList}/>
      buttonText = "Return to Item List";
    } else if (this.state.selectedItem !== null) { // delete and edit
      currentlyVisibleState = <ItemDetail 
        item = {this.state.selectedItem} 
        onClickDelete = {this.handleDeletingItem} 
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Item List";
    } else if (this.state.formVisibleOnPage) { // catch is set
      currentlyVisibleState = <NewItemForm 
        onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = "Return to Item List";
    } else {                                // default
      currentlyVisibleState = <ItemList 
        itemList={this.state.itemCatalog} 
        onItemSelection={this.handleChangingSelectedItem} />;
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}


export default ItemController;