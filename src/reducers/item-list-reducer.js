export default (state = {},action) => {
  const { name,description,quantity,id } = action;
  switch (action.type){
    case 'ADD_ITEM':
    return Object.assign({}, state, {
      [id]:{
        Name: name,
        Description: description,
        Quantity: quantity,
        id: id
      }
    });
    case 'DELETE_ITEM':
      const newState = {...state};
      delete newState[id];
      return newState;
    default:
    return state;
  }
};