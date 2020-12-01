export default (state = {}, action) => {
  const { Name, Description, Quantity, id } = action;
  switch (action.type){
    case 'ADD_ITEM':
    return Object.assign({}, state, {
      [id]:{
        Name: Name,
        Description: Description,
        Quantity: Quantity,
        id: id
      }
    });
    case 'DELETE_ITEM':
      const newState = {...state};
      delete newState[id];
      return newState;
      
    case 'QUANTITY_CHANGE':
      return Object.assign({}, state, {
        [id]:{
          Name: Name,
          Description: Description,
          Quantity: Quantity,
          id: id
        }
      });
    default:
    return state;
  }
};