// // Boolean Data Type

// let num = 23;
// console.log(Boolean(num));

// // Falsy Boolean Type
// // 0
// // "" Empty String
// // null
// // undenfined
// // NaN (Not a Number)
// // false

// let num1 = 0;
// console.log(Boolean(num1));

// //  Undenfiend Data type
// let x;
// console.log(x);
// // Null Data Type
// let y = null;
// console.log(y);

// // NaN (not a Number)

// let c;
// let b=12;
// console.log(Boolean(c + b));

// Operator test
// let a = 4;
// a += 5;
// a -= 4;
// a **=3;
// a /=5;
// a %=6;
// console.log(typeof a)

// let a,b,c = 1;
// console.log(c)

// comparsion operator (<,>, <= , >= , == , !=, ===)
// return Boolean Data Type
// == Type Ma Sit // !=
// === Type Sit // !==

// Logical operator

// && || ! And OR Not

// let x=10;
// let y=13;
// if (x>15 && y==13){
//     console.log("this code is true")
// }
// else {
//     console.log("No code here")
// }

// Function

// function shopping(product){
//     console.log("go shop");
//     console.log("buy " + product);
//     console.log("go back home");
// }
// shopping("pen");
// shopping("ball pin")

// function calculate(x , y){
//     return x + y;
// }

// let result = calculate(10,10);
// result += 5;
// console.log(result)

// function YourAge(age){
//     return age;
// }
// let CalAge = YourAge(2003);
// console.log(2023 - CalAge);

// function YourAge(age){
//     let CurrentYear = 2023;
//     let CalAge;
//     if(age>CurrentYear){
//         console.log("Error");
//     }
//    else{
//      CalAge =CurrentYear - age;
//    }
//    return CalAge;
// }
// let result = YourAge(2222);
// console.log(result); //20

// default parameter

// function AnyNum(a,b=0){
//   let Adding = a + b;
//   console.log(Adding);
// }
// AnyNum(1);

// rest parameter

// function Adding(a , b , ...c){
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// Adding(1,2,2,3,333,33)

// function expression

// let Sayhi = function (name){
//   console.log(name);
// }
// Sayhi("mg mg");

// Call Back funcation

// function Sayhi(name,fun){
//   console.log(name);
//   fun();
// }
// Sayhi("mg mg",function (){
//   console.log("hello world");
// })

// call back funtion uses

// function twice(num,fun){
//   // let result = num * 2;
//   let result = fun(num) * 2;
//   console.log(result)
// }
// twice(3,function(num1){
//   return num1 + 5;
// })

// Arrow function

// one line
// let Sayhi =word=>word;
// let result = Sayhi("hi there");
// console.log(result);

// neted array

// let arr = [['apple','orange'],[1,2]];

// console.log(arr[1][0])

// spread operator

// let add = (a,b)=>{
//     console.log(a+ b)
// }
// let arr = [1,4];
// add(...arr);

// destrusturing

// let datas = ['mg mg',20,'hein'];

// let [name,age,school] = datas

// console.log(name,age,school)

// function add([a,b]){
//     console.log(a+b);
// }
// add([1,3]);

// Array methods basic

// let animals = ['cat','dog','lion'];

// animals.push("tiger"); //adding last item
// animals.pop() //delete last item

// animals.shift(); // remove first element
// animals.unshift("tiger") //adding first element

// let index = animals.indexOf("cat") // search position of an elements
// let nwearr = animals.join("-") // to make a string

// animals.splice(0,1)

// console.log(animals)

// map method

// let nums = [1,2,3,4,5];

// nums = nums.map((num)=>{
//     return 100 + num;
// })
// console.log(nums);

// let name = ['aung aung','kyaw kyaw','soe soe'];

// name = name.map((names)=>{
//     return "Sir " + names;
// })
// console.log(name)

// fliter method

// let num = [1,2,3,4,5,6];

// num= num.filter((num)=>{
//     return num!=5;
// })
// console.log(num)

// reduce method

// let num = [1,2,3,4,5,6];

// let result = num.reduce((prev,current)=>{
//     console.log(prev,current)
//     return prev + current;
// })
// console.log(result)

// short hand

// let num =[1,2,3,4,5,6];

// // map method

// let newarr = num.map(num=> num + 100);
// console.log(newarr);

// // fliter

// let newfliter = num.filter(num => num%2 === 0);
// console.log(newfliter);

// // reduce

// let newreduce = num.reduce((prev,current)=> prev+current);
// console.log(newreduce);

let str = new String(" hello, this world! ");

// str = str.toUpperCase();
// str = str.toLowerCase();

// trim // to remove space on the string
str = str.trim();

// split // return a new array

// let newarr = str.split(",")

// console.log(str.length)
// console.log(newarr)

// number method

// let num = 20.6;

// num = num.toFixed();

// console.log(num)

// boolean method

// let bool = true;

// bool = bool.toString();
// console.log(typeof bool)

// Object

// let person = {
//     name:"jhoe",
//     age:12,
//     drink(){
//         console.log("person who drinking")
//     }
// }
// person.name = "New Name";
// person.eat = "apple";

// person.drink();

// dot notation
// console.log(person.name)

// breket notation

// let breket = "age";
// console.log(person[breket])

// this keyword

// method == method's object
// regular function === window
// arrow function === {child }  parents ko kyi

// let person = {
//     name : "aung aung",
//     age : 32,
//     drink :()=>
//     {
//         console.log(this.name)
//     }
// }
// person.drink();

// function regular(num) {
// console.log(this)
// }

// regular();

// object spread

// let obj1 = {
//     hairColor : "red"
// }

// let obj2 = {
//     name : 'kyaw kyaw',
//     age: 10,
// }

// let obj = {...obj1,...obj2}
// console.log(obj)

// object destructing

// consloe.log function

function con(para) {
  console.log(para);
}

// let {name,age} = {
//     name: "aung aung",
//     age : 20,
// }
// con(name);
// con(age);

// property short hand

// let name = "aung aung";
// let age = 20;

// let person = {
//     name,
//     age,
// }
// con(person.age)

// javaScript Data Structure

// let people = [
//     {name:"aung",age:21 , gender:"male"},
//     {name:"maung",age:12 , gender:"male"},
//     {name:"khin",age:30 , gender:"female"}
// ]

// let newname = people.map((names)=> {
//     return names.name + " kyaw";
// });

// con(newname[1])

// fliter method

// let search = prompt("Type SomeName // aung khin maung")

// let newFliter = people.filter((person)=>{
//     return person.name.includes(search)
// })

// con(newFliter)

// if else statement

// let tried = prompt("Are you tired? type yes/no")

// if(tried==="yes")
//     console.log("go rest")
// else if(tried==="no")
//     console.log("go to back work")
// else
//  console.log("plz type yes Or no")

// let people = [
//     {name:"aung",age:21 ,},
//     {name:"maung",age:12 , gender:"m"},
//     {name:"khin",age:30 , gender:"f"}
// ]

// let newArr= people.map((person)=>{
//     if(person.gender === "m"){
//         person.gender = "male"
//     }
//     else if (person.gender === 'f'){
//         person.gender = "female"
//     }
//     else
//         person.gender= "unknown"

//     return person
// })
// con(newArr)

// if expression

// let x = prompt("type number : ")

// let ifexp = 10 > x? "leftThan10" : "GreaterThan10";

// con(ifexp)

// let people = [
//     {name:"aung",age:21 ,},
//     {name:"maung",age:12 , gender:"m"},
//     {name:"khin",age:30 , gender:"f"}
// ]

// people = people.map((person)=>{
//     switch(person.gender){
//         case "m":
//             person.gender = "male"
//             break;
//         case "f":
//             person.gender = "female";
//             break;
//         default :
//             person.gender= "unknown";
//     }
//     return person
// })
// con(people)

// while loop

// let people = ["aung aung", "kyaw kyaw","su su","aye aye"]
// let x = 0;

// while(x<people.length){
//     console.log(people[x]);
//     x++
// }

// do while loop

// let x = 0

// do{
//     console.log("hello");
//     x++;
// }while(x>10)

// for loop

// let people = ["aung aung", "kyaw kyaw","su su","aye aye"]

// for(let x=0;x<people.length;x++){
//     console.log(people[x])
// }

// JSON

// let obj = {"name":"aung aung", "age":23}
// con(JSON.stringify(obj))

// For of loop // array

// let people = ["aung aung", "kyaw kyaw", "su su", "aye aye"];

// for (person of people) {
//   console.log(person);
// }

// For in loop // object

// let person = {
//     name : "aung aung",
//     age : 10
// }

// for ( key in person){
//     console.log(`${key} is ${person[key]}`)
// }

// let people = ["aung aung", "kyaw kyaw", "su su", "aye aye"];

// for (person in people){
//     console.log(`${person} is ${people[person]}`)
// }

// class Car {
//   name= "aung aung";
//   age= 20
//   drive(){
//     console.log("driving")
//   }
// }

// let car=new Car
// // car.drive()

// class Calculator {
//   plus(n1,n2){
//     return n1+n2
//   }
//   minus(n1,n2){
//    return n1-n2
//   }
//   division(n1,n2){
//     return n1/n2
//   }
//   remainder(n1,n2){
//     return n1%n2
//   }
//   matiple(n1,n2){
//    return n1*n2
//   }
//   static adding(num1,num2){
//     return num1+num2
//   }
// }
// let calculate = new Calculator
// console.log(calculate.remainder(1,2))

// console.log(Calculator.adding(2,3))

// Constructor

// class Car{
//   Name =''
//   wheels=2
//   constructor(name,wheels){
//     this.Name=name
//     this.wheels=wheels
//     this.drive()
//   }
//   drive(){
//     console.log(this.Name + " have"+ this.wheels)
//   }
// }

// new Car("marcidee",3)

// class Car{
//   Name ='';
//   wheels=4;
//   constructor(name,wheel){
//     this.Name=name
//     this.wheels=wheel
//     this.drive()
//     // this.carinfo()
//   }
//   drive(){
//     console.log(this.Name + " is driving")
//   }
//   carinfo(){
//     console.log(`${this.Name} have ${this.wheels}`)
//   }
// }

// new Car("marcide")
// let carproperty = new Car("toyota",6)
// carproperty.carinfo()

// inheritance

// class Animal{
//   constructor(name){
//     this.Name=name
//   }
//   run(){
//     console.log(`${this.Name} is running`)
//   }
// }
// let dog = new Animal("dog")
// dog.run()

// class Dog extends Animal{
//   blak(){
//     console.log(`${this.Name} woof woof`)
//   }
// }

// let dogs = new Dog("taw dog");
// dogs.blak()

// public private static

// async way
// con(1)
// con(2)
// setTimeout(() => {
//   console.log(3)
// }, 3000);
// con(4)

// async Promic method

// function async(){
//   return new Promise((resolve,reject)=>{
//     let result = 0
//     for(let i=0 ; i<100 ; i++){
//       result+=i
//     }
//     if(result){
//       resolve(result)
//     }else{
//       reject("error")
//     }
//   })
// }
// console.log("work")
// async()
// .then((turly)=>{
//   console.log(turly)
// })
// .catch((error)=>{
//   console.log(error)
// })
// console.log("more important work")

// fetch

// let ui =prompt("type id : ")
// fetch('https://jsonplaceholder.typicode.com/todos/' + ui)
// .then((response)=>{
//    return response.json()
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })

// async function fetctodo() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// fetctodo();
