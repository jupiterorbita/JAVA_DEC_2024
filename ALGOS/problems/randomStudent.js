const arr = [
  "Austin", "Binyam", "Dennis", "Jesse", "Vitoria", "Ziad"
]
arr.sort(() => (Math.random() > .5) ? 1 : -1)
const rand = Math.floor(Math.random()*arr.length)

console.log(arr[rand])

//Austin
//Binyam 
//Dennis
//Jesse
//Vitoria
//Ziad