//EXAMINE THE DOCUMENT OBJECT

//console.dir(document)
 
//set background color for a class
let items =  document.querySelectorAll('.list-group-item');

console.log(items)

 for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'green';
} 

let itemList = document.querySelector('#items');


console.log(itemList.firstChild)