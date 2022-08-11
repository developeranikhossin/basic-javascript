// javascript object 

var student = {
    name: "anik",
    age: 22,
    homeTown: "kushtia"
};


// javascript json  


// var student_json{
//     "name" : "anik",
//     "age" : 22,
//     "homeTown" : "kushtia"
// };


var student_json = JSON.stringify(student);

console.log(student_json);


var student_javascript_object = JSON.parse(student_json);

console.log(student_javascript_object);




// JSON Data Types

// json support করে নিছে 6 টা

// string 
// number
// array
// object
// boolean
// null


var parson = {
    name: "anik",
    age: 22,
    homeTown: "kushtia",
    greet: function(){
        console.log(`hello ${this.name}`);
    }
};

parson.greet();


var parson_json = JSON.stringify(parson);

console.log(parson_json);





// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object


var person1 = {
    "name": "Rahim",
    "age": 25,
    "hometown": "Dhaka",
    "married": false
};

// var person2 = {
//     name: "Karim",
//     age: 35,
//     hometown: "Chittagong",
//     married: true
// };


var json = JSON.stringify(person1);
console.log(json);

var object = JSON.parse(json);
console.log(object);
















