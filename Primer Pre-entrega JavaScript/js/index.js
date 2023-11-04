
function precioServicio(numero){
    switch(numero) {
        case 1:
            alert("El servicio de esmaltado semipermanente tiene un valor de $3000")
            break
        case 2:
            alert("el servicio de kapping tiene un valor de $4000")
            break
        case 3:
            alert("el servicio de soft gel tiene un valor de $5500")
            break 
        case 4:
            alert("el servicio de esculpidas tiene un valor de $7500")
        default:
            alert("No encontramos lo que buscabas... contactanos")
    }
}

function infoServicios() {
     let numeroServicio = prompt("Ingresa el numero se servicio")
    
     if (numeroServicio !== '' && numeroServicio !== null) {
        precioServicio(parseInt(numeroServicio))
     } else{
        console.warn("Ingresaste un numero de servicio incorrecto")
     }
}


//Algoritmo con ciclo de iteracion

 function infoServicios() {
    let preguntar = true

    while(preguntar){
        let numeroServicio = prompt("Ingresa el numero se servicio")
    
        if (numeroServicio !== '' && numeroServicio !== null) {
           precioServicio(parseInt(numeroServicio))
        } else{
           console.warn("Ingresaste un numero de servicio incorrecto")
        }
        preguntar = confirm("¿Deseas saber el precio de otro servicio?")

    }
 }