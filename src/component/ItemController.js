import React from "react";
import ListView from "./ListView";
import EditItemForm from "./EditItemForm";
import NewItemForm from "./NewItemForm";
import ItemDetail from './ItemDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class ItemController extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      selectedItem: null,
      editing: false
    };
  }

  //event handlers
  handleEditingItemInList = (itemToEdit) => { // editing item in actual array
    const { dispatch } = this.props;
    const action = a.addItem(itemToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedItem: null
    });
  }

  handleEditClick = () => { // sets items to edit
    this.setState({editing: true});
  }

  handleDeletingItem = (id) => { /// deletes item from array
    const { dispatch } = this.props;
    const action = a.deleteItem(id);
    dispatch(action);
    this.setState({selectedItem: null});
  }

  handleClick = () => {  // sets state to normal
    
    if (this.state.selectedItem != null) {
      this.setState({
        selectedItem: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleChangingSelectedItem = (id) => { // view item in Detail
    const selectedItem = this.props.itemCatalog[id];
    this.setState({selectedItem : selectedItem});
  }

  handleAddingNewItemToList = (newItem) => { // adds new item to Array
    const { dispatch } = this.props;
    const action = a.addItem(newItem);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangeItemQuantityClick =  (itemToEdit) => {
    const { dispatch } = this.props;
    const action = a.quantityChange(itemToEdit);
    dispatch(action);
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
        onClickingDelete = {this.handleDeletingItem} 
        onClickingEdit = {this.handleEditClick}
        onChangeItemQuantityClick = {this.handleChangeItemQuantityClick} 
        />
      buttonText = "Return to Item List";
    } else if (this.props.formVisibleOnPage) { // catch is set
      currentlyVisibleState = <NewItemForm 
        onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = "Return to Item List";
    } else {                                // default
      currentlyVisibleState = <ListView 
        Items={this.props.itemCatalog} 
        onItemSelection={this.handleChangingSelectedItem} />;
      buttonText = "Add Item";
    }
    
    return (
      <React.Fragment>
        {this.props.itemCatalog[0] === undefined && 
          currentlyVisibleState.props.Items !== undefined ? "There are no items currently in the store" : ""}
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

ItemController.propTypes ={
  itemCatalog:PropTypes.object
};

const mapStateToProps = state => {
  return {
    itemCatalog: state.itemCatalog,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ItemController = connect(mapStateToProps)(ItemController);

export default ItemController;