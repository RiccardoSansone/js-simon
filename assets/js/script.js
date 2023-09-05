/*
Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
*/
    const stampaOre = document.getElementById('stampaOre');
    const stampaMinuti = document.getElementById('stampaMinuti');
    const stampaSecondi = document.getElementById('stampaSecondi');


    const today = new Date();//salvo in una variabile il valore della data corrente
    const someday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 9, 30, 0, 0);//salvo in una variabile il valore della data di domani
    console.log(today + ' altro ' + someday);  
    let hoursDifference = (someday - today) / 3600000;//salvo la differenza tra le ore da oggi a domani, il risultato sará in ms, allora lo divido per mille*60*60 per convertirlo 
    console.log(hoursDifference);                                             
    let hour = Math.floor(hoursDifference);//arrotondo il valore e ottengo le ore
    console.log(hour);
    let minute = Math.floor((hoursDifference - hour) * 60);//lo arrotondo sottraggo le ore e lo moltplico *60 per ottenere i minuti
    console.log(minute);
    let second = Math.floor(((hoursDifference - hour) * 60 - minute) * 60)//lo arrotondo sottraggo le ore e lo moltplico *60 per ottenere i minuti po sottraggo i minuti e moltiplico per 60 per ottenere i secondi
    console.log(second);
    const timer = setInterval(startTimer, 1000);//salvo in una costante la setInterval, le passo la funzione da eseguire e i millisecondi
    function startTimer(){
        
        if(second == 0){
            if(minute == 0){                           //se le ore, i minuti e i secondi sono zero,allora il timer é finito
                if(hour == 0){
                    alert('timer scaduto');
                    clearInterval(timer);
                } else {
                    hour--;
                    minute = 59;                 //se i secondi sono 0, i minuti sono 0 e le ore sono diverse da zero allora decrementa il valore di hour e manda a 59 i secondi e i minuti
                    second = 59;
                }
            } else {
                second = 59;
                minute--;                     //se ore e secondi sono uguali a zero ma non i minuti allora decrementa i minuti e manda a 59 i secondi
            }
        } else {
            second --;                    //se i secondi sono diversi da  zero decrementa i secondi
        }
        console.log("Ore: "+hour+ " minuti: " + minute + " secondi: " + second);
        stampaOre.innerHTML = hour
        stampaMinuti.innerHTML = minute
        stampaSecondi.innerHTML = second

    }