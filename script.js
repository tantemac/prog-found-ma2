// question 1
var petArray = ["cat", "cow", "dog"];

// question 2
console.log(petArray[1]);

// question 3
petArray.push("sheep");

// question 4
console.log(petArray.length);

// question 5
var catObject = {
	name: "Missi",
	colour: "grey",
	age: 14
};

// question 6
console.log(catObject.age);

// question 7
var catArray = [
	{
		name: "Missi",
		colour: "grey",
		age: 14
	}
];

// question 8
for (var i = 0; i < catArray.length; i++) {
	console.log(catArray[i].name);
	console.log(catArray[i].colour);
	console.log(catArray[i].age);
}

// question 9
function logToConsole(myPet) {
	console.log(myPet);
}

// question 10
logToConsole("donkey");
