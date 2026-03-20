function result(){

let inputValue=document.getElementById('inputData').value;

console.log(inputValue);

let displayHeading=document.getElementById('text');

displayHeading.innerHTML=inputValue;

displayHeading.style.color="red";

document.getElementsByTagName('body')[0].style.backgroundColor="green";

//addeventlistener

let paraBkg=document.getElementById('para');

function colorchange(){

paraBkg.style.backgroundColor="grey";

}
}