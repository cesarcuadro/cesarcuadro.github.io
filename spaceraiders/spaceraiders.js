//  Created win & lose variables w/ built in rng output.
var win = Math.floor(Math.random() * 8)
var lose = Math.floor(Math.random() * 8)

//  Conditional for when win & lose equal each other. Reroll rng.
if (win === lose) {
  win = Math.floor(Math.random() * 8)
}

//  Created easterEgg function, w/ conditionals to determine win OR lose.
const easterEgg = (galaxy) => {
  console.log(galaxy)
  console.log(win)
  console.log(lose)

  //  If galaxy equals win, display winning emoji.
  if (galaxy === win) {
    document.getElementById(galaxy).innerHTML = "👽🐱‍🚀💵"
    //  Set delay so emojis show before alert.
    setTimeout(() => {
      alert("Congrats, you discovered space cash money!!!");
    }, 500)
    //  Else if galaxy equals lose, display losing emoji.
  } else if (galaxy === lose) {
    document.getElementById(galaxy).innerHTML = "👾🔥💀"
    //  Set delay so emojis show before alert.
    setTimeout(() => {
    alert("You are dead. You lose.");
    }, 500)
    //  Else make tile do nothing or stay the same.
  } else {
    document.getElementById(galaxy).innerHTML = "🌟 Continue searching..."
  }
}
//setTimeout(() => {  console.log("World!"); }, 5000)
