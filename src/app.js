let result = "";

const pronouns = ["the ", "our "];
const adjs = ["great ", "big "];
const nouns = ["jogger ", "racoon "];

for (let pronounIndex = 0; pronounIndex < pronouns.length; pronounIndex++) {
  for (let adjIndex = 0; adjIndex < adjs.length; adjIndex++) {
    for (let nounIndex = 0; nounIndex < nouns.length; nounIndex++) {
      result +=
        pronouns[pronounIndex] + adjs[adjIndex] + nouns[nounIndex] + ".com<br>";
    }
  }
}

document.querySelector("#dominio").innerHTML = result; // Inserta todas las combinaciones
