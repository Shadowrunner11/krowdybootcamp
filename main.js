let username = prompt("Bienvenido a shadowreturns adventure text \nIngresa tu nombre")?.trim()

validateUsername()

alert("Bienvenido " + username)

function showPrincipalMenu(){
  while(true){
    const intialMenu = "  Menu \n" + "1. Cambiar tu nombre\n" + "2. Iniciar juego\n"
    
    let userChoice = prompt(intialMenu)
    
    switch (userChoice) {
      case "1":
        username = prompt("Coloca tu nuevo nombre de usuario")?.trim()
        validateUsername()
        return 
      case "2":
        alert("Aun no tenemos implementado")
        return 
      default:
        alert("No es una opcion valida intentelo nuevamente")
    }
  }
}

showPrincipalMenu()


// funcion impura
function validateUsername(){
  while(!username){
    username = prompt("No es un nombre valido, intentalo nuevamente")?.trim()
  }
}


// TODO: Implementar el siguiente menu si el usuario coloca empezar juego
// TODO: Opcional, refactorizar el bucle con etiqueta 
// TODO: Avanzado, refactorizar con OOP o con AOP


