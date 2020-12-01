export const deleteItem = id => ({
  type: 'DELETE_ITEM',
  id
});

export const toggleForm = () => ({  
  type: 'TOGGLE_FORM'
});

export const quantityChange = (item) => {
  const { Name, Description, Quantity, id } = item;
  return {
    type: 'QUANTITY_CHANGE',
    Name: Name,
    Description: Description,
    Quantity: Quantity,
    id: id
  }
}

export const addItem = (item) => {
  const { Name, Description, Quantity, id } = item;
  return {
    type: 'ADD_ITEM',
    Name: Name,
    Description: Description,
    Quantity: Quantity,
    id: id
  }
}