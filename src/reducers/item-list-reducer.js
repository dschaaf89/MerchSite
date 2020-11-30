export default (state = {},action) => {
  const {Name,Description,Quantity,Id} = action;
  switch (action.type){
    case 'ADD_ITEM':
    return Object.assign({},state,{
      [Id]:{
        Name:Name,
        Description:Description,
        Quantity:Quantity,
        Id: Id
      }
    });
    case 'DELETE_ITEM':
      const newState = {... state};
      delete newState[Id];
      return newState;
  default:
    return state;
  }
};