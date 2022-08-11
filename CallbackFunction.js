// callback function 


// setTimeout(function(){
//     console.log("hello world");
// }, 2000);



// let persons = [
//     {firstName: "anik", lastName: "khan"},
//     {firstName: "munna", lastName: "vai"}
// ];


// function createPerson(person){
//     setTimeout (function(){
//         persons.push(person);
//     }, 4000);
// }


// function getPerson(person){
//     setTimeout (function(){
//         let output = "";
//         persons.forEach(function(person){
//             output += `<li>${person.firstName} ${person.lastName}</li>`;
//         });
//         document.getElementById("output").innerHTML = output;       
//     }, 3000);
// }

// createPerson({firstName: "anik", lastName: "hossain"});
// getPerson();





let persons = [
    {firstName: "anik", lastName: "khan"},
    {firstName: "munna", lastName: "vai"}
];


function createPerson(person, callback){
    setTimeout (function(){
        persons.push(person);
        callback();
    }, 2000);
}


function getPerson(person){
    setTimeout (function(){
        let output = "";
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`;
        });
        document.getElementById("output").innerHTML = output;       
    }, 500);
}

createPerson({firstName: "anik", lastName: "hossain"}, getPerson);





















