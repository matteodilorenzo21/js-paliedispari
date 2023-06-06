# CONTROLLO DI UN PALINDROMO

1. Prendiamo dal DOM gli elementi desiderati tramite i loro ID.
2. Dichiariamo la funzione checkPalindrome che compia le seguenti azioni:
- Convertiamo la parola in minuscolo e rimuoviamo gli spazi. 
- Confrontiamo i caratteri corrispondenti dalla prima metà della parola con i caratteri corrispondenti dalla seconda metà. 
    - **Se** troviamo una discrepanza, la parola non è palindroma e restituiamo false.
    - **Altrimenti**, la parola è palindroma e restituiamo true.
3. Mettiamo in ascolto il click sul bottone submitBtn. Quando viene cliccato, otteniamo il valore dell'input dell'utente tramite l'ID word-input. Applichiamo la funzione checkPalindrome alla parola inserita e otteniamo il risultato.
4. Aggiorniamo il testo nel displayResult a seconda se la parola è palindroma o meno.


# PARI E DISPARI

1. Dichiariamo la funzione getRandomNumber che genera un numero casuale compreso tra 1 e 5.
2. Recuperiamo i vari elementi del DOM.
3. Aggiungiamo un event listener al bottone che:
    - Verifica se il numero inserito dall'utente è maggiore di 5. In tal caso, viene mostrato un messaggio di errore e la funzione viene interrotta.
    - Genera un numero casuale per la CPU.
    - Calcola la somma tra il numero scelto dall'utente e il numero generato dalla CPU.
    - Determina se la somma è pari o dispari utilizzando l'operatore modulo.
    - Confronta il risultato del gioco con la scelta dell'utente e mostra il risultato corrispondente.
    - Mostra il numero generato dalla CPU.
    - Mostra la somma dei numeri.