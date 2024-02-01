//boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//string
var myString = "Hello";
console.log("The value of myString is: " + myString);
//number
var myNumber = 5;
console.log("The value of myNumber is: " + myNumber);
//arrays
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log("The value of item " + (i + 1) + " is " + myArray[i]);
}
var myArray2 = [1, 2, 3];
myArray.forEach(function (item) {
    console.log("The value is " + item);
});
//any
var unKnown = "Whatever we want";
console.log("The value of unKnownis " + unKnown);
