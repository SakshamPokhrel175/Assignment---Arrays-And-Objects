//Version:1
console.log("\n\n\n\n\nVERSION:2");

( function(){



//1. Define the Item Class
class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// 2. Inventory Management Functions

//a. Add Item
function addItem(inventory, item) {
    inventory.push(item);
}

// b. Update Item
function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}


// c. Delete Item
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}



// 3. Additional Utility Functions

// a. Get Item
function getItem(inventory, id) {
    return inventory.find(item => item.id === id) || null;
}


//b. Print Inventory
function printInventory(inventory) {
    console.log("Inventory:");
    inventory.forEach(item => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price.toFixed(2)}`);
    });
}




// 4. Example Usage

let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
];
console.log("Initial Inventory:");
printInventory(inventory); 


// Adding an item
addItem(inventory, new Item(3, 'Orange', 15, 0.7));
console.log("\nAdding item:");
printInventory(inventory); // After Adding


// Updating an item
updateItem(inventory, 2, { quantity: 30 });
console.log("\nUpdating Inventory:");
printInventory(inventory); // After Updating


// Deleting an item
deleteItem(inventory, 2);
console.log("\nDeleting item:");
printInventory(inventory); // After Deleting


// Get item by ID
console.log(getItem(inventory, 1)); // Returns item with ID 1

})(); //calling function


console.log("\n\n\n\n\nVERSION:2");



//Version : 2
( function(){


// Initial Inventory
let inventory = [
    { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
  ];
console.log("\nInitial Inventory:" , inventory);



//Adding item:

let addItem=function(id, name , quantity , price){
    let newItem = { id, name, quantity, price };
    inventory.push(newItem);
}
addItem(3, 'Orange', 15, 0.7);
console.log("\nAdding item:", inventory);


//Updating item:
let updateItem= function(id , updateDetails){
    let item = inventory.find(item=>item.id===id);
    if(item){
        Object.assign(id , updateDetails);
    }
}
updateItem(2, { quantity: 30 });
console.log("\nUpdating Inventory:", inventory);



//Deleting item:
let deleteItem = function(id){
    inventory = inventory.filter(item=>item.id!==id);
}
deleteItem(2);
console.log("\nDeleting item:", inventory);




})();
