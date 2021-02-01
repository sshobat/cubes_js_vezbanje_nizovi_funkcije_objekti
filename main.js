// ***** JS PRACTISING *****


// TASK 1:

// Based on object:

// var someData = {
// 	name: "Peter",
// 	lastName: "Dinklage",
// 	status: "married"
// };

// Create a function that should receive this object, and repack it to the new object where values from previous object represent both, keys and values of the new object.

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

console.log(someData);

function repack(data) {

    var someOtherData = {};

	someOtherData[data.name] = data.name;
	someOtherData[data.lastName] = data.lastName;
	someOtherData[data.status] = data.status;

	console.log(someOtherData);
}

repack(someData);

// TASK 2: 

// Based on array:

// var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

// Create a function that should repack this array to another one where all numbers are contained in the same array, in the exact order like in provided array.

//SOLUTION

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

function repackTaskTwo(data) {

	var newArr = [];

	for(var i = 0; i < data.length; i++) {

		if(typeof data[i] === 'number') {
			newArr[newArr.length] = data[i];
		} else {
			for(var j = 0; j < data[i].length; j++) {
				newArr[newArr.length] = data[i][j];
			}
		}
	}
	console.log(newArr);
}

repackTaskTwo(someData);

// TASK 3: 

// Based on array:

// var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

// Create a function that should receive array, get both subarrays from parent array, and pass it into another function, which should then join those arrays. In the end result should be returned and stored in variable which contains first function.

//SOLUTION 

var someData = [13, 45, 56, [32, 11], 27, [55, 92]];

var extract = function(data) {
	var subArr = [];
	
	for(var i = 0; i < data.length; i++) {
		if(data[i].length) {
			subArr[subArr.length] = data[i];
		}
	}

	return join(subArr);
}

function join(otherData) {
	var joinedArr = [];

	for(var i = 0; i < otherData.length; i++) {

		for(var j = 0; j < otherData[i].length; j++) {
			joinedArr[joinedArr.length] = otherData[i][j];

		}
	}
	return joinedArr
}

console.log(extract(someData));

// TASK 4:

// Based on object:

// var someData = {
// 	name: "Peter",
// 	lastName: "Dinklage",
// 	status: "married"
// };

// Create a function that should check if there is name in object, if yes it should return another function which should remove name from the function, if no then it should return a function which would set a name propery to the object, with the value passed once function is called.

//SOLUTION

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married"
};

// console.log(someData);

function checkProperty(data) {

	if(data.hasOwnProperty('name')) {

		return function removeName() {
			delete data.name;
		}

	} else {

		return function setName(value) {
			data.name = value;
		}
	}
}

checkProperty(someData)('Jernej');
console.log(someData);

checkProperty(someData)('Bostjan');
console.log(someData);

checkProperty(someData)('Bostjan');
console.log(someData);

// TASK 5:

// Based on object:

// var someData = {
// 	name: "Peter",
// 	lastName: "Dinklage",
// 	status: "married"
// };

// Create a method that should check if there is name in object, if yes it should create second method in the same object and then call it. The second method should remove name from the function, and console log the object in it's current state. The second method should then create a third method and call it. Third method should add name property back to the object, with value of "Mike", and then console log object.

//SOLUTION

var someData = {
	name: "Peter",
	lastName: "Dinklage",
	status: "married",
	checkProperty: function() {

		console.log(this);

		if(this.hasOwnProperty('name')) {

			this.secondMethod = function() {

				delete this.name;
				console.log(this);
				
				this.thirdMethod = function() {
					this.name = 'Mike';
					console.log(this);	
				}
				this.thirdMethod();
			}
			this.secondMethod();
		}
	}
};
// console.log(someData);
someData.checkProperty();

// BONUS:

// Try to set name with value it had before.

//SOLUTION

someData.name = 'Peter';
console.log(someData);