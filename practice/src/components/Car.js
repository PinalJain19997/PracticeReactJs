import React from "react";


class Car extends React.Component {
    constructor(name){
        this.brand=name;
    }
     
    present(){
        return 'I have a '+ this.brand;
    }

}


class Model extends Car{
    constructor(name,mod){
        super(name);
        this.model=mod;
    }

    show(){
        return this.present() + ', it is a '+ this.model;
    }
}


const mycar = new Model("Ford","Mustang");
mycar.show();



// //Function

// hello = function(){
//     return "Hello function";
// }


// //Arrow function
// var hello = ()=>{
//     return "Arrow function";
// }


// //Parethesis 

// var hello = (val)=>{
//     return "Your value is "+val;
// }


// let vs var vs const
// var is function scoped
// let is block scoped
// const is block scoped 


//Array 

function Array(){
const myArray = ['Apple','Mango','Orange'];
const myList = myArray.map((item)=> <p>{item}</p>);
const numbers =[1,2,3,4,5,6,7,8];
const [one,two, ...rest]=numbers;
return (
    <p>{myList}</p>,
    <p>{one} , {two}, {rest}</p>
)
}

export  default Array;







