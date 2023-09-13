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







