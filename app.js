const texts = ['websites', 'designs', 'emotions'];
let count = 0; // look at each individual word from 0 to 2.
let index = 0; // keep track of the individual letters.
let currentText = ''; // currantly selected word.
let letter = ''; // this add all latters of the words as typewriting effect one by one.

// iife function call herself and runs immediately.

(function type() {

   if(count === texts.length) { // after hits the 3 word.
       count = 0; // will start again from 0;
   } 
   currentText = texts[count]; // current word that's being process.
   letter = currentText.slice(0, ++index); // this line will goes to each of the words and add all their letters one by one to letter.

   document.querySelector('.typing').textContent = letter;
   if(letter.length === currentText.length) { // if letter is equal to the letters of the word.
       count++; // then count++ and the next word will start.
       index = 0; // after the last word starts from 0 again.
   }

   setTimeout(type, 300); // change the speed.

}());