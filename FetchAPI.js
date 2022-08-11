// Fetch API



document.getElementById("get_data").addEventListener("click", getData);


function getData(){
    // console.log("clicked");
    fetch("http://api.icndb.com/jokes/random")
    .then(function(res){
        // console.log(res.json());
        return res.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })

}



// function getData(){
//     fetch("http://api.icndb.com/jokes/random")
//     .then(res => res.json())
//     .then(data => { console.log(data);})
//     .catch(err =>{ console.log(err);})
// }

























