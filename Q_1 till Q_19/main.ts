// Q10) Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Assignments-45-question
// Name: ASHHAL AHMED
// Date: 1/MARCH/2024

// Q1) Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
console.log("ANS1")
let personName= "ASHHAL";

console.log(`Hello ${personName}, would you like to learn some Python today?`);
console.log('\n')
// Q2) Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("ANS2")
let NAME: string = "ASHHAL";
console.log("Lowercase:", NAME.toLowerCase());
console.log("Uppercase:", NAME.toUpperCase());
console.log("Titlecase:\n", NAME.charAt(0).toUpperCase() + NAME.slice(1).toLowerCase() );
console.log('\n')
// Q3) Famous Quote: Find a quote from a famous person you admire.
// Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log("ANS3")
let quote: string = "To be, or not to be, that is the question";
let famous_person: string = "William Shakespeare";
console.log(`${famous_person} once said, "${quote}"\n`);
console.log('\n')
// Q4) Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
console.log("ANS4")
let quote2: string = "You never have to change anything you got up in the middle of the night to write.";
let famous_person2: string = "Saul Bellow";
let message: string = `${famous_person2} once said, "${quote2}"`;
console.log(`${message} `);
console.log('\n')
// Q6) Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
// Then print the name after striping the white spaces.
console.log("ANS6")
let persons_name: string = "\t\n ashhal \t\n";
console.log("Name with whitespace:", persons_name);
let change: string = persons_name.trim();
console.log("change name: ", change);
console.log('\n')
// Q7) Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8
// Be sure to enclose your operations in print statements to see the results.
console.log("ANS7")
let addition: number = 5 + 3;
console.log("Addition Result:", addition);
let subtraction: number = 10 - 2;
console.log("Subtraction Result:", subtraction);
let multiplication: number = 2 * 4;
console.log("Multiplication Result:", multiplication);
let Division: number = 16 / 2;
console.log("Division Result: ", Division);
console.log('\n')
// Q8) You should create four lines that look like this: console.log(5 + 3)
console.log("ANS8")
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
console.log('\n')
// Q9) Favorite Number: Store your favorite number in a variable. 
// Then, using that variable, create a message that reveals your favorite number. Print that message.
console.log("ANS9")
var fav_num: Number = 118;
console.log(`My favourite number is ${fav_num}`);
console.log('\n')
// Q11) Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
console.log("ANS11")
let array = ["ASHHAl", "usman", "irtaza", "bilal"];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log('\n')
// Q12) Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("ANS12")
let arrays = ["ASHHAl", "usman", "Irtaza", "Bilal"];
console.log(`HELLO!! ${arrays[0]} GOOD MORNING`);
console.log(`HELLO!! ${arrays[1]} GOOD MORNING`);
console.log(`HELLO!! ${arrays[2]} GOOD MORNING`);
console.log(`HELLO!! ${arrays[3]} GOOD MORNING`);
console.log('\n')
// Q13) Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”    
console.log("ANS13")
let FAV_transportation = ["car", "HR-v", "GRANDE", "civic", "YARIS"];

for (let i = 0; i < FAV_transportation.length; i++) {
    console.log(`I would like to own a ${FAV_transportation[i]}.`);
}
console.log('\n')
// Q14) Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.  
console.log("ANS14")
let invitation = ["BILAL", "UMER", "AYEZA"];
for (let i = 0; i < invitation.length; i++) {
    console.log(`Dear ${invitation[i]} i would like to invite you to dinner`);
}
console.log('\n')
// Q15) Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invite.
// You’ll have to think of someone else to invite. Start with your program from Exercise 14. 
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log("ans15)")
let guests = ["BILAL", "UMER", "AYEZA"];
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I WOULD LIKE TO INVITE YOU AT DINNER`);
}
let unable = guests.pop()!; 
console.log(`${unable} can't make it to dinner.`);
console.log('\n')
// Q16) More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner. Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. Use append() to add one new guest to the end of your list.
// Print a new set of invitation messages, one for each person in your list.
console.log("ans16)")
let guestslist = ["BILAL", "UMER", "AYEZA"];
for (let i = 0; i < guestslist.length; i++) {
    console.log(`Dear ${guestslist[i]}, i would like to invite you to dinner`);
}
let unableToAttend: string = guestslist.pop()!;
console.log(`Unfortunately, ${unableToAttend} can't make it to dinner.`);
let newGuest: string = "aman";
guestslist.push(newGuest); 
console.log("Second set of invitation messages:");
for (let i = 0; i < guestslist.length; i++) {
    console.log(`Dear ${guestslist[i]}, join us`);
}
console.log("Good news! We found a bigger dinner table.");
guestslist.unshift("Nikola Tesla");
guestslist.splice(Math.floor(guestslist.length / 2), 0, "iqra");
guestslist.push("fahad");
console.log("New set of invitation messages:");
for (let i = 0; i < guestslist.length; i++) {
    console.log(`Dear ${guestslist[i]}, join us`);
}

console.log('\n')
// q17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Print a message to each of the two people still on your list, letting them know they’re still invited.
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("ans17)")
let list = ["BILAL", "UMER", "AYEZA", "ALI", "maria", "eman"];

console.log("Unfortunately, dinner table is not there.only twoo guesta are allowed.");

while (list.length > 2) {
    let sorryguest = list.pop();
    console.log(`Sorry ${sorryguest}, `);
}

for (let guest of list) {
    console.log(`Dear ${guest}, you're still invited to dinner!`);
}

list.splice(0);

console.log("\nAfter removing guests, the list is now:", list);
console.log('\n')
// Q18)
// Seeing the World:
// Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
// changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its
// order has changed.
console.log("ans18)")
const placesToVisit: string[ = ["Sydney", "Rome", "Great Wall of China", "Rio de Janeiro", "Cape Town"];
]
console.log("Original Order:");
console.log(placesToVisit);

console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());


console.log("\nOriginal Order");
console.log(placesToVisit);

console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

console.log("\nOriginal Order");
console.log(placesToVisit);

console.log("\nReversed Order:");
console.log(placesToVisit.slice().reverse());

console.log("\nBack to Original Order:");
console.log(placesToVisit.slice().reverse());

console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit.slice().sort());


console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit.slice().sort().reverse());
console.log("\n")
// q19
// 19. Dinner Guests:
// Working with one of the programs from Exercises 14 through 18, print a message indicating
// the number of people you are inviting to dinner
console.log("ans19")
let invitations = ["BILAL", "UMER", "AYEZA"];
console.log(`Number of people invited to dinner: ${invitations.length}`);221

