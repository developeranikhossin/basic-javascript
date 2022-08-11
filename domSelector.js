
let val;

// getting an element

val = document.getElementById('document-title');
val = document.getElementById('document-title').id;
val = document.getElementById('document-title').className;

// changing style

val = document.getElementById('document-title').style.background = "#333";
val = document.getElementById('document-title').style.color = "#fff";
val = document.getElementById('document-title').style.textAlign = "center";
val = document.getElementById('document-title').style.fontSize = "30px";
val = document.getElementById('document-title').style.padding = "10px 0px";
val = document.getElementById('document-title').style.display = "none";
val = document.getElementById('document-title').style.display = "block";


// changing content

val = document.getElementById("document-title").textContent = "new content";
val = document.getElementById("document-title").innerText = "Algin new content";
val = document.getElementById("document-title").innerHTML = "Algin new content";
val = document.getElementById("document-title").innerHTML = "<i>Algin Algin new content</i>";

val = document.getElementById('document-title');

val.innerText = "ha ha ha ha";


// document querySelector

val = document.querySelector("#document-title");
val = document.querySelector(".sample-class");
val = document.querySelector("h3");
val = document.querySelector("ol");
val = document.querySelector("li");
val = document.querySelector("ol li");
val.style.background = "red";
val.style.color = "#FFf";
val = document.querySelector("ol li:last-child");
val = document.querySelector("ol li:nth-child(3)");
val = document.querySelector("ol li:nth-child(3)").innerText = "hello";




console.log(val);




// document.getElementsByClassName


let list = document.getElementsByClassName("sample-class");
list[0].style.background = "blue";
list[0].style.color = "#333";
list[0].style.padding = "25px";
list[0].textContent = "Hello World";

console.log(list);






// get Element bye tag name 






let listTag = document.getElementsByTagName("li");
listTag = document.getElementsByTagName("li");
listTag = document.querySelector("ol").getElementsByTagName("li");

console.log(listTag[0]);

let lis = Array.from(listTag)

lis.forEach(function(item) {
    console.log(item);
});


console.log(lis);





// document.querySelectorAll()
// id -> #
// className -> .
// tagname -> nothing


list = document.querySelectorAll("ol li");

list.forEach(function(item) {
    console.log(item);
});

console.log(list);


let lisOdd = document.querySelectorAll("li:nth-child(odd)");
let lisEvn = document.querySelectorAll("li:nth-child(even)");


lisOdd.forEach(function(item) {
    item.style.background = "grey";
    item.style.color = "#FFF";
});

lisEvn.forEach(function(item) {
    item.style.background = "#f1c40f";
    item.style.color = "#2c3e50";
});

console.log(lisOdd);
console.log(lisEvn);






