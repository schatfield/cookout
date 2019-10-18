

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
};

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.


function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;
    // use dot notation to put the cooked key value on the argument for "currentObject" that will be passed through the grill function.

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
    // use dot notation on the cookedFood array to push whatever the argument for currentObject is into cookedFood 
};

// you can use the .foreach method here or a for loop. Below is the syntax for the forEach method. it goes like this:
//  "array.forEach(function(function argument you declare that will represent each item in the array you want something to happen to) so "foodItem" below represengs the items of food in the food array.{

// }"


foods.forEach(function(foodItem) {
    grill(foodItem);

});

console.log(cookedFood);
