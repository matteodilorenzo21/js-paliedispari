// JS LINK RUN CHECK
console.log('JS RUNNING!');

// Prendiamo dal DOM gli elementi desiderati
const submitBtn = document.getElementById('submit-btn');
const displayResult = document.getElementById('result');

// Definiamo la funzione checkPalindrome che verifica se una parola palindroma e in seguito restituisce un booleano
function checkPalindrome(word) {

// Convertiamo la parola in minuscolo e rimuoviamo gli spazi
word = word.toLowerCase().replace(/\s/g, '');


for (let i = 0; i < word.length / 2; i++) {

    // Verifichiamo se il carattere corrente il carettere invertito sono diversi
    if (word[i] !== word[word.length - 1 - i]) {

    // Se i caratteri non corrispondono, restituiamo False perchè la parola non è palindroma
    return false;
    }
}
  // altrimenti restituiamo True
  return true;
}

// Mettiamo in ascolto il bottone
submitBtn.addEventListener('click', function() {

// Otteniamo il valore dell'input dell'utente tramite l'ID 'word-input'
const wordInput = document.getElementById('word-input').value;
const word = checkPalindrome(wordInput);

// Verifichiamo se la parola è un palindromo e aggiorniamo il testo nel displayResult di conseguenza
if (word === true) {
    displayResult.innerText = 'La parola è palindroma';
    } else {   
        displayResult.innerText = 'La parola non è palindroma';
    }
});