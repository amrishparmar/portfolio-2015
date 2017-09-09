// global variables
var c;

// encrypts/decrypts input text using Atbash
function atbash(inputText) {
	var inputTextLength = inputText.length;
	var outputString = '';

	for (var i = 0; i < inputTextLength; i++) {
		c = inputText.charCodeAt(i);
		if (c >= 65 && c <= 90)
			outputString += String.fromCharCode(25 - (c - 65) + 65);
		else if (c >= 97 && c <= 122)
			outputString += String.fromCharCode(25 - (c - 97) + 97);
		else
			outputString += inputText[i];
	}
	return outputString;
}

function beaufort(inputText, key) {
	var inputTextLength = inputText.length;
	var keyLength = key.length;
	var keyLower = '';
	var outputString = '';
	var cursor = 0;
	var shiftBy;
	
	//if the user has not entered a key
	if (key === '')
		return keyAlert();

	// ensures that the user has entered a valid secret key and coverts it to lowercase
	for (var i = 0; i < keyLength; i++) {
		c = key.charCodeAt(i);
		if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122))
			keyLower += String.fromCharCode(c).toLowerCase();
		else
			return keyAlert();
	}

	for (var j = 0; j < inputTextLength; j++) {
		cursor %= keyLength;
		c = inputText.charCodeAt(j);
		if (c >= 65 && c <= 90) {
			shiftBy = keyLower.charCodeAt(cursor) - 97;
			outputString += String.fromCharCode(((shiftBy - (inputText.charCodeAt(j) - 65) + 26) % 26) + 65);
			cursor++;
		}
		else if (c >= 97 && c <= 122) {
			shiftBy = keyLower.charCodeAt(cursor) - 97;
			outputString += String.fromCharCode(((shiftBy - (inputText.charCodeAt(j) - 97) + 26) % 26) + 97);
			cursor++;
		}
		else
			outputString += inputText[j];
	}
	return outputString;
}

// encrypts/decrypts input text using Caesar shift
function caesar(inputText, rot, decrypt) {
	var inputTextLength = inputText.length;
	var outputString = '';

	// turn string rot into a number 
	rot = +rot;

	// ensure that user input is a valid integer
	if (isNaN(rot) || rot % 1 !== 0 || rot <= 0)
		return keyAlert();

	// if attempting to decrypt input text
	if (decrypt)
		rot = (26 - rot) % 26;

	for (var i = 0; i < inputTextLength; i++) {
		c = inputText.charCodeAt(i);
		if (c >= 65 && c <= 90)
			outputString += String.fromCharCode(((c - 65 + rot) % 26) + 65);
		else if (c >= 97 && c <= 122)
			outputString += String.fromCharCode(((c - 97 + rot) % 26) + 97);
		else
			outputString += inputText[i];
	}
	return outputString;
}

// helper function for mixed; returns a string with repeated characters removed - snippet taken from http://jsfiddle.net/mplunjan/FHUgY
function removeRepeatChars(key) {
	var unique = '';
	var keyLength = key.length;

	for (var i = 0; i < keyLength; i++)
		if (unique.indexOf(key[i]) === -1)
			unique += key[i];

	return unique;
}

// encrypts/decrypts input text using mixed alphabet technique
function mixed(inputText, key, decrypt) { 
	var inputTextLength = inputText.length;
	var keyLength = key.length;
	var keyLower = [];
	var alpha = [];
	var alphaMixed = [];
	var outputString = '';
	var index;

	//if the user has not entered a key
	if (key === '')
		return keyAlert();

	//populates alpha array with each letter of alphabet
	for (var i = 0; i < 26; i++)
		alpha[i] = String.fromCharCode(97 + i); 

	// clones the alpha array
	alphaMixed = alpha.slice(0); 

	// ensures that the user has entered a valid secret key and coverts it to lowercase
	for (var j = 0; j < keyLength; j++) {
		c = key.charCodeAt(j);
		if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122))
			keyLower.push(String.fromCharCode(c).toLowerCase());
		else
			return keyAlert();
	}

	keyLower = removeRepeatChars(keyLower);

	// creates the new mixed alphabet using the key
	for (var k = 0; k < keyLength; k++)
		for (var l = k; l < 26; l++)
			if (keyLower[k] === alphaMixed[l]) {
				var temp = alphaMixed[l];
				alphaMixed.splice(l, 1);
				alphaMixed.splice(k, 0, temp);
			}

	if (decrypt) {
		for (var m = 0; m < inputTextLength; m++) {
			c = inputText.charCodeAt(m);
			if (c >= 65 && c <= 90) {
				c += 32; // convert it to lowercase
				index = alphaMixed.indexOf(String.fromCharCode(c));
				outputString += alpha[index].toUpperCase();
			}
			else if (c >= 97 && c <= 122) {
				index = alphaMixed.indexOf(String.fromCharCode(c));
				outputString += alpha[index];
			}
			else
				outputString += inputText[m];
		}
	}
	else {
		for (var n = 0; n < inputTextLength; n++) {
			c = inputText.charCodeAt(n);
			if (c >= 65 && c <= 90) {
				c += 32; // convert it to lowercase
				index = alpha.indexOf(String.fromCharCode(c));
				outputString += alphaMixed[index].toUpperCase();
			}
			else if (c >= 97 && c <= 122) {
				index = alpha.indexOf(String.fromCharCode(c));
				outputString += alphaMixed[index];
			}
			else
				outputString += inputText[n];
		}
	}
	return outputString;
}

// encrypts/decrypts input text using Vigenere
function vigenere(inputText, key, decrypt) {
	var inputTextLength = inputText.length;
	var keyLength = key.length;
	var keyTemp = '';
	var keyLower = '';
	var outputString = '';
	var cursor = 0;
	var shiftBy;
	
	//if the user has not entered a key
	if (key === '')
		return keyAlert();

	// ensures that the user has entered a valid secret key and coverts it to lowercase
	for (var i = 0; i < keyLength; i++) {
		c = key.charCodeAt(i);
		if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122))
			keyTemp += String.fromCharCode(c).toLowerCase();
		else
			return keyAlert();
	}

	// if attempting to decrypt input text
	if (decrypt)
		for (var j = 0; j < keyLength; j++)
			keyLower += String.fromCharCode(((26 - (keyTemp.charCodeAt(j) - 97)) % 26) + 97);
	else
		keyLower = keyTemp;

	for (var l = 0; l < inputTextLength; l++) {
		cursor %= keyLength;
		c = inputText.charCodeAt(l);
		if (c >= 65 && c <= 90) {
			shiftBy = keyLower.charCodeAt(cursor) - 97;
			outputString += String.fromCharCode(((inputText.charCodeAt(l) - 65 + shiftBy) % 26) + 65);
			cursor++;
		}
		else if (c >= 97 && c <= 122) {
			shiftBy = keyLower.charCodeAt(cursor) - 97;
			outputString += String.fromCharCode(((inputText.charCodeAt(l) - 97 + shiftBy) % 26) + 97);
			cursor++;
		}
		else
			outputString += inputText[l];
	}
	return outputString;
}
