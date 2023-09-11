
// let img = document.querySelector('.img')
// document.querySelector('button').addEventListener("click", clicked)

// function clicked(){
//     console.log('click!!!')
// }

// fetch ("https://dog.ceo/api/breeds/image/random")
// .then(responce => responce.json())
// .then(data => {
//     img.innerHTML = `
//     <img src='${data.message}' 
//     width="300px" 
//     alt = "dog"/>`})


let phraze = document.querySelector('.advice')
let btn = document.querySelector('button').addEventListener("click", getAdvice)


function getAdvice(){
  fetch('https://www.boredapi.com/api/activity')
.then(responce => responce.json())
.then(data => {
    console.log(data)
    phraze.textContent = data.activity}
)
  }





