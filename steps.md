# CONTROLLO DI UN PALINDROMO

1. Prendiamo dal DOM gli elementi desiderati tramite i loro ID.
2. Definiamo la funzione checkPalindrome che compia le seguenti azioni:
- Convertiamo la parola in minuscolo e rimuoviamo gli spazi. 
- Confrontiamo i caratteri corrispondenti dalla prima metà della parola con i caratteri corrispondenti dalla seconda metà. 
    - **Se** troviamo una discrepanza, la parola non è palindroma e restituiamo false.
    - **Altrimenti**, la parola è palindroma e restituiamo true.
3. Mettiamo in ascolto il click sul bottone submitBtn. Quando viene cliccato, otteniamo il valore dell'input dell'utente tramite l'ID word-input. Applichiamo la funzione checkPalindrome alla parola inserita e otteniamo il risultato.
4. Aggiorniamo il testo nel displayResult a seconda se la parola è palindroma o meno.
