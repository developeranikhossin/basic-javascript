// Promises
// .then



let persons = [
    {firstName: "anik", lastName: "khan"},
    {firstName: "munna", lastName: "vai"}
];


function createPerson(person, callback){
    let prom = new Promise(function(resolve, reject){
        persons.push(person);
        resolve();
    });
    return prom;
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

createPerson({firstName: "anik", lastName: "hossain"}).then(getPerson);

















