// creo l'array

const gruppo = ["Nigel","Remo","Alberto","Jacopo","Maria","Giovanni","Danilo","Valerio"]
console.log(gruppo)

const lastMembers = document.getElementById('lastmembers')
const membersFive = []

for ( let i = 0; i < gruppo.length; i++){
  const member = gruppo[i]

  if(member === gruppo[gruppo.length - 5]){
    console.log(member + ' é il quintultimo membro del gruppo')
    membersFive.push(member)
    
  } else if(member === gruppo[gruppo.length - 4]){
    console.log(member + ' é il quartultimo membro del gruppo')
    membersFive.push(member)
    
  } else if(member === gruppo[gruppo.length - 3]){
    console.log(member + ' é il terzultimo membro recenti del gruppo')
    membersFive.push(member)
  } else if(member === gruppo[gruppo.length - 2]){
    console.log(member + ' é il penultimo membro del gruppo')
    membersFive.push(member)
  } else if(member === gruppo[gruppo.length - 1]){
    console.log(member + ' é l ultimo membro gruppo')
    membersFive.push(member)
  }
}

console.log(membersFive)
lastMembers.innerHTML = membersFive