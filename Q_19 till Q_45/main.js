var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// q20
// Think of something you could store in an array. For example, you could make a list of mountains,
// rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list
// containing these items.
console.log("ans20");
var countries = ["United States", "Canada", "France", "Japan", "Brazil", "Australia"];
console.log("List of Countries:");
console.log(countries);
console.log('/n');
// q21
// 21. They think of something you could store in a TypeScript Object. Write a program that creates
// Objects containing these items.
console.log("ans21");
var car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
var car2 = {
    brand: "Honda",
    model: "Accord",
    year: 2019
};
var car3 = {
    brand: "grande",
    model: "1.6",
    year: 2021
};
console.log("Car 1:");
console.log("Brand:", car1.brand);
console.log("Model:", car1.model);
console.log("Year:", car1.year);
console.log("\nCar 2:");
console.log("Brand:", car2.brand);
console.log("Model:", car2.model);
console.log("Year:", car2.year);
console.log("\nCar 3:");
console.log("Brand:", car3.brand);
console.log("Model:", car3.model);
console.log("Year:", car3.year);
console.log('/n');
// q22
// 22. Intentional Error:
// If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error. Make sure you correct the error
// before closing the program.
console.log("ans22");
var fruits = ["apple", "banana", "orange"];
console.log(fruits[3]);
// q23
// 23. Conditional Tests:
// Write a series of conditional tests. Print a statement describing each test and your prediction
// for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("ans23");
var coffee = 'cappuccino';
var isMorning = true;
var dayOfWeek = 'Monday';
var customerAge = 30;
var programmingLanguage = 'python';
console.log("Is coffee 'espresso'? I will be False.");
console.log(coffee === 'espresso');
console.log("Is it morning? I will be True.");
console.log(isMorning);
console.log("Is today 'Monday'? I will be True.");
console.log(dayOfWeek === 'Monday');
console.log("Is customer's age over 25? It will be True.");
console.log(customerAge > 25);
console.log("Is programming language 'Python'? It will be true.");
console.log(programmingLanguage === 'Python');
console.log("Is coffee not 'latte'? I will be True.");
console.log(coffee !== 'latte');
console.log("Is it afternoon? I will be False.");
console.log(!isMorning);
console.log("Is today 'Sunday'? I will be False.");
console.log(dayOfWeek === 'Sunday');
console.log("Is customer's age less than 18? I will be False.");
console.log(customerAge < 18);
// q24
// 24. More Conditional Tests:
// You don’t have to limit the number of tests you create to 10. If you want to try more
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal
// to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in an array
// • Test whether an item is not in an array
console.log("\n");
console.log("ans24");
var animal = 'cat';
var fruit = 'apple';
var temperature = 28;
var time = 14;
var colors = ['red', 'green', 'blue'];
var month = 'July';
console.log(animal == 'dog');
console.log(fruit == 'banana');
console.log(temperature >= 25);
console.log(time < 12);
console.log(colors.includes('green'));
console.log(!colors.includes('yellow'));
console.log(fruit.toLowerCase() === 'apple');
console.log(month.toLowerCase() === 'june');
console.log(temperature !== 30);
console.log(time > 10 && time < 20);
console.log(temperature >= 30 || time > 15);
console.log(colors.includes('purple') && temperature < 20);
console.log(colors.includes('red') || month === 'August');
// q25
// 25. Alien Colors #1:
// Imagine an alien was just shot down in a game. Create a variable called alien_color and assign
// it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that
// fails. (The version that fails will have no output.)
console.log("\n");
console.log("ans25");
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("Player just earned 7 points.");
}
// q26
// 26. Alien Colors #2:
// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the
// alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
console.log("\n");
console.log("ans26");
var alienS_color = 'green';
if (alienS_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 0 points.");
}
alienS_color = 'red';
if (alienS_color === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 0 points.");
}
// Q27. Alien Colors #3:
// Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color
// alien.
console.log("\n");
console.log("ans27");
var color_of_alien = 'green';
if (color_of_alien === 'green') {
    console.log("Player earned 5 points.");
}
else if (color_of_alien === 'yellow') {
    console.log("Player earned 10 points.");
}
else if (color_of_alien === 'red') {
    console.log("Player earned 15 points.");
}
color_of_alien = 'yellow';
if (color_of_alien === 'green') {
    console.log("Player earned 5 points.");
}
else if (color_of_alien === 'yellow') {
    console.log("Player earned 10 points.");
}
else if (color_of_alien === 'red') {
    console.log("Player earned 15 points.");
}
color_of_alien = 'red';
if (color_of_alien === 'green') {
    console.log("Player earned 5 points.");
}
else if (color_of_alien === 'yellow') {
    console.log("Player earned 10 points.");
}
else if (color_of_alien === 'red') {
    console.log("Player earned 15 points.");
}
// q28
// 28. Stages of Life:
// Write an if-else chain that determines a person’s stage of life. Set a value for the variable age,
// and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
console.log("\n");
console.log("ans28");
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//q29
// 29. Favorite Fruit:
// Make an array of your favorite fruits, and then write a series of independent if statements that
// check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
// is in your array, the if block should print a statement,
// such as You really like bananas! 
console.log("\n");
console.log("ans29");
var favorite_fruits = ['apple', 'banana', 'mango'];
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}
// q30
// 30. Hello Admin:
// Make an array of five or more usernames, including the name 'admin'. Imagine you are writing
// code that will print a greeting to each user after they log in to a website. Loop through the array, and
// print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a
// status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
console.log("\n");
console.log("ans30");
var usernames = ["admin", "user1", "user2", "user3", "user4"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again"));
    }
}
// q31
// 31. No Users:
// Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
console.log("\n");
console.log("ans31");
var users = ['fahad', 'Ali', 'Babar'];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    users = [];
    console.log("All usernames have been removed.");
}
// q32
// 32. Checking Usernames:
// Do the following to create a program that simulates how websites ensure that everyone has a
// unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames
// are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print
// a message that the person will need to enter a new username. If a username has not been used, print
// a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be
// accepted.
console.log("\n");
console.log("ans32");
var current_users = ["ashhal", "umer", "hamza", "ali", "rayyan"];
var new_users = ["fariha", "noyan", "bilaj", "adnan", "wasif"];
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var new_user = new_users_1[_a];
    if (current_users.includes(new_user.toLowerCase())) {
        console.log("The username \"".concat(new_user, "\" is not available. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(new_user, "\" is available."));
    }
}
// q33
// 33. Ordinal Numbers:
// Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers
// end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output
// should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line
console.log("\n");
console.log("ans33");
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _b = 0, numbersArray_1 = numbersArray; _b < numbersArray_1.length; _b++) {
    var number = numbersArray_1[_b];
    var ordinalEnding = '';
    if (number === 1) {
        ordinalEnding = 'st';
    }
    else if (number === 2) {
        ordinalEnding = 'nd';
    }
    else if (number === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    console.log("".concat(number).concat(ordinalEnding));
}
// q34
// Pizzas:
// Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and
// then use a for loop to print the name of each pizza.
// • Modify your loop to print a sentence using the name of the pizza instead of printing just the name of
// the pizza. For each pizza you should have one line of output containing a simple statement like I like
// pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The
// output should consist of three or more lines about the kinds of pizza, you like and then an additional
// sentence, such as I really love pizza
console.log("\n");
console.log("ans34");
var favoritePizzas = ['Margherita', 'Pepperoni', 'BBQ Chicken'];
for (var _c = 0, favoritePizzas_1 = favoritePizzas; _c < favoritePizzas_1.length; _c++) {
    var pizza = favoritePizzas_1[_c];
    console.log(pizza);
}
console.log('\n');
for (var _d = 0, favoritePizzas_2 = favoritePizzas; _d < favoritePizzas_2.length; _d++) {
    var pizza = favoritePizzas_2[_d];
    console.log("I like ".concat(pizza, " pizza."));
}
// q35
// 35. Animals:
// Think of at least three different animals that have a common characteristic. Store the names
// of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print
// a sentence such as Any of these animals would make a great pet!
console.log("\n");
console.log("ans35");
var commonAnimals = ['parrot', 'horse', 'Rabbit'];
for (var _e = 0, commonAnimals_1 = commonAnimals; _e < commonAnimals_1.length; _e++) {
    var pet = commonAnimals_1[_e];
    console.log(pet);
}
for (var _f = 0, commonAnimals_2 = commonAnimals; _f < commonAnimals_2.length; _f++) {
    var pet = commonAnimals_2[_f];
    console.log("A ".concat(pet.toLowerCase(), " would make a great pet."));
}
// q36
// 36. T-Shirt:
// Write a function called make_shirt() that accepts a size and the text of a message that should
// be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
// message printed on it. Call the function.
console.log("\n");
console.log("ans36");
function make_shirt(size, message) {
    console.log("Shirt size: ".concat(size.toUpperCase(), ". Message: \"").concat(message, "\""));
}
make_shirt('large', 'Hello, World!');
//  q37
// 37. Large Shirts:
// Modify the make_shirt() function so that shirts are large by default, with a message that reads
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
// size with a different message.
console.log("\n");
console.log("ans37");
function createShirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt size: ".concat(size.toUpperCase(), ". Message: \"").concat(message, "\""));
}
createShirt();
createShirt('medium');
createShirt('small', 'Keep Coding!');
// q38
// 38. Cities:
// Write a function called describe_city() that accepts the name of a city and its country. The
// function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the
// country a default value. Call your function for three different cities, at least one of which is not in the
// default country.
console.log("\n");
console.log("ans38");
function describe_city(city, country) {
    if (country === void 0) { country = 'Unknown'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi', 'Pakistan');
describe_city('Paris', 'France');
describe_city('Tokyo');
// q39
// 39. City Names:
// Write a function called city_country() that takes in the name of a city and its country. The
// function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least
// three city-country pairs, and print the value that’s returned
console.log("\n");
console.log("ans39");
function country_city(country, city) {
    return "".concat(country, ",").concat(city);
}
console.log(country_city('paksitan', 'Lahore'));
console.log(country_city('japan', 'Tokyo'));
console.log(country_city('USA', 'New York'));
// Q40
// 40. Album:
// Write a function called make_album() that builds an Object describing a music album. The
// function should take in an artist name and an album title, and it should return a Object containing
// these two pieces of information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make
// at least one new function call that includes the number of tracks on an album
console.log("\n");
console.log("ans40");
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist 1', 'Album Title 1');
var album2 = make_album('Artist 2', 'Album Title 2', 12);
var album3 = make_album('Artist 3', 'Album Title 3');
console.log(album1);
console.log(album2);
console.log(album3);
// Q41
// 41. Magicians:
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which
// prints the name of each magician in the array.
console.log("\n");
console.log("ans41");
function show_magicians(magicians) {
    console.log("List of Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicianNames = ["ASHHAL", "Harry ", "BOT", "JERRY"];
show_magicians(magicianNames);
// Q42
// 42. Great Magicians:
// Start with a copy of your program from Exercise 41. Write a function called make_great() that
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
// show_magicians() to see that the list has actually been modified
console.log("\n");
console.log("ans42");
var illusionists = ["Merlin", "Houdini", "Copperfield", "Dynamo"];
function make_great(illusionistList) {
    for (var i = 0; i < illusionistList.length; i++) {
        illusionistList[i] = "the Great ".concat(illusionistList[i]);
    }
}
function show_illusionists(illusionistList) {
    console.log("List of Illusionists:");
    illusionistList.forEach(function (illusionist) {
        console.log(illusionist);
    });
}
console.log("Original List of Illusionists:");
show_illusionists(illusionists);
make_great(illusionists);
console.log("\nList of Illusionists after adding 'the Great':");
show_illusionists(illusionists);
// q43
// 43. Unchanged Magicians:
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array
// of magicians’ names. Because the original array will be unchanged, return the new array and store it
// in a separate array. Call show_magicians() with each array to show that you have one array of the
// original names and one array with the Great added to each magician’s name.
console.log("\n");
console.log("ans43");
function show_magicianss(magicians) {
    console.log("List of Magicians:");
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
function make_greats(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
var magicianNamess = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
var greatMagicianss = make_greats(__spreadArray([], magicianNames, true));
console.log("\nOriginal Magicians:");
show_magicians(magicianNamess);
console.log("\nGreat Magicians:");
show_magicians(greatMagicianss);
// q44
// 44. Sandwiches:
// Write a function that accepts an array of items a person wants on a sandwich. The function
// should have one parameter that collects as many items as the function call provides, and it should
// print a summary of the sandwich that is being ordered. Call the function three times, using a different
// number of arguments each time.
console.log("\n");
console.log("ans44");
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
// Call the function three times with different numbers of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Peanut Butter", "Jelly");
makeSandwich("Turkey", "Bacon", "Avocado");
// q45
// 45. Cars:
// Write a function that stores information about a car in an Object. The function should always
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword
// arguments. Call the function with the required information and two other name-value pairs, such as
// a color or an optional feature. Print the Object that’s returned to make sure all the information was
// stored correctly.
console.log("\n");
console.log("ans45");
function Car() {
    manufacturer: string;
    model: string;
    [key, string];
    any;
}
function createCar(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < args.length; i += 2) {
        var key = args[i];
        var value = args[i + 1];
        car[key] = value;
    }
    return car;
}
var carInfo = createCar('Toyota', 'Camry', 'color', 'red', 'year', 2023);
console.log(carInfo);
