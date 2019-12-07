////////////////////////////
// Function Constructor

// var john = {
//     name: "john",
//     yearOfBirth: 1990,
//     job: "teacher"
// };

// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person.prototype.calculateAge = function(){
//     console.log(2019 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person('john', 1990, 'teacher');
// var mary = new Person('mary', 1986, 'designer');
// var robert = new Person('robert', 1970, 'banker');

// john.calculateAge();
// mary.calculateAge();
// robert.calculateAge();

// console.log(john.lastName);
// console.log(mary.lastName);
// console.log(robert.lastName);





//////////////////////
//Object.create

// var personProto = {
//     calculateAge: function(){
//         console.log(2019 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: { value: 'Jane'},
//     yearOfBirth: { value: 1987},
//     job: { value: 'designer'}
// });








///////////////////////////
// Primitive vs Object

// var a = 23;
// var b = a;

// a = 5;
// console.log(b);
// console.log(a);

// //Object
// var obj1 = {
//     name: 'JOhan',
//     age: 26
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

//function
// var age = 27;
// var obj = {
//     name: 'jonas',
//     city: 'ryk'
// };

// function change(a, b){
//     a = 30;
//     b.city = 'multan';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);





///////////////////////////////////
//Passing functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn){
//     resArr = [];
//     for(var i = 0; i < arr.length; i++){
//         resArr.push(fn(arr[i]));
//     }

//     return resArr;
// }

// function calcAge(yearOfBirth){
//     return(2019 - yearOfBirth);
// }

// function isFullAge(age){
//     return age >= 18;
// }

// function maxHeartRate(age){
//     if(age >=18 && age <= 81){
//         return Math.round(206.9 - (0.67 * age));
//     }else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calcAge);
// console.log(ages);
// var fullAge = arrayCalc(ages, isFullAge);
// console.log(fullAge);
// var maxHrtRate = arrayCalc(ages, maxHeartRate);
// console.log(maxHrtRate);





////////////////////////////////////
//functions returning functions

// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function(name){
//             console.log(name + ', can you tell what is UX design?');
//         }
//     } else if(job === 'teacher'){
//             return function(name){
//                 console.log(name + ', can you tell what subject do you teach?');
//             }
//         } else {
//             return function(name){
//                 console.log(name + ', what do you do?');
//             }
//         }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');

// interviewQuestion('designer')('Mary');







///////////////////
//IIFE

// (function(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// (function(goodluck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodluck);
// })(5);







////////////
//Closure

// function retirement(retirementAge){
//     var a = ' years left until retirement.';
//     return function(yearOfBirth){
//         var age = 2019 - yearOfBirth;
//         console.log((retirementAge  - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);


//Closure Task
// function interviewQuestion(job){
//     return function(name){
//         if(job === 'designer'){
//             console.log(name + ', can you tell what is UX design?');
//         } else if(job === 'teacher'){
//             console.log(name + ', can you tell what subject do you teach?');
//         } else{
//             console.log(name + ', what do you do?');
//         }
//     }
// }

// interviewQuestion('teacher')('Jack');








/////////////////////////
//Bind, Call and Apply

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay){
//         if(style === 'formal'){
//             console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m ' + this.age + ' years old and I\'m a ' + this.job + '.');
//         } else if(style === 'friendly'){
//             console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m ' + this.age + ' years old and I\'m a ' + this.job + '.');
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// };

// john.presentation('formal', 'morning');
// john.presentation.call(emily, 'friendly', 'afternoon');
// john.presentation.apply(emily, ['formal', 'evening']);

// var johnFriendly = john.presentation.bind(john, 'friendly');
// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');


//Apply, bind and call Task
// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn){
//     resArr = [];
//     for(var i = 0; i < arr.length; i++){
//         resArr.push(fn(arr[i]));
//     }

//     return resArr;
// }

// function calcAge(yearOfBirth){
//     return(2019 - yearOfBirth);
// }

// function isFullAge(limit, age){
//     return age >= limit;
// }

// var ages = arrayCalc(years, calcAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(fullJapan);
// console.log(ages);









//////////////////////
//Coding challenge

// (function(){
//     while(answer != 'exit'){
//         var score = 0;

//         var Question = function(question, options, answer){
//             this.question = question;
//             this.options = options;
//             this.answer = answer;
//         }
        
//         Question.prototype.randomQuestion = function(questions){
//             return Math.round(Math.random() * 2);
//         }
        
//         Question.prototype.matchAnswer = function(ans){
//             if(this.answer == ans){
//                 console.log('Correct Answer!');
//                 // console.log('Your score is:' + score);
//                 console.log('----------------');
//             } else{
//                 console.log('Wrong Answer!');
//                 // console.log('Your score is:' + score);
//                 console.log('----------------');
//             }
//         }
        
//         var questionOne = new Question('1 + 1 =', [2, 3, 4], 0);
//         var questionTwo = new Question('2 + 2 =', [2, 3, 4], 2);
//         var questionThree = new Question('3 + 3 =', [2, 6, 4], 1);
        
//         var questions = [questionOne, questionTwo, questionThree];
        
//         var pickedQuestion = questions[questionOne.randomQuestion()];
        
//         console.log(pickedQuestion.question);
//         for(var i = 0; i < pickedQuestion.options.length; i++){
//             console.log(i + ': ' + pickedQuestion.options[i]);
//         }
        
//         var answer = prompt('Enter the number of the option you think is correct answer');
//         pickedQuestion.matchAnswer(answer);
//     }
// })();