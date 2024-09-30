/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";]

window.onload = function() {*/
//write your code here

const pronouns = ["the", "our"];
const adjs = ["great", "big"];
const nouns = ["jogger", "racoon"];

for (let pronounIndex = 0; pronounIndex < pronouns.length; pronounIndex++) {
  for (let adjIndex = 0; adjIndex < adjs.length; adjIndex++) {
    for (let nounIndex = 0; nounIndex < nouns.length; nounIndex++) {
      console.log(pronouns[pronounIndex] + adjs[adjIndex] + nouns[nounIndex] + ".com");
    }
  }
}

// pronouns.forEach((pronoun ) => {
//   adjs.forEach((adj ) => {
//     nouns.forEach((noun)=>{
//       console.log(pronoun + adj + noun + ".com");
//     });
//   });
  
// });
