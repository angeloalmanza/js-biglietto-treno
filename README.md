Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:  
il prezzo del biglietto è definito in base ai km (0.21 € al km)  
va applicato uno sconto del 20% per i minorenni  
va applicato uno sconto del 40% per gli over 65.  
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Ricordatevi un metodo che abbiamo visto durante le lezioni precedenti.

Bonus:  
Applicare dei controlli sull'input dell'utente


DATI  
Chiedo al passeggero quanti chilometri vuole percorrere   
Chiedo al passeggero la sua età  


BONUS  
Controllo se l'utente ha inserito dei numeri  


ESECUZIONE LOGICA  
Se l'età è minore di 18 anni    
    &nbsp;&nbsp;&nbsp;&nbsp;calcolo il prezzo totale (chilometri * 0.21)  
    &nbsp;&nbsp;&nbsp;&nbsp;calcolo il 20% del prezzo totale (sconto)  
    &nbsp;&nbsp;&nbsp;&nbsp;calcolo il prezzo finale (prezzo totale - sconto)  
    &nbsp;&nbsp;&nbsp;&nbsp;messaggio = "il tuo biglietto costa prezzo finale"     

Se l'età è maggiore o uguale di 65 anni     
    &nbsp;&nbsp;&nbsp;&nbsp;calcolo il prezzo totale (chilometri * 0.21)  
    &nbsp;&nbsp;&nbsp;&nbsp;calcolo il 40% del prezzo totale (sconto)  
    &nbsp;&nbsp;&nbsp;&nbsp;calcolo il prezzo finale (prezzo totale - sconto)  
    &nbsp;&nbsp;&nbsp;&nbsp;messaggio = "il tuo biglietto costa prezzo finale"  

Altrimenti  
    &nbsp;&nbsp;&nbsp;&nbsp;calcolo il prezzo finale (chilometri * 0.21)  
    &nbsp;&nbsp;&nbsp;&nbsp;messaggio = "il tuo biglietto costa prezzo finale"  

STAMPA  
Stampo il messaggio       

