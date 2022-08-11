// var evenOdd = 12;
// if (evenOdd % 2 == 0) {
//     console.log('odd number')
// }else{
//     console.log('even number')
// }



// var evenOdd = (evenOdd % 2 == 0) ? "odd number" : "even number";
// console.log(evenOdd)


// document.write("i am a anik");

// document.getElementById("someText").innerHTML = "i love javascript";
// document.getElementById("some1").innerHTML = "i love javascript";
// document.getElementById("some2").innerHTML = "i love javascript";

// console.log("i am anik");
// console.log("i am vai");
// var x;
// x = prompt("Enter your name?");
// document.write(x);



// var a;
// let b;
// a = 45;
// b = "anik";
// console.log(a);
// console.log(b);



// var c = 20;
// let d = c;
// console.log(c);
// console.log(d);
// var c = 80; 
// console.log(c);




// let a = 20;
// let b = 40;
// let c = 50;
// let d = a+b+c;
// a++;
// b++;
// console.log(a);
// console.log(b);

// true & true


// var a = (1>6) ? "hello":"world";
// console.log(a);


// var team = prompt("please enter a temperature: ");
// alert("aaa")
// console.log(team);





// var x = "hello \t\t anik";
// console.log(x);


// var z = "hello \nanik";
// console.log(z);
// z.length;



// var country = ["bangladesh", "india", "nepal", "vuten", "pakitan", "amerika"];
// console.log(country[1]="japan")
// console.log(country[6] = "us")
// country.push("china");
// console.log(country)
// console.log(country.length)
// country.pop()
// console.log(country.length)

// country.shift()
// console.log(country.length)
// country.unshift("aaa","aa","aa")
// console.log(country.length)

// var x = [];
// console.log(x);
// x.push(45);
// console.log(country)



// var a = [1,1,1,1];

// console.log(a.concat(100,400))




// console.log("hello \nanik")

// console.log(`anik khan
// anik hossain`)



// var age = 22;
// console.log(`my age is ${age}`);


// var name = "anik khan";
// var age = 22;
// var dob = "1-june-1998";
// console.log(`my name is:${name}
// my age is ${age}
// my year is ${dob}`);







// var a = 54
// var b = 45
// console.log(`${a} + ${b} = ${a+b}`);


// var age = prompt();

// if( age >= 50 ){
//     console.log("this is if");
// } else if( age >= 30 && age <= 50 ){
//     console.log("this is else");
// }else if(age >=10 && age <= 29){
//     console.log("coto");
// }else{
//     console.log("boro");
// }







// var n1 = prompt("first number: ")
// var n2 = prompt("second number: ")
// var n3 = prompt("third number: ")



// n1 = parseInt(n1);
// n2 = parseInt(n2);
// n3 = parseInt(n3);

// if (n1 >= n2 && n1 >= n3) {
//     console.log(n1 + " is the anik");
// }else if(n2 >= n1 && n2 >= n3){
//     console.log(n2 + " is the anik");
// }else{
//     console.log(n3 + " is the anik");
// }





// choice = prompt();
// var text;
// if (choice == "a") {
//     text = "you have selected option-1"
// }else if (choice == "b"){
//     text = "you have selected option-2"
// }else if (choice == "c"){
//     text = "you have selected option-3"
// }else{
//     text = "no option selected!";
// }
// console.log(text);



// choice = prompt();
// var text;
// switch (choice) {
//     case "a":
//         text = "option a selected";
//         break;
//     case "b":
//         text = "option b selected";
//         break;
//     case "c":
//         text = "option c selected";
//         break;
//     default:
//         text = " no option is selected";
//         break;
// }
// console.log(text);






// var number = prompt("what is your number?");
// number = parseInt(number);
// var grade;

// if ( number <= 100 && number >= 80 ) {
//     grade = "A+";
// }else if( number < 80 && number >= 70 ){
//     grade = "A";
// }else if ( number < 70 && number >= 60 ) {
//     grade = "A-";
// }else if ( number < 60 && number >= 50 ) {
//     grade = "B";
// }else if ( number < 50 && number >= 40 ) {
//     grade = "C";
// }else if ( number < 40 && number >= 33 ) {
//     grade = "D";
// }else if ( number < 30 && number >= 0 ) {
//     grade = "F";
// }else{
//     grade = "Invalid Input!";
// }
// console.log("Your Grade: " + grade);








// console.log("select an option: \n1. Add \n2 Subtract \n3. Mulitply \n4. Divide");

// var num1 = prompt("Enter first Number: ");
// var num2 = prompt("Enter second Number: ");
// var option = prompt("Choose your Operation: ");
// var result = null;

// num1 = parseInt(num1);
// num2 = parseInt(num2)
// option = parseInt(option);

// var num1con = isNaN(num1);
// var num2con = isNaN(num2);
// var optionCon = isNaN(option);

// if ( num1con || num2con || optionCon) {
//     console.log("invalid Number");
// }else{
//     switch (option) {
//         case 1:
//             result = num1 + num2;
//             break;
//         case 2:
//             result = num1 - num2;
//             break;
//         case 3:
//             result = num1 * num2;
//             break;
//         case 4:
//             result = num1 / num2;
//             break;
//         default:
//             break;
//     }
//     if (result == null){
//         console.log("no result");
//     }else{
//         console.log("result: " + result );
//     }
// }






// while loop 

// var i = 1;
// do {
//     console.log("value of i: " + i)
//     i++;
// }while (i <= 15);



// var i = 1;
// while (i <= 15){
//     console.log(i)
//     i++;
// }





// for (let i = 1; i <= 5; i++) {
//     // const element = 5[i];
//     if ( i == 3 ){
//         continue;
//     }
//     console.log(i)
// }




// for (let i = 0; i <= 5; i++) {
//     console.log(`index : ${i}`);
//     console.log(name[i])

// }

// for (let i = 0; i < food.length; i++) {
//     const element = food[i];
//     console.log(`hello : ${element}`);
// }




// var nam = " i love learing javascript";
// var food = ["anik", "ov",];


// let person = {
//     nam : "anik hossain";
//     profreesonal: "student";
//     age : 22;
// }

// for ( var x in nam ) {
//     console.log(x);
// }



// for (ver x of name) {
//     console.log(x);
// }








// var n = parseInt(prompt("enter the number the team"));
// var sum = 0;
// var series = "";

// for (let i = 1; i <= n; i++) {
//     console.log(i*i);
//     series += (i**2).toString();
//     series += " + ";
//     if( i == n ){ continue; }
// }

// console.log(series);
// console.log(sum);






// console.log();




// function saySomeThing(){
//     console.log("hello world");
//     console.log("this is anik vai");
//     console.log("my name is anik khan");
// }

// saySomeThing();




// function saySomeThing(){
//     alert("hello");
// }
// saySomeThing();

// var firstName = "anik";
// var lastName = "khan";

// function say(par1 = "ov", par2 = "vai") {
//     alert(`hello ${ par1 } ${ par2 }!`);
// }


// say(firstName);


// function addNam(a=0, b=0){
//     return(a+b);
// }

// alert(addNam(14,3));
// console.log(addNam(1.2, 5.3));








// function saySomeThing(name){
//     console.log("anik " + name);
// }

// let saySomeThing1 = function(name1){
//     console.log("anik 2 " + name1);
// }
// let arrow = name3 => {
//     console.log("this is " + name3);
// }


// saySomeThing("vai 1");
// saySomeThing1("vai 2");
// arrow("javascript");







// var food = ["kec", "iec kriam", "dim", "singara"];

// food.forEach(function(value, i){
//     console.log(`index : ${i} and ${value}`);
// })



// function addSomeThing(value, i){
//     return`index : ${i} and ${value}`;
// }

// var foods = food.map(addSomeThing);
// console.log(foods);




// let person = {
//     first : "anik",
//     last : "khan",
//     age : 22,
//     dob : "06-04-1998",

//     fullName: function () {
//         return ` ${this.first} ${this.last} `;
//     }
// }

// var par = prompt(person.first);
// console.log(par);
// console.log(person.fullName());








// let val;


// val = Math.PI;
// val = Math.E;
// val = Math.round(3.2);
// val = Math.ceil(1.9);
// val = Math.floor(5);
// val = Math.sqrt(1.3);
// val = Math.abs(-4);
// val = Math.pow(2, 3);
// val = Math.min(1, 2, 2, -4);
// val = Math.mix(1,2, -5);
// val = Math.random()
// val = Math.floor(Math.random() * 100 + 1);



// console.log(val);







// date and time object 

// let today = new Date();
// let birthDay = new Date("06-04-1998 11:25:06");
// birthDay = new Date("06-04-2020");
// birthDay = new Date("09/10/2020");



// val = today;
// val = today.toString();
// val = birthDay;
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getTime();

// console.log(val);




// var a = 1;
// let b = 2;
// const c = 3;

// console.log(`global Scope :`,a, b, c);

// function text() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     var d = 10;
//     console.log(`local Scope:`, a, b, c, d);
// }

// text();

// console.log(`global Scope :`, a, b, c);

// if (true) {
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log(`if Scope :`, a, b, c);
// }

// console.log(`global Scope :`, a, b, c);



// for (var a = 0; a < 10; a++) {
//     console.log(`loop Scope :`, a);
// }

// console.log(`global Scope :`, a, b, c);






// let person = {
//     first : "anik",
//     last : "khan",
//     dob : "06/04/1998",

//     fullName : function (){
//         console.log(`${this.first} ${this.last}`);
//     }
// }

// let person2 = {
//     first : "ov",
//     last : "khan",
//     dob : "06/04/2012",

//     fullName : function (){
//         console.log(`${this.first} ${this.last}`);
//     }
// }

// console.log(person);
// console.log(person2);




// class object 

// class object method


// class Person {
//     constructor(fname, lname, birthday){
//         this.firstName = fname;
//         this.lastName = lname;
//         this.dob = birthday;    
//     }

//     calculateAge() {
//         let birthday = new Date(this.dob);
//         let diff = Date.now() - birthday.getTime();
//         let ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1990);
//     }

//     fullName(){
//         console.log(this.firstName, this.lastName);
//     }

// }

// let person1 = new Person("anik", "khan", "06-04-1997");
// let person2 = new Person("ov", "khan", "04-06-1998");
// let person3 = new Person("munna", "khan", "12-10-1998");

// console.log(person1.calculateAge());
// console.log(person2.calculateAge());
// console.log(person3.calculateAge());


// console.log(person1.fullName());
// console.log(person2.fullName());
// console.log(person3.fullName());





// sub class 



// class person {   //base class
//     constructor(fname, lname){
//         this.firstName = fname;
//         this.lastName = lname;
//     }

//     greeting(){
//         return `Hello ${this.firstName} ${this.lastName}`;
//     }
// }


// class customer extends person {    // sub class 
//     constructor(fname, lname, phon, memberShip){
//         super(fname, lname);
//         this.phone = phon;
//         this.memberShip = memberShip;
//     }


//     fullName(){
//         console.log(this.firstName, this.lastName);
//     }

// }


// let person1 = new person("anik", "khan");
// console.log(person1);
// console.log(person1.greeting());
// let customer1 = new customer("ov", "khan", "01993553423", "1234");
// console.log(customer1);
// console.log(customer1.greeting());
// console.log(customer1.fullName());








// class person {
//     constructor(fname, lname){
//         this.firstName = fname;
//         this.lastName = lname;
//     }
    
//     greeting(){
//         console.log(`Hello ${this.firstName} ${this.lastName}`);
//     }

//     static test(){
//         console.log("i am static");
//     }

// }


// let person1 = new person("anik", "khan");
// console.log(person1);
// console.log(person1.greeting());
// console.log(person.test());


































