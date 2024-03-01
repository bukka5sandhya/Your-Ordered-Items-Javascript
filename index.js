let itemList = [{
    itemName:"Veg Biryani",
    uniqueNo:1,
   },
   {
    itemName:"Chicken 65",
    uniqueNo:2,
   },
   {
    itemName:"Paratha",
    uniqueNo:3,
   },
];

let orderedListContainerEle = document.getElementById('orderedListContainer');

function onDeleteItem(itemId){
    let deleteEle = document.getElementById(itemId);
    orderedListContainerEle.removeChild(deleteEle);
}
function createAndAppend(item){
    let itemId = "item"+item.uniqueNo;
    let buttonId = "button"+item.uniqueNo;

    let deleteItemElement = document.createElement("li");
    deleteItemElement.id = itemId;
    deleteItemElement.classList.add("order-item");
    deleteItemElement.textContent =  item.itemName;
    orderedListContainerEle.appendChild(deleteItemElement);

    let buttonElement = document.createElement("button");
    buttonElement.classList.add("btn","btn-danger","ml-3");
    buttonElement.id=buttonId;
    buttonElement.textContent = "Cancel";

    buttonElement.onclick = function(){
        onDeleteItem(itemId);
    };
    deleteItemElement.appendChild(buttonElement);


}
for(let eachItem of itemList){
    createAndAppend(eachItem);
}
