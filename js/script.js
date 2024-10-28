// DATI
const km = prompt("Ciao gentile passeggero, calcoliamo insieme il costo del tuo biglietto. Inserisci quanti chilometri vuoi percorrere")
// CONTROLLO 1
if(isNaN(km)){
    alert("Non hai inserito un numero!")
}else{
    const numkm = parseInt(km); 
    console.log(km);

    const eta = prompt("Adesso inserisci la tua età");
    // Controllo 2
    if(isNaN(eta)){
        alert("Non hai inserito la tua età!");
    }else{
        const etaNum = parseInt(eta);
        console.log(eta);
    
        // ESECUZIONE LOGICA
        const tariffa = 0.21;
        const scontoMin = 20 / 100;
        const scontoOver = 40 / 100;
        let messaggio;
        
        if(etaNum < 18){
            const prezzoTotale = numkm * tariffa;
            console.log(prezzoTotale);
            const sconto = prezzoTotale * scontoMin;
            console.log(sconto);
            const prezzoFinale = prezzoTotale - sconto;
            console.log(prezzoFinale);
            const prezzoFinaleDecimale = prezzoFinale.toFixed(2);
            messaggio = `Il tuo biglietto costa ${prezzoFinaleDecimale} €`;
        }else if(etaNum >= 65){
            const prezzoTotale = numkm * tariffa;
            console.log(prezzoTotale);
            const sconto = prezzoTotale * scontoOver;
            console.log(sconto);
            const prezzoFinale = prezzoTotale - sconto;
            console.log(prezzoFinale);
            const prezzoFinaleDecimale = prezzoFinale.toFixed(2);
            messaggio = `Il tuo biglietto costa ${prezzoFinaleDecimale} €`;
        }else{
            const prezzoFinale = numkm * tariffa;
            console.log(prezzoFinale);
            const prezzoFinaleDecimale = prezzoFinale.toFixed(2);
            messaggio = `Il tuo biglietto costa ${prezzoFinaleDecimale} €`;
        }
        
        // STAMPA
        console.log(messaggio);
    }
}
