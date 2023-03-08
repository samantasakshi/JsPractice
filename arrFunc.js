//use this which indicade the property in this function.
const obj = {
    id: 1,
    name: "Mina",
    age:20,
    address:{
        holdingNum:123,
        city:"Brahmanbariya",
        Country:"Bangladesh",
    },
    details:function () {
        return`${this.id} ${this.address.city}` 
    },
};
const details = obj.details();
console.log(details);

//arrow function or arronimas Function
function sum () {
    let a = 10;
    let b = 20;
    return a+b;
}
console.log(sum());

//function store in variable 
const myFunc = function (x){
    console.log (x);
};
myFunc(150);

//arr function statement without function keyword
const myFunc1 = (x) => {
    console.log(x);
};
myFunc1(300);

const myFun2 = (x , y) =>{
    return x + y;
};

console.log(myFun2(335,445));

//without {} function

const fun3 =(x , y) => x - y;
console.log(fun3(520,210));

//if there are only one permtr
const fun4 = x => x;
console.log(fun4(555));

//arrow function forEach which won't return new arr
const arr =[10,20,30,40,50,60,70];
arr.forEach( (v)=>{
console.log(v);
})

const str = a => a;
console.log(str("Hello World"));

//jason example
const objec = {
   number:[
    { firstName: "John", lastName:"Doe"},
    { firstName: "Kamal", lastName:"Ali"},
    { firstName: "Jamal", lastName:"Khan"},
   ]
};
const newObjData2 = objec.number;
const newObjData = objec.number[1].lastName;
console.log(newObjData2);
console.log(newObjData);

//document object modem or dom

