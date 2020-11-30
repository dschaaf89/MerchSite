import itemListReducer from '../../reducers/item-list-reducer';

describe('itemListReducer', () => {
  let action;
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
});