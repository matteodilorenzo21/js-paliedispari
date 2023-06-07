// JS LINK RUN CHECK
console.log('JS RUNNING!');

// ? CONTROLLO DI UN PALINDROMO

// Prendiamo dal DOM gli elementi desiderati
const submitBtn = document.getElementById('submit-btn');
const displayResult = document.getElementById('result');

// Definiamo la funzione checkPalindrome che verifica se una parola palindroma e in seguito restituisce un booleano
function checkPalindrome(word) {

// Convertiamo la parola in minuscolo e rimuoviamo gli spazi
word = word.toLowerCase().replace(/\s/g, '');
console.log(word);


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






// ? PARI E DISPARI

// Generiamo un numero compreso tra 1 e 5
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }
  
  // Prendiamo gli elementi desiderati dal DOM;
const playBtn = document.getElementById('play-btn');

const cpuResult = document.getElementById('cpu-result');

const sumResult = document.getElementById('sum-result');

const playResult = document.getElementById('play-result');
  
// Mettiamo in ascolto il bottone
playBtn.addEventListener('click', function() {

    // Raccogliamo il valore scelto dall'utente
    const userChoice = document.getElementById('user-choice').value;
  
    // Raccogliamo il numero inserito dall'utente convertito in un type number
    const userNumber = parseInt(document.getElementById('user-number').value);
  
    // Verificare se il numero inserito dall'utente è maggiore di 5
    if (userNumber > 5 || userNumber < 1 || isNaN(userNumber)) {

      // Se il numero è maggiore di 5, mostrare un messaggio di errore
      const playResult = document.getElementById('play-result');
      playResult.innerText = "Devi inserire un numero da 1 a 5!";

      // altrimenti
      return; 
      
    }
  
    // Generiamo un numero random per la CPU
    const cpuNumber = getRandomNumber();
  
    // Calcolare la somma tra il numero scelto dall'utente e il numero dalla CPU
    const sum = userNumber + cpuNumber;
  
    // Determinare se la somma è pari o dispari
    const gameResult = sum % 2 === 0 ? 'pari' : 'dispari';
  

  
    // Verifichiamo se il risultato corrisponde alla scelta dell'utente
    if (gameResult === userChoice) {
      // Se il risultato corrisponde, mostrare "Hai vinto!"
      playResult.innerText = "Hai vinto!";
    } else {
      // Altrimenti, mostrare "Hai perso!"
      playResult.innerText = "Hai perso!";
    }
  
    // Mostrare il numero generato dalla CPU
    cpuResult.innerText = "Cpu: " + cpuNumber;
  
    // Mostrare la somma dei numeri
    sumResult.innerText = "Totale: " + sum;
});