/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// Iterative Approach O(n)

// function vowelsCounter(text) {
// 	const vowels = ["a", "e", "i", "o", "u"];
// 	let counter = 0;
// 	for (let letter of text.toLowerCase()) {
// 		if (vowels.includes(letter)) {
// 			counter++;
// 		}
// 	}
// 	return counter;
// }

// regex approach O(1)

// function vowelsCounter(text) {
// 	let matches = text.match(/[aeiou]/gi);

// 	if (matches) {
// 		return matches.length;
// 	} else {
// 		return 0;
// 	}
// }

module.exports = vowelsCounter;
