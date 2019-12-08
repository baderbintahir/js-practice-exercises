//////////////////////
//let and const

// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';      // Cannot change a const
// console.log(name6);


// ES5
// function drivingsLicence5(passedTest){
//     // These two are function scope
//     if(passedTest){
//         var firstName = 'John';
//         var yearOfBirth = 1990;        
//     }
//     console.log(firstName + ' was born in ' + yearOfBirth + ' and is now officially allowed to drive a car.');
// }

// drivingsLicence5(true);

// function drivingsLicence6(passedTest){
//     // These two are block scope and hoisting doesn't work like it was used to in ES5
//     let firstName;
//     const yearOfBirth = 1990;       // You have to declare and define it in same place

//     if(passedTest){
//         firstName = 'John';
//     }
//     console.log(firstName + ' was born in ' + yearOfBirth + ' and is now officially allowed to drive a car.');
// }

// drivingsLicence6(true);



// ES5
// console.log('ES5');
// var j = 23;

// for(var j = 0; j < 5; j++){
//     console.log(j);
// }
// console.log(j);

// ES6
// console.log('ES5');
// let i = 23;

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }
// console.log(i);






///////////////////////////////
// Lecture: Blocks and IIFEs

// ES5
// (function(){
//     var c = 3;
// })();

// console.log(c);


// ES6
// {
//     let a = 1;
//     const b = 2;
//     var c = 3;
// }

// console.log(a + b);
// console.log(c);








////////////////
// Lecture: Strings

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year){
//     return 2019 - year;
// }

// ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


// const name = `${firstName} ${lastName}`;
// console.log(name);
// console.log(name.startsWith('J'));
// console.log(name.endsWith('th'));
// console.log(name.includes('oh'));
// console.log(firstName.repeat(5));
// console.log(`${firstName} `.repeat(5));








//////////////////////////////
// Lecture: Arrow Functions
// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function(el){
//     return 2019 - el;
// });
// console.log(ages5);

// // ES6
// var ages6 = years.map(el => 2019 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}, `);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}, `;
// });
// console.log(ages6);







//////////////////////////////
// Lecture: Arrow Functions 2

//ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function(){
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// }
// box5.clickMe();

//ES6
// var box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
        
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// box6.clickMe();


// function Person(name) {
//     this.name = name;
// }
// //ES5
// Person.prototype.myFriends5 = function(friends){
//     var arr = friends.map(function(el){
//         return this.name + ' is friends with ' + el;
//     }.bind(this));
//     console.log(arr);
// };
// var friends = ['Jane', 'Mike', 'Jack'];
// new Person('john').myFriends5(friends);

// //ES6
// Person.prototype.myFriends6 = function(friends){
//     var arr = friends.map(el => `${this.name} is friends with ${el}`);
//     console.log(arr);
// };
// new Person('Mike').myFriends6(friends);









///////////////////
//Destructuring

// //ES5
// var john = ['john', 26];
// // var name = john[0];
// // var age = john[1];

// //ES6
// const [name, age] = john;
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Snow'
// };

// const {firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);

// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);



// function calcRetirementAge(year){
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] = calcRetirementAge(1990);
// console.log(age2);
// console.log(retirement);






//////////////////
//Arrays
// const boxes = document.querySelectorAll('.box');

//ES5
// var boxArr5 = Array.prototype.slice.call(boxes);

// boxArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });

//ES6
// const boxArr6 = Array.from(boxes);
// boxArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');



//ES5
// for(var i = 0; i < boxArr5.length; i++){
//     if(boxArr5[i].className === 'box blue'){
//         continue;
//     }

//     boxArr5[i].textContent = 'I\'ve changed to blue';
// }

//ES6
// for(const cur of boxArr6){
//     if(cur.className.includes('blue')){
//         continue;
//     }

//     cur.textContent = 'I\'ve changed to blue';
// }



//ES5
// var ages = [12, 14, 15, 18,19, 23];
// var full = ages.map(function(cur){
//     return cur >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

//ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));









////////////////////
//Spread Oeprator

// function addAges(a, b, c, d){
//     return a + b + c + d;
// }

// var sum1 = addAges(12, 32, 53, 23);
// console.log(sum1);

// //ES5
// var ages = [12, 32, 53, 23];
// var sum2 = addAges.apply(null, ages);
// console.log(sum2);

// //ES6
// var sum3 = addAges(...ages);
// console.log(sum3);

// const johnFamily = ['john', 'jane', 'mark'];
// const markFamily = ['mark', 'peter', 'henry'];
// const bigFamily = [...johnFamily, ...markFamily];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];
// all.forEach(cur => cur.style.color = 'red');






//////////////////
//Rest parameter

// //ES5
// function isFullAge5(){
//     var argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(function(cur) {
//         console.log((2019 - cur) >= 18);
//     });
// }

// isFullAge5(1990, 2003, 1987);


// //ES6
// function isFullAge6(...years){
//     years.forEach(cur => console.log((2019 - cur) >= 18));
// }

// isFullAge6(1990, 2003, 1987);



// //ES5
// function isFullAge5(limit){
//     var argsArr = Array.prototype.slice.call(arguments, 1);
//     argsArr.forEach(function(cur) {
//         console.log((2019 - cur) >= limit);
//     });
// }

// isFullAge5(18, 1990, 2003, 1987);


// //ES6
// function isFullAge6(limit, ...years){
//     years.forEach(cur => console.log((2019 - cur) >= limit));
// }

// isFullAge6(18, 1990, 2003, 1987);







/////////////////////
//Defualt Parameter

// //ES5
// function Person5(firstName, age, lastName, nationality){

//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality === undefined ? nationality = 'american' : nationality = nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.nationality = nationality;
// }

// var john = new Person5('john', 18);
// console.log(john);

// //ES6
// function Person6(firstName, age, lastName = 'Smith', nationality = 'american'){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.nationality = nationality;
// }

// var mark = new Person6('Mark', 28);
// console.log(mark);







///////////////////////
//Maps

// const question = new Map();
// question.set('question', 'What is the official name of latest major javascript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer :D');
// question.set(false, 'Wrong answer, pelase try again');

// console.log(question.get('question'));
// console.log(question.size);

// if(question.has(4)){
//     //question.delete(4);
//     console.log('4 is here!')
// }

// question.clear();

// question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));
// for(const [key, value] of question.entries()){
//     console.log(`This is ${key} and it's set to ${value}`);
// }

// const answer = parseInt(prompt('Enter corrent answer: '));
// console.log(question.get(answer === question.get('correct')));






////////////////////
//Classes

// //ES5
// var Person5 = function(name, birthYear, job){
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function(){
//     var age = 2019 - this.birthYear;
//     console.log(age);
// }

// var john5 = new Person5('John', 1990, 'Teacher');
// console.log(john5);
// john5.calculateAge();

// //ES6
// class Person6{
//     constructor(name, birthYear, job){
//         this.name = name;
//         this.birthYear = birthYear;
//         this.job = job;
//     }

//     calculateAge(){
//         var age = 2019 - this.birthYear;
//         console.log(age);
//     }

//     static greeting(){
//         console.log('Hey There!');
//     }
// }

// var john6 = new Person6('John', 1990, 'Teacher');
// console.log(john6);
// john6.calculateAge();
// Person6.greeting();






////////////////////////////
//Classes with subclasses

// //ES5
// var Person5 = function(name, birthYear, job){
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function(){
//     var age = 2019 - this.birthYear;
//     console.log(age);
// }

// var Athlete5 = function(name, birthYear, job, olympicGames, medals){
//     Person5.call(this, name, birthYear, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }

// //Giving Athelete5 the prototype of Person5     (making athlete5 a child of person5)
// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedals = function(){
//     this.medals++;
//     console.log(this.medals);
// }

// var john5 = new Athlete5('John', 1990, 'Swimmer', 3, 10);

// john5.calculateAge();
// john5.wonMedals();


// //ES6
// class Person6{
//     constructor(name, birthYear, job){
//         this.name = name;
//         this.birthYear = birthYear;
//         this.job = job;
//     }

//     calculateAge(){
//         var age = 2019 - this.birthYear;
//         console.log(age);
//     }
// }

// class Athlete6 extends Person6{
//     constructor(name, birthYear, job, olympicGames, medals){
//         super(name, birthYear, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }

//     wonMedals(){
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const john6 = new Athlete6('John', 1990, 'Swimmer', 3, 10);

// john6.calculateAge();
// john6.wonMedals();






//////////////////////////
//Coding Chellange

//Way 1
// class Town{
//     constructor(name, buildYear){
//         this.name = name;
//         this.buildYear = buildYear;
//     }

//     calcAge(){
//         return 2019 - this.buildYear;
//     }
// }

// class Parks extends Town{
//     constructor(name, buildYear, parkArea, numberOfTrees){
//         super(name, buildYear);
//         this.parkArea = parkArea;
//         this.numberOfTrees = numberOfTrees;
//     }

//     static treeDensity(parksArr){
//         parksArr.forEach(cur => {
//             const density = cur.numberOfTrees/cur.parkArea;
//             console.log(`${cur.name} has a tree density of ${density} trees per square km`);
//         })
//     }

//     static avgAge(parksArr){
//         let sum = 0;
//         parksArr.forEach(cur => sum = sum + cur.calcAge(cur.buildYear));
//         const avg = sum/3;
//         console.log(`Our 3 parks have an average age of ${avg} years.`);
//     }

// }

// class Streets extends Town{
//     constructor(name, buildYear, length){
//         super(name, buildYear);
//         this.length = length;
//     }

//     static totalLength(strArr){
//         let sum = 0;
//         strArr.forEach(cur => sum = sum+cur.length);        
//         return sum;
//     }

//     static avgLength(sum){
//         return sum/4;
//     }

//     static sizeClassification(strArr){
//         let classification = 'normal';
//         strArr.forEach(cur => {
//             if(cur.length >= 5)
//                 classification = 'big';
//             if(cur.length >= 3 && cur.length < 5)
//                 classification = 'normal';
//             if(cur.length < 3)
//                 classification = 'small';

//             console.log(`${cur.name}, build in ${cur.buildYear}, is a ${classification} street.`); 
//         });
//     }
// }

// var park1 = new Parks('park1', 1993, 6.74, 500);
// var park2 = new Parks('park2', 1990, 7.12, 400);
// var park3 = new Parks('park3', 1997, 5.76, 600);

// var str1 = new Streets('street1', 1987, 1);
// var str2 = new Streets('street2', 1990, 3.5);
// var str3 = new Streets('street3', 2000, 4);
// var str4 = new Streets('street4', 2003, 8);

// console.log('-----Parks Report-----');
// const parksArr = [park1, park2, park3];
// Parks.avgAge(parksArr);
// Parks.treeDensity(parksArr);

// console.log('-----Streets Report-----');
// const strArr = [str1, str2, str3, str4];
// const strLength = Streets.totalLength(strArr);
// const strAvg = Streets.avgLength(strLength);
// console.log(`Our 4 streets have a total length of ${strLength} km and with an average of ${strAvg} km.`);
// Streets.sizeClassification(strArr);




//Way 2
class Town{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }

    calcAge(){
        return 2019 - this.buildYear;
    }
}

class Parks extends Town{
    constructor(name, buildYear, parkArea, numberOfTrees){
        super(name, buildYear);
        this.parkArea = parkArea;
        this.numberOfTrees = numberOfTrees;
    }

    treeDensity(){
        const density = this.numberOfTrees/this.parkArea;
        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }

    static avgAge(parksArr){
        let sum = 0;
        parksArr.forEach(cur => sum = sum + cur.calcAge(cur.buildYear));
        const avg = sum/3;
        console.log(`Our 3 parks have an average age of ${avg} years.`);
    }

}

class Streets extends Town{
    constructor(name, buildYear, length){
        super(name, buildYear);
        this.length = length;
    }

    static totalLength(strArr){
        let sum = 0;
        strArr.forEach(cur => sum = sum+cur.length);        
        return sum;
    }

    static avgLength(sum){
        return sum/4;
    }

    sizeClassification(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.length)} street.`); 
    }
}

var park1 = new Parks('park1', 1993, 6.74, 500);
var park2 = new Parks('park2', 1990, 7.12, 400);
var park3 = new Parks('park3', 1997, 5.76, 1200);
const parksArr = [park1, park2, park3];

var str1 = new Streets('street1', 1987, 1);
var str2 = new Streets('street2', 1990, 3.5);
var str3 = new Streets('street3', 2000, 4);
var str4 = new Streets('street4', 2003, 2.7);
const strArr = [str1, str2, str3, str4];

function parksReport(p){
    console.log('-----Parks Report-----');

    //Average Age of Parks
    Parks.avgAge(p);

    //Tree Density of all parks
    p.forEach(cur => cur.treeDensity());

    //Park that has more than 1000 trees
    let i = 'None';
    p.forEach(cur => cur.numberOfTrees >= 1000 ? i = cur.name : i = i);
    console.log(`${i} has more than 1000 trees in it.`);

}

function streetsReport(s){
    console.log('-----Streets Report-----');

    //Show Length and Average of streets
    const strLength = Streets.totalLength(s);
    const strAvg = strLength/4;
    console.log(`Our 4 streets have a total length of ${strLength} km and with an average of ${strAvg} km.`);

    //Classify each Street
    s.forEach(cur => cur.sizeClassification());
}

parksReport(parksArr);
streetsReport(strArr);