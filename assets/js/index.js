let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let risultato = document.getElementById("risultato");
let clickBtn = document.getElementById("clickBtn");
let tabellone = document.getElementById("tabellone");
let h2tabellone = document.getElementById("h2tabellone");
let punteggio1 = 0;
let punteggio2 = 0;

//Dichiaro funzione per inserire immagini random
function genera(x) {
  let numeroRandom = Math.random() * 100;
  if (numeroRandom < 33.3) {
    x.setAttribute("src", "assets/Paper.png");
    return 1;
  } else if (numeroRandom < 66.6) {
    x.setAttribute("src", "assets/Rock.png");
    return 2;
  } else {
    x.setAttribute("src", "assets/Scissors.png");
    return 3;
  }
}

clickBtn.addEventListener("click", () => {
  let valore1 = genera(img1);
  let valore2 = genera(img2);

  if (valore1 == valore2) {
    risultato.innerHTML = "Pareggio";
    punteggio1++;
    punteggio2++;
  } else if (
    (valore1 == 1 && valore2 == 2) ||
    (valore1 == 2 && valore2 == 3) ||
    (valore1 == 3 && valore2 == 1)
  ) {
    risultato.innerHTML = " Vince giocatore 1";
    punteggio1++;
  } else if (
    (valore1 == 1 && valore2 == 3) ||
    (valore1 == 3 && valore2 == 2) ||
    (valore1 == 2 && valore2 == 1)
  ) {
    risultato.innerHTML = " Vince giocatore 2";
    punteggio2++;
  }
  h2tabellone.setAttribute("class", "d-block");
  tabellone.innerHTML = `Giocatore 1 : <span class="text-primary fs-2">${punteggio1}</span> A <span class="text-primary fs-2">${punteggio2}</span> : Giocatore 2`;
});
