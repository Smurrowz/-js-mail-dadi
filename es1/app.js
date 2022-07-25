/* creo un array di mail riconosciute */

const emails = ["crash@gmail.com", "spyro@gmail.com", "medievil@gmail.com", "metalgearsolid@gmail.com", "tekken@gmail.com", "fifa@gmail.com", "pes@gmail.com", "nba@gmail.com"]
console.log(emails)

// prendo le mail dal submit

const buttonSubmit = document.getElementById('submit')
console.log(buttonSubmit)

let validMail = false


buttonSubmit.addEventListener('click',
  function () {
    const userEmail = document.getElementById('email').value;
    console.log(userEmail)

    // creo il ciclo per checkare le mail
    for(let i = 0; i < emails.length; i++){
      if(userEmail === emails[i] ){
        console.log('mail riconosciuta')
        validMail = true
      }
    }
    
    if(validMail){
      alert("accesso consentito")
      location.reload();
      
    }else{
      alert("la tua mail non fa parte del nostro database")
      location.reload();
    }
   
  }
)
