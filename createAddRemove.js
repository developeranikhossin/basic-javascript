
// add Element

let olItem = document.createElement("li");


olItem.className = "a new new-another";
olItem.id = "new-id";
olItem.setAttribute("title", "new title add");
olItem.appendChild(document.createTextNode("javascript"));
document.querySelector("ol").appendChild(olItem);

console.log(olItem);




let ulItem = document.createElement("li");
let link = document.createElement("a");
link.appendChild(document.createTextNode("instagram"));
link.setAttribute("href", "#")
ulItem.appendChild(link);
document.querySelector("ul").appendChild(ulItem);


console.log(ulItem);
console.log(link);






// replacing element 


let newHeading = document.createElement("h1");
newHeading.appendChild(document.createTextNode("this is anik khan"));
let oldHeading = document.querySelector("h3");

let parent = document.querySelector(".container");
parent.replaceChild(newHeading, oldHeading);



console.log(newHeading);
console.log(oldHeading);
console.log(parent);



// remove element 


let listItem = document.querySelectorAll("li");
let list = document.querySelector("ol");
listItem[0].remove();
listItem[1].remove();


list.removeChild(list[7]);

list.classList.add("test");
list.classList.add("test-new");
list.classList.remove("test-new");
let val = list.hasAttribute('title');
val = list.hasAttribute("class");
list.setAttribute("title", "Yes")
list.removeAttribute("title");
console.log(list);


console.log(list);
console.log(listItem);







