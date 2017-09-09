/*
** scripts for the website
*/

/*
** index.html
*/

// global variables
var outputText = '';

// removes default text from input box first time it is clicked on
$('#input').one('focus', function() {
	$(this).val('');
});

// displays appropriate dropdown for user's action type
$('#action_type > input').change(function() {
	var actionVal = $('input:radio[name=edh]:checked').val();
	$('#method_options').css('display', 'block');

	if (actionVal === 'encrypt') {
		$('#hash_method').css('display','none'); // hides list of hash functions
		$('#crypt_method').fadeIn('slow'); // fades in the list of cipher algorithms
		$('#crypt_method p span').html('encryption'); // changes the description text to show correct action
		$('#submit').html('Encrypt'); // changes the text on the submit button to show correct action
	}
	else if (actionVal === 'decrypt') {
		$('#hash_method').css('display','none');
		$('#crypt_method').fadeIn('slow');
		$('#crypt_method p span').html('decryption');
		$('#submit').html('Decrypt');
	}
	else if (actionVal === 'hash') {
		$('#crypt_method').css('display','none');
		$('#hash_method').fadeIn('slow');
		$('#submit').html('Hash');
		$('#key_error').slideUp('fast'); // hides the key_error div if currently visible
	}
});

// hides secret key option when Atbash is selected
$('#crypt').change(function() {
	if ($('#crypt option:selected').val() === 'atbash')
		$('#secret_key').css('display','none');
	else
		$('#secret_key').css('display','block');
});

// activates secret key input instructions on ? hover
$('#key_guide').hover(function() {
	$(this).popover({html:true}).popover('toggle');
});

// handles grouping of output text
$('#groups_five').change(function() {
	if ($(this).is(':checked')) {
		var groupedText = '';
		var tempText = outputText;
		
		tempText = tempText.replace(/\W+/g,'');
		var tempTextLength = tempText.length;

		for (var i = 0; i < tempTextLength; i++) {
			if (((i + 1) % 5) === 0)
				groupedText += tempText[i].toUpperCase() + ' ';
			else
				groupedText += tempText[i].toUpperCase();
		}
		$('#output').val(groupedText);
	}
	else 
		$('#output').val(outputText);
});

// displays alert for secret key errors
function keyAlert () {
	$('#key_error').slideDown();
	return -1;
}

// hides an alert when x is clicked
$('.close').click(function () {
	$(this).parent().slideUp();
});

// handles encryption, decryption and hashing
$('#submit').click(function() {
	var actionVal = $('input:radio[name=edh]:checked').val();
	var inputText = $('#input').val();

	if (actionVal === 'encrypt' || actionVal === 'decrypt') {
		var cryptSelected = $('#crypt option:selected').val();
		if (cryptSelected !== 'atbash')
			var key = $('#secret_key input').val();
	}

	// convert text to encrypted string
	if (actionVal === 'encrypt') {
		var encrypt;

		switch (cryptSelected) {
		case 'atbash':
			encrypt = atbash(inputText);
			break;

		case 'beaufort':
			encrypt = beaufort(inputText, key);
			break;
		
		case 'caesar':
			encrypt = caesar(inputText, key, false);
			break;

		case 'mixed':
			encrypt = mixed(inputText, key, false);
			break;

		case 'vigenere':
			encrypt = vigenere(inputText, key, false);
			break;
		}

		if (encrypt < 0)
			return;
		else
			$('#output').val(encrypt);
	}

	// decrypt encrypted input text
	else if (actionVal === 'decrypt') {
		var decrypt;

		switch (cryptSelected) {
		case 'atbash':
			decrypt = atbash(inputText);
			break;

		case 'beaufort':
			decrypt = beaufort(inputText, key);
			break;

		case 'caesar':
			decrypt = caesar(inputText, key, true);
			break;

		case 'mixed':
			decrypt = mixed(inputText, key, true);
			break;

		case 'vigenere':
			decrypt = vigenere(inputText, key, true);
			break;
		}

		if (decrypt < 0)
			return;
		else
			$('#output').val(decrypt);
	}

	// convert text to hashed string
	else if (actionVal === 'hash') {
		var hashSelected = $('#hash option:selected').val();
		var hash;

		switch (hashSelected) {
		case 'md5':
			hash = CryptoJS.MD5(inputText);
			break;
		
		case 'sha1':
			hash = CryptoJS.SHA1(inputText);
			break;
		
		case 'sha256':
			hash = CryptoJS.SHA256(inputText);
			break;
		
		case 'sha512':
			hash = CryptoJS.SHA512(inputText);
			break;
		
		case 'sha3':
			hash = CryptoJS.SHA3(inputText);
			break;
		}

		$('#output').val(hash);
	}

	$('#key_error').slideUp('fast'); // hide secret key alert (if displayed)
	outputText = $('#output').val();
});

/*
** howitworks.html
*/

// shows/hides descriptions of each hash/cipher type 
$('.crypt_head a').click(function() {
	$(this).parent().next('.crypt_item').slideToggle('fast');
});
