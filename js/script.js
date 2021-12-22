const pw = document.getElementById("password");
const lengthWise = document.getElementById("length");
const pwError = document.getElementById("error");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generalas = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    
    const len = lengthWise.value;

    let password = "";

    for (let i = password.length; i < len; i++) {
        const passwordCharacter = generateCharacter();
        password += passwordCharacter;
    }
	
	/* Validation */
	if(password.length === 0){
		pw.innerText = "";
		pwError.innerText = "A jelszónak tartalmaznia kell valamit!";
	} else if(password.length<=3 || password.length>=16){
		pw.innerText = "";
		pwError.innerText = "A jelszó 4-15 karakterből állhat!"
	} else {
		pw.innerText = password;
		pwError.innerText = "";
	}
}

function generateCharacter() {
    const character = [];
    if (upper.checked) {
        character.push(getUppercase());
    }

    if (lower.checked) {
        character.push(getLowercase());
    }

    if (number.checked) {
        character.push(getNumber());
    }

    if (symbol.checked) {
        character.push(getSymbol());
    }

    if (character.length === 0) return "";
	
    return character[Math.floor(Math.random() * character.length)];
}

generalas.addEventListener("click", generatePassword);
