function message(){
    console.log("hello world");
}

// let btn = document.getElementById("sample-btn").addEventListener("click", message);
// document.querySelector(".container").addEventListener('click', message);
// document.querySelector('.container').style.background = "red";

function message(e){
    let val = e;
    val =  e.target;
    val =  e.target.id;
    val =  e.timeStamp;
    val = e.type;
    val = e.clientY;
    val = e.clientX;
    
    val = e.offsetX;
    val = e.offsetY;
    val = this;

    this.style.background = `#${e.offsetX}`;



    console.log(e.offsetY);
    console.log(e.offsetX);
    console.log(val);


}



// form 



document.querySelector("#name").addEventListener('focus', test);
document.querySelector("#name").addEventListener('keyup', test2);

function test(e){  
    this.style.background = "pink";
}

function test2(e){
    document.getElementById("type-value").innerText = this.value;
}





// Error Handling practice




console.log("Before Error!");

try {
    //test();
    //undefined.test();
} catch(err) {
    //console.log(err);
    console.log(err.message);
    console.log(err.name);
} finally {
    console.log("I am inside finally!");
}

console.log("After Error!");



// Error Handling

let a = 2;

try {
    if(a>15) throw "Too Big";
    else if (a<5) throw "Too small";
} catch(err) {
    console.log(err);
}





