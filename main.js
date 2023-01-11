let username = prompt("Bienvenido a shadowreturns adventure text \nIngresa tu nombre")?.trim()

validateUsername()

alert("Bienvenido " + username)


menu:
while(true){
  const intialMenu = "  Menu \n" + "1. Cambiar tu nombre\n" + "2. Iniciar juego\n"
  
  let userChoice = prompt(intialMenu)
  
  switch (userChoice) {
    case "1":
      username = prompt("Coloca tu nuevo nombre de usuario")?.trim()
      validateUsername()
      break menu
    case "2":
      alert("Aun no tenemos implementado")
      break menu
    default:
      alert("No es una opcion valida intentelo nuevamente")
  }

}

// funcion impura
function validateUsername(){
  while(!username){
    username = prompt("No es un nombre valido, intentalo nuevamente")?.trim()
  }
}




