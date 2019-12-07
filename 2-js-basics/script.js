/*****************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);
var job;
console.log(job);
job = 'Teacher';
console.log(job);
// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;
*/



/*****************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;
// Type coercion
console.log(firstName + ' ' + age);
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/



/*****************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);
// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);
// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John');
var x;
console.log(typeof x);
*/



/*****************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);
// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);
// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);
// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/***********************
* Coding challenge # 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

// var markMass = prompt("Enter Mark's mass: "),
// markHeight   = prompt("Enter Mark's height: "),
// johnHeight   = prompt("Enter John's height: "),
// johnMass     = prompt("Enter John's mass: ");

// var markBMI = markMass / (markHeight * markHeight),
// johnBMI     = johnMass / (johnHeight * johnHeight);

// var isMarkGreater = markBMI > johnBMI;

// console.log("Mark has higher BMI than john! " + isMarkGreater);


/*****************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';
if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
var massMark = 78; // kg
var heightMark = 1.69; // meters
var massJohn = 92;
var heightJohn = 1.95;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}
*/



/*****************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;
if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/



/*****************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 14;
// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
(if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/



/*****************************
* Truthy and Falsy values and equality operators
*/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values
var height;
height = 23;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}
// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/
/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}
if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
*/

/*****************************
* Functions
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);
function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/



/*****************************
* Function Statements and Expressions
*/
/*
// Function declaration
// function whatDoYouDo(job, firstName) {}
// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/



/*****************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
console.log(names.length);
// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);
// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);
john.pop();
john.pop();
john.shift();
console.log(john);
console.log(john.indexOf(23));
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/*************************
 * Coding chellange # 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

// var bills = [124, 48, 268];

// function tipCalculator(bill){
//     if(bill <= 50){
//         return bill * 0.2;
//     } else if(bill > 50 && bill <= 200){
//         return bill * 0.15;
//     } else {
//         return bill * 0.1;
//     }
// }

// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];

// var finalBills = [bills[0] + tips[0],
//                 bills[1] + tips[1],
//                 bills[2] + tips[2]];

// console.log(tips);
// console.log(finalBills);

/*****************************
* Objects and properties
*/
/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
john.job = 'designer';
john['isMarried'] = true;
console.log(john);
// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/



/*****************************
* Objects and methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};
john.calcAge();
console.log(john);
*/

/***************************
 * Coding challenge # 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

// var mark = {
//     name: 'Mark',
//     mass: 65,
//     height: 1.67,
//     BMI: function(){
//         this.bmi =  this.mass/(this.height*this.height);
//         return this.bmi;
//     }
// };

// var john = {
//     name: 'John',
//     mass: 80,
//     height: 1.7,
//     BMI: function(){
//         this.bmi =  this.mass/(this.height*this.height);
//         return this.bmi;
//     }
// };

// if(mark.BMI() > john.BMI()){
//     console.log(mark.name + ' has more BMI of ' + mark.bmi);
// } else if(mark.BMI() < john.BMI()){
//     console.log(john.name + ' has more BMI of ' + john.bmi);
// } else {
//     console.log('They have the same BMI!')
// }


/*****************************
* Loops and iteration
*/

/*
// for loop
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}
// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

/***************************
 * Coding challenge # 5
*/

// var john = {
//     bills: [124, 48, 268, 180, 42],
//     tip: [],
//     totalBill:[],
//     calcTip: function(){

//         for(var i = 0; i < this.bills.length; i++){
//             if(this.bills[i] <= 50){
//                 this.tip[i] = this.bills[i] * 0.2;
//                 this.totalBill[i] = this.tip[i] + this.bills[i];
//             } else if(this.bills[i] > 50 && this.bills[i] <= 200){
//                 this.tip[i] = this.bills[i] * 0.15;
//                 this.totalBill[i] = this.tip[i] + this.bills[i];
//             } else if(this.bills[i] > 200){
//                 this.tip[i] = this.bills[i] * 0.1;
//                 this.totalBill[i] = this.tip[i] + this.bills[i];
//             }
//         }        
//     }
// };
// john.calcTip();

// var mark = {
//     bills: [77, 375, 110, 45],
//     tip: [],
//     totalBill:[],
//     calcTip: function(){

//         for(var i = 0; i < this.bills.length; i++){
//             if(this.bills[i] <= 100){
//                 this.tip[i] = this.bills[i] * 0.2;
//                 this.totalBill[i] = this.tip[i] + this.bills[i];
//             } else if(this.bills[i] > 100 && this.bills[i] <= 300){
//                 this.tip[i] = this.bills[i] * 0.1;
//                 this.totalBill[i] = this.tip[i] + this.bills[i];
//             } else if(this.bills[i] > 300){
//                 this.tip[i] = this.bills[i] * 0.25;
//                 this.totalBill[i] = this.tip[i] + this.bills[i];
//             }
//         }        
//     }
// };
// mark.calcTip();

// function avgTip(ary){
//     var sum = 0;

//     for(var i = 0; i < ary.length; i++)    {
//         sum = sum + ary[i];
//     }

//     return sum/ary.length;
// }

// console.log(avgTip(john.tip));
// console.log(avgTip(mark.tip));

// if(avgTip(john.tip) > avgTip(mark.tip)){
//     console.log("John paid more tip than Mark!");
// } else{
//     console.log("Mark paid more tip than John!");
// }