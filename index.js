//alert ("hello Dom");

//Even means Mouse movement
const click = document.getElementById("click");
const h1 = document.getElementById("h1");
const myDiv = document.getElementsById("myDiv");

 click.addEventListener("click",()=>{
   myDiv.innerHtml = "This is heading 1";
   h1.innerHTML = "Hello World";
});

const button = document.getElementsByClassName("btn")
button.addEventListener("button",()=>{
  div.innerHTML = "This is a Button."
});