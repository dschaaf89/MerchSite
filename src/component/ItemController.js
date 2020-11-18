import { render } from "@testing-library/react";
import React from "react";
// import Details from "./Details";
// import Edit from "./Edit";
import NewItemForm from "./NewItemForm";
// import Delete from "./Delete";

class ItemController extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  //event handlers

  render() {
    let currentlyVisibleState = null;
    if(true) { currentlyVisibleState = <NewItemForm />}
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {/* {button} */}
      </React.Fragment>
    );
  }
}


export default ItemController;