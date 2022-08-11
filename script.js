let val;

let list = document.querySelector("ul");
let listItem = document.querySelector("ul li");
let listFirst = document.querySelector("ul li:first-child");
let listLast = document.querySelector("ul li:last-child");

val = list;
val = listItem;
val = listFirst;
val = listLast;


// get child nodes

val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;


val = list.childNodes;
val = list.children[0];
val = list.children[0].textContent = "Hello";
val = list.children[1].children[0];
val = list.children[1].children[0].id;
val = list.children[1].children[0].href;


val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem;
val = listItem.children;
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentElement.parentElement;


val = listItem.nextSibling.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling;


val = document.querySelector('ul li:last-child');

val = val.previousSibling;
val = val.previousElementSibling;
val = val.previousElementSibling.previousElementSibling;



console.log(val);

























