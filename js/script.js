/*Esto es el javaScript del evento del formulario para iniciar sesión*/

const modal = document.getElementById("cajaForm");      /*recoger el objeto que es el div del formulario*/
const modalCierre = document.getElementById("cierre");  /*constantes pq esto no cambia nunca*/

setTimeout(                                             /*lo que tarda en salir el formulario*/
    () => {
        modal.style.display = "block";                  /*se cambia el css*/
    }, 2000
);


modalCierre.addEventListener(                           /*añado un evento al botón de cerrar el formulario*/
    "click",                                            /*tipo de evento (hacer click)*/
    () => {                                             /*lambda:crea una función dentro de un evento*/
        modal.style.display = "none";
    }
);

function iniciarSes(){                                          /*creo una función para verificar que se rellenan los campos de usuario y contraseña*/
    let usuario= document.getElementById("nombreUsu").value;    /*let es crear una variable*/
    let contra=document.getElementById("contra").value;

    if(usuario.length!=0&&contra.length!=0){                    /*un if de comprobación como en java tmaño de un string*/
        modal.style.display="none";
    }
}
