let control=0
while( control==0){
    const fechanacimiento = prompt("ingrese su año denacimiento")

    if (fechanacimiento >= 2023){
        alert("la fecha ingresada no es correcta")
    }else if (fechanacimiento>2005 ) {
      alert("usted es menor de edad para ingrsar")
      control =prompt("si quiere verificar su dato presione 0 si no 1" )
    } else {
      alert("usted es mayor de edad")
      const nombre = prompt("ingrese su nombre")
        saludar(nombre)
        
        repetirOper = 0
        while(repetirOper==0){
            const operacion= prompt("selecciones la operacion que desea: suma=1, resta=2, multiplicacion=3, division=4, promedio=5")
            operation(operacion)
            repetirOper = prompt("si quiere realizar otra operacion presione 0 si no 1" )
        }

      break
    }

}

function saludar (nombre){
    alert("hola " + nombre + ", bienvenido ")
}

function operation(operacion){
    let k=0
    let i=1
    let n=0
    let contador= 0
    
    switch(operacion) {
        case "1":
            alert("a continuacion ingrese un numero para empezar la operacion, se le mostrara la suma parcial y despues podra ingresar otro numero para ir sumando, si desea terminar la operacion ingrese cero")
          while(i != 0){
                 numero = parseFloat(prompt("ingrese un numero"))
                 i= numero
                 n= numero + n
                alert("resultado: " + n)
          }
          break;
        case "2":
            alert("a continuacion ingrese un numero para empezar la operacion, se le mostrara la resta parcial y despues podra ingresar otro numero para ir sumando, si desea terminar la operacion ingrese cero") 
          while(i != 0){
                 numero = parseFloat(prompt("ingrese un numero"))
                if (k==0){
                    k=1
                    n=numero
                }else{
                 i= numero
                 n= n - numero
                }
                alert("resultado: " + n)
          }
          break;
          case "3":
            alert("a continuacion ingrese un numero para empezar la operacion, se le mostrara la multiplicacion parcial y despues podra ingresar otro numero para ir sumando, si desea terminar la operacion ingrese cero")
            while(i != 0){
                   numero = parseFloat(prompt("ingrese un numero"))
                  if (k==0){
                      k=1
                      n=numero
                  }else{
                   i= numero
                   n= n * numero
                  }
                  alert("resultado: " + n)
            }
          break;
          case "4":
            alert("a continuacion ingrese un numero para empezar la operacion, se le mostrara la division parcial y despues podra ingresar otro numero para ir sumando, si desea terminar la operacion ingrese cero")
            while(i != 0){
                numero = parseFloat(prompt("ingrese un numero"))
               if (k==0){
                   k=1
                   n=numero
               }else{
                i= numero
                n= n / numero
               }
               alert("resultado: " + n)
         }
          break;
          case "5":
            alert("a continuacion ingrese un numero para empezar la operacion, al ternimar ingrese t")
        let m=0
         do{
            numero =prompt("ingrese un numero")
               if (numero=="t"){
                   let promedio = n/contador
                   alert("el promedio es: " + promedio)
                   break
               }else{
                numero=parseFloat(numero)
                contador ++
                n= numero + n 
                alert("suma: "+ n + "contador" + contador)}
        }while(m==0)
          break;
        default:
          alert("la opcion seleccionada no coresponde a ninguna operacion")
      }
}
