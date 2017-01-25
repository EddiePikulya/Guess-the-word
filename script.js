var arr = ['РЫБА', 'ПИЦЦА', 'СЫР', 'КОШКА', 'ПОМИДОР', 'ТЕЛЕФОН', 'ЖАБАСКРИПТ', 'ФУНКЦИЯ', 'КАПЮШОН', 'КУРТКА', 'ХАЛАТ'];
var word = arr[~~(Math.random() * arr.length)];
var wordArr = word.split('');
var equaleWord = wordArr.join(' ')
var secretWord = '_';
var lifes = 5;
for (i = 0; i < word.length-1; i++) {
	secretWord+=" _"
}
var lettersQuantity = document.querySelector('.letters-quantity');
lettersQuantity.innerHTML = word.length;
var lifesNow = document.querySelector('.lifes');
lifesNow.innerHTML = lifes;
var hiddenWord = document.querySelector('.hidden-word');
hiddenWord.innerHTML = secretWord;
var gameOver = document.querySelector('.game-over');
var gameOverWord = document.querySelector('.word');
gameOverWord.innerHTML = word;
var gameWon = document.querySelector('.game-won')

var letter = document.querySelectorAll('.letter');
for (var i = 0; i < letter.length; i++) {
	letter[i].onclick = function(event) {
		for (i = 0; i < word.length; i++) {
		word[i];
		if (word[i] == this.innerHTML) {
			var newArr = secretWord.split(' ');
			newArr[i] = this.innerHTML;
			secretWord = newArr.join(' ');
		}
		hiddenWord.innerHTML = secretWord;
		}
		if (this.innerHTML !== word[0] && this.innerHTML !== word[1] && this.innerHTML !== word[2] && this.innerHTML !== word[3] && this.innerHTML !== word[4] && this.innerHTML !== word[5] && this.innerHTML !== word[6] && this.innerHTML !== word[7] && this.innerHTML !== word[8] && this.innerHTML !== word[9]) lifesNow.innerHTML--;
		if (lifesNow.innerHTML == '0') gameOver.classList.add('open');
		if (secretWord == equaleWord) gameWon.classList.add('open');
		this.style.width = this.offsetWidth + 'px';
		this.innerHTML = '';
	}
}
