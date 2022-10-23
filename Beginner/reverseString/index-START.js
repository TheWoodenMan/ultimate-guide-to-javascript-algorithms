/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// Chaining in-built Methods
// You can start with .split() or [...text] which is .2ms faster.
// function reverseString(text) {
// 	return [...text].reverse().join("");
// }

// For loop
//  n.b. the loop decrements - that is it starts with the last character and iterates backwards as long as i >= 0

// function reverseString(text) {
// 	let outputString = "";
// 	for (let i = text.length - 1; i >= 0; i--) {
// 		outputString += text[i];
// 	}
// 	return outputString;
// }

// different way to do it which reads better but is actually 0.1ms slower

// function reverseString(text) {
// 	let outputString = "";
// 	for (let char of text) {
// 		outputString = char + outputString;
// 	}
// 	return outputString;
// }

// Recursion
//

// function reverseString(text) {
// 	if (text === "") {
// 		return "";
// 	} else {
// 		return reverseString(text.substr(1)) + text[0];
// 	}
// }

// // Reduce@
