/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";]

window.onload = function() {*/
//write your code here

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let a = 0; a < pronoun.length; a++) {
  for (let b = 0; b < adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      console.log(pronoun[a] + adj[b] + noun[c] + ".com");
    }
  }
}
