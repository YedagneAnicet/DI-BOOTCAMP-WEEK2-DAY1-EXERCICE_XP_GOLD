/* Exercise 1 : Favorite Color
Instructions
let sentence = ["my","favorite","color","is","blue"];
Write some simple Javascript code that will join all the items in the array above, and console.log the result. */

let sentence = ["my","favorite","color","is","blue"];

let strSentence = sentence.join(" ");

console.log(strSentence);

/* Exercise 2 : Mixup
Instructions
Create 2 variables. The values should be strings. For example:
let str1 = "mix";
let str2 = "pod";


2. Slice out and swap the first 2 characters of the two strings from part 1.


3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).


4. Finally console.log the new concatenated string.

 */

let strLastName = "Yedagne";
let strFirstName = "Anicet";

let strName = strLastName.replace(strLastName.slice(0,2),strFirstName.slice(0,2)) + " " + strFirstName.replace(strFirstName.slice(0,2),strLastName.slice(0,2));

console.log(strName);

/* Exercise 3 : Calculator
Instructions
Make a Calculator. Follow the instructions:

Prompt the user for the first number.
Store the first number in a variable called num1.
Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
Prompt the user for the second number.
Store the second number in a variable called num2.
Create an Alert where the value is the SUM of num1 and num2.
BONUS: Make a program that can subtract, multiply, and also divide!
 */

let num1 = parseInt(prompt("Entrer le premier nombre : "));
let num2 = parseInt(prompt("Entrer le second nombre : "));

let somme = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;
let modulo = num1 % num2;

alert(`La somme de ${num1} et ${num2} est : ${somme}`);
alert(`La difference de ${num1} et ${num2} est : ${subtract}`);
alert(`La multiplication de ${num1} et ${num2} est : ${multiply}`);
alert(`La division de ${num1} et ${num2} est : ${divide}`);
alert(`Le reste de la division de ${num1} et ${num2} est : ${modulo}`);
