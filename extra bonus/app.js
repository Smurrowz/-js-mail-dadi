// creo l'array recipiente

const userArray = []

const button = document.getElementById('submitbutton')
const userNumber = document.getElementById('number')



button.addEventListener('click',
function(){
  console.log(userNumber.value)
  
  for (i = 0; i < userNumber.value; i++){
   let randomNumber = Math.floor(Math.random() * 10000)
   userArray.push(randomNumber) 
  }
  console.log(userArray)
}
)