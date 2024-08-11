document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('add-item');
    const shoppingList = document.getElementById('shopping-list');


    function addItem() {
        const itemNameInput = document.getElementById('item-name');
        const itemQuantityInput = document.getElementById('item-quantity');

        const itemName = itemNameInput.value.trim();
        const itemQuantity = itemQuantityInput.value.trim();

        if (itemName && itemQuantity) {
            const listItem = document.createElement('li');
            listItem.className = 'shopping-list-item';
            
            listItem.innerHTML = `
                <span>${itemName} (${itemQuantity})</span>
                <button class="edit">Edit</button>
                <button class="remove">Remove</button>
            `;

       
            listItem.querySelector('.edit').addEventListener('click', () => editItem(listItem, itemName, itemQuantity));
            listItem.querySelector('.remove').addEventListener('click', () => removeItem(listItem));

            shoppingList.appendChild(listItem);

            itemNameInput.value = '';
            itemQuantityInput.value = '';
        } else {
            alert('Please enter both item name and quantity.');
        }
    }

    function editItem(listItem, oldName, oldQuantity) {
        const newName = prompt('Enter new item name:', oldName);
        const newQuantity = prompt('Enter new quantity:', oldQuantity);

        if (newName && newQuantity) {
            listItem.querySelector('span').textContent = `${newName} (${newQuantity})`;
        }
    }

 
    function removeItem(listItem) {
        shoppingList.removeChild(listItem);
    }

    
    addItemButton.addEventListener('click', addItem);
});
