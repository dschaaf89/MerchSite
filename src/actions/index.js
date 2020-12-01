export const deleteItem = id => ({
  type: 'DELETE_ITEM',
  id
});

export const toggleForm = () => ({  
  type: 'TOGGLE_FORM'
});

export const addItem = (item) => {
  const { name, description, quantity, id } = item;
  return {
    type: 'ADD_ITEM',
    Name: name,
    Description: description,
    Quantity: quantity,
    id: id
  }
}