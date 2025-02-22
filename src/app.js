import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let first = ['double', 'vanilla', 'mac', 'spicy', 'strawberry'];
  let second = ['cheese', 'ice', 'and', 'hot', 'milk'];
  let third = ['burger', 'cream', 'cheese', 'pockets', 'shake'];

  for (let i = 0; i < first.length; i++) {
    console.log('i=', i)
    for (let s = 0; s < second.length; s++) {
      console.log('s=', s)
      for (let t = 0; t < third.length; t++) {
        console.log(first[i] + second[s] + third[t]);
        console.log('t=', t)
      }
    }
  }
}