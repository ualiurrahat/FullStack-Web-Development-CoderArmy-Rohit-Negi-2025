// variable ko kaise banate hai

// let name = "Rohit";
// let age = 20;

// if(true){
//     let c = 90;
// }

// age = 30;
// console.log(c);
// console.log(name , age);

// const account = 1234;
// // account = 23;

// console.log(account);




// old tarika
// var a = 10;
// var a = 20;

// if(true){
//    var a = 20;
// }

// function fun(){
//     var c = 20;
// }

// var b = 30;
// console.log(c);


// data types

// primitive data type

// number,string,boolean,undefined, null, bigint, symbol


// number
// let a = 10;
// let b = 2.36;
// console.log(a,b);
// console.log(typeof b);


// // string

// let c = "Strike is coming";
// let d = 'Anjali';
// console.log(typeof d);
// console.log(c,d);


// // boolean
// let login = true;
// let f = false;
// console.log(typeof f);
// console.log(login, f);


// // undefined

// let user;
// console.log(typeof user);
// // const p;

// console.log(user);

// bigint
// let num = 23216378261783213461n;
// console.log(typeof num);
// console.log(num);


// null
// let weather = null;
// console.log(typeof weather);

// let weather = current_weather("Dwarka")
// 25
// null
// undefined


// symbol

// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(typeof id2);
// console.log(id2==id1);

// Non Primitive Data type
// array, object, function

// let arr = [10,20,11,"Rohit",true];
// console.log(typeof arr);

// console.log(arr);

// Rohit 12312 18 gen

// let user = {
//     name:"Rohit",
//     account:12312,
//     age:18,
//     category:'gen'
// }

// console.log(typeof user);

// let s = function add(){
//     console.log("Hello");
// }

// console.log(typeof s);




// Primitive data type is immutable

let a = 10;
let b = a;

b = 20;
console.log(a,b);

// let str = "Rohit";
// str = "Mohan";

// console.log(str);


// Non primitive data type mutable

let arr = [10,20,30,40];

arr.push(90);
arr[0] = 70;
console.log(arr);

let obj ={
    name:"Mohan",
    age:20
}

let obj2 = obj;

obj2.name = "Rohan";

console.log(obj);