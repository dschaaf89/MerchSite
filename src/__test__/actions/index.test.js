import * as actions from './../../actions';

describe('Merch Site actions', () => {
  it('deleteItem should create DELETE_ITEM action', () => {
    expect(actions.deleteItem(1)).toEqual({
      type: 'DELETE_ITEM',
      id : 1
    });
  });
  it('toggleForm should create TOGGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type:'TOGGLE_FORM'
    });
  });
  it('addItem should create ADD_ITEM action', () => {
    expect(actions.addItem({name: 'ball', description: 'basketball', quantity: 3, id: 1})).toEqual({
      type:'ADD_ITEM',
      Name:'ball',
      Description:'basketball',
      Quantity:3,
      Id:1
    });
  });
});