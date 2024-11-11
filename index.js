//PREGUNTA Y RESPUESTA

boton1.onclickfunction () {
    alert('Respuesta Incorrecta')
}

boton2.onclickfunction (){
    alert('Respuesta Correcta!')
}

boton3.onclickfunction (){
    alert('Respuesta Incorrecta')
}

//Muestra el nombre de las peliculas favoritas del usuario, ingresados en el input
let nombres = [];
    let inputNombre = document.querySelector("nombreInput");
    let botonIngresar = document.querySelector("botonIngresar");
    
    botonIngresar.clickfunction (){
      let nombre = inputNombre.value;
      nombres.push(nombre);
      alert("¡Wow, qué maravilla! Has ingresado los siguientes nombres: " + nombres);
      inputNombre.value = "";
    }