//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)
var quiz = {};

// Question 1: a function called sleepIn
//////////////
// You can sleep in if it is not a weekday or if you are on vacation.
// quiz.sleepIn() => false
// quiz.sleepIn({vacation: true}) => true
quiz.sleepIn = function(options) {
	options = options || {};
	var day = new Date().getDay();
	if (day === 0 || day === 6) {
		return true;
	}
	else if (options.vacation === true) {
		return true;
	} else {
		return false;
	}
};

// Question 2: function called nearHundred
//////////////
// If the number is between 90 and 99, the result is true;
// If it is 89 or below, it is false.
// quiz.nearHundred(52) => false
// quiz.nearHundred(93) => true
// quiz.nearHundred('two') => Error: Please enter a number!
quiz.nearHundred = function(num) {
	if(typeof(num) !== 'number') {
		throw new Error('Please enter a number!');
	} else {
		if ((num < 100) && (num > 90)) {
			return true;
		} else {
			return false;
		}
	}
}


// Question 3: a function called missingChar
//////////////
// Remove the character that corresponds to the index from the string.
// If you don't enter a string
// quiz.missingChar("kittie", 1) => "kttie"
// quiz.missingChar(347, 1) => Error: Please enter a string!
quiz.missingChar = function(string, index) {
	if(typeof(string) !== 'string') {
		throw new Error('Please enter a string!');
	} else {
		newString = (string.slice(0, index) + string.slice(index + 1));
	}
	return newString;
}

// Question 4: a function called delDel
//////////////
// Remove "del" from a string.
// quiz.delDel("abdelcd") => "abcd"
// quiz.delDel("xyz") => "xyz"
quiz.delDel = function(string) {
	newString = string.split(/del/);
	return newString.join('')
}

// Question 5: a method called backAround
//////////////
// Given a string, move the last character to the beginning.
// "cat".backAround() => "tca"
// "hello".backAround() => "ohell"
quiz.backAround = function(string) {
	last = string.slice(-1);
	newString = (last + string.slice(0, -1));
	return newString;
}




