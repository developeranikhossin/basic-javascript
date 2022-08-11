// Regular Expression

let re;
re = /hello/;



console.log(re);
console.log(re.source);


str = "hello world";
str = "again hello world";
str = "world";


// exec 

let result = re.exec(str);


// text- true and false 

result = re.test(str);


// math 

str = "again hello world world";
result = str.match(re);


// search 

result = str.search(re);


// replace() - Return new string
str = "Again Hello World Hello";
let newstr = str.replace(re, "Hi");


console.log(result);
console.log(str);
console.log(re.source);
console.log(newstr);















































