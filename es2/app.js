// dal click del pulsante rollo i dadi

const diceroller = document.getElementById('diceroller')
console.log(diceroller)

diceroller.addEventListener('click',
  function () {
   const userRoll = Math.floor(Math.random() * 6) + 1;
   const computerRoll = Math.floor(Math.random() * 6) + 1;
   console.log(userRoll, computerRoll)
   document.getElementById('score').innerHTML=  + userRoll + "-" + computerRoll
   
   
   if(userRoll > computerRoll){
     document.getElementById('result').innerHTML = 'HAI VINTO!'
   }else if(userRoll < computerRoll){
     document.getElementById('result').innerHTML = 'HAI PERSO'
   }else{
     document.getElementById('result').innerHTML = 'PAREGGIO'
   
   }


  }
)

