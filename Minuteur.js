var heure = Number(prompt("Entrer une heure: "));
var minute = Number(prompt("Entrer une minute: "));
var seconde = Number(prompt("Entrer une seconde: "));

if ((heure >= 0) && (heure <= 23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <= 59)) {
	seconde++;
	if (seconde === 60) {
		seconde = 0;
		minute++;
 	
		if (minute === 60) {
			minute = 0;
			heure++;
 	
			if (heure === 24) {
				heure = 0;
			}
		}
	}
} 
else {
alert("Je n'ai pas compris votre reponse.");
}
alert("Il est " + heure + "h" + minute + "m" + seconde + "s");
