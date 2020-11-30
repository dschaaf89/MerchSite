import * as actions from './../../actions';

describe('Merch Site actions', () => {
  it('deleteItem should create DELETE_ITEM action', () => {
    expect(actions.deleteItem(1)).toEqual({
      type: 'DELETE_ITEM',
      id : 1
    });
  });
  it('toggleForm shou create TOGGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type:'TOGGLE_FORM'
    });
  });
});