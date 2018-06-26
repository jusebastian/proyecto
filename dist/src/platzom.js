'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {

	var translation = str;
	//si la palabra termina con ar se elimina la dos ultimas palabras
	if (str.toLowerCase().endsWith('ar')) {
		translation = translation.slice(0, -2);
	}

	// si la palabra empieza por z se agrega pe
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}

	//si el numero es mayo a 10 
	if (str.length >= 10) {
		var firstHalf = translation.slice(0, Math.round(str.length / 2));
		var secundHalf = translation.slice(Math.round(str.length / 2));

		translation = firstHalf + '-' + secundHalf;
	}

	//palabra palindrome
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	var minMay = function minMay(str) {
		var translation = '';
		var capitalize = true;
		for (var i = 0; i < str.length; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}

		return translation;
	};

	if (str == reverse(str)) {
		return minMay(str);
	} else {
		console.log('no es palindrome');
	}

	return translation;
}