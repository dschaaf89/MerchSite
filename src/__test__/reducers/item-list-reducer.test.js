import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {

  let action;

  const currentState = {
    1: { Name: 'Cat',
    Description: 'An orange cat',
    Quantity: 1,
    Id: 1 },
    2: { Name: 'Dog',
    Description: 'A brown dog',
    Quantity: 2,
    Id: 2 }
  }
  
  const itemData = {
    Name: 'Cat',
    Description: 'An orange cat',
    Quantity: 1,
    Id: 1
  };
  
  test('Should return default state if no action type is recognized', () => {
    expect(itemListReducer({}, {type: null})).toEqual({});
  });
  
  test('should successfully add new item data to itemCatalog', () => {
  const { name, description, quantity, id } = itemData;
  action = {
    type: 'ADD_ITEM',
    Name: name,
    Description: description,
    Quantity: quantity,
    Id: id
  };
    expect(itemListReducer({},action)).toEqual({
      [id]:{
        Name: name,
        Description: description,
        Quantity: quantity,
        Id: id        
      }
    });
  });

  test('should successfully delete an Item', () => {
    action = {
      type: 'DELETE_ITEM',
      Id: 1
    };
    expect(itemListReducer(currentState,action)).toEqual({
      2: { Name: 'Dog',
      Description: 'A brown dog',
      Quantity: 2,
      Id: 2 }
    });
  });
});