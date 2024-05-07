//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}

//validar formulario
window.addEventListener("load",Inicio);

function Inicio() {
	// valido al pulsar en añadir cliente
	var bsubmit = document.querySelector("#contacto");
	bsubmit.addEventListener("click",ValidarFormulario);

	// valido en tiempo real cuando entro/salgo de cada campo
	var nombre = document.querySelector("#nombre");
	nombre.addEventListener("blur",ValidarNombre);

	var email = document.querySelector("#email");
	email.addEventListener("blur",ValidarEmail);

	var asunto = document.querySelector("input[name='asunto']");
	asunto.addEventListener("blur",ValidarAsunto);

    var mensaje = document.querySelector("#mensaje");
	mensaje.addEventListener("blur",ValidarMensaje);


}

function ValidarNombre () {
	if (this.value.trim() == "") {
		this.className="form-control error-input"; 
		this.nextSibling.innerHTML="¡Atención! El nombre no puede quedar vacío";
		this.nextSibling.className="error";
        return false;
	} else if (this.value.trim().length > 20) { 
		this.className="form-control error-input"; 
		this.nextSibling.innerHTML="¡Atención! El nombre no puede superar los 20 carácteres";
		this.nextSibling.className="error";
        return false;
	} else {
		this.className="form-control";
		this.nextSibling.innerHTML="El nombre es válido";
		this.nextSibling.className="ok";
        return true;
	}
}

function ValidarEmail() {
	if (this.value.trim() == "") {
		this.className="form-control error-input"; 
		this.nextSibling.innerHTML="¡Atención! El nombre no puede quedar vacío";
		this.nextSibling.className="error";
      return false;
	} else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		this.className="form-control";
		this.nextSibling.innerHTML="El email es válido";
		this.nextSibling.className="ok";
        return true;
	}
}

function ValidarAsunto() {
    var seleccionado = false;
    for(var i=0; i<asunto.length; i++){
        if(asunto[i].checked) {
            this.className="form-control";
		    this.nextSibling.innerHTML="El asunto es válido";
		    this.nextSibling.className="ok";
            seleccionado = true;
            return true;
            break;
        }
    } 
    if (!seleccionado) {
		this.className="form-control error-input";
		this.nextSibling.innerHTML="¡Atención! El asunto no puede quedar vacío";
		this.nextSibling.className="error";
        return false;
    }
}

function ValidarMensaje() {
	if (this.value.trim() == "") {
		this.className="form-control error-input";
		this.nextSibling.innerHTML="¡Atención! El mensaje no puede quedar vacío";
		this.nextSibling.className="error";
        return false;
	} else if (this.value.trim().length > 50) { 
		this.className="form-control error-input"; 
		this.nextSibling.innerHTML="¡Atención! El mensaje no puede superar los 250 caracteres";
		this.nextSibling.className="error";
        return false;
	} else {
		this.className="form-control";
		this.nextSibling.innerHTML="El mensaje es válido";
		this.nextSibling.className="ok";
        return true;
	}
}


function ValidarFormulario(event) {
    if (ValidarNombre() && ValidarEmail() && ValidarAsunto() && ValidarMensaje() && confirm ("¿Confirma enviar el formulario?")) {
        return true;
    }    
    
	var nombre = document.querySelector("#nombre");
	var email = document.querySelector("#email");
	var asunto = document.querySelector("#asunto");
  var mensaje = document.querySelector("#mensaje");

    if (nombre.value.trim() == 0) {
		alert("El nombre no puede quedar vacío");
		event.preventDefault();
	} else if (nombre.value.trim().length > 20) {
		alert("El nombre no puede superar los 20 caracteres");
		event.preventDefault();
	}

    if (email.value.trim() == "") {
		alert("El La email no puede quedar vacío");
		event.preventDefault();
	} else if (email.value.trim().length > 30 ) {
      alert("El email es superior a los 30 caracteres");
      event.preventDefault();
    }
    if (asunto.value.trim() == 0) {
      alert("El asunto no puede quedar vacío");
      event.preventDefault();
    } else if (asunto.value.trim().length > 20) {
      alert("El nombre no puede superar los 20 caracteres");
      event.preventDefault();
    }

    if (mensaje.value.trim() == 0) {
        alert("El mensaje no puede quedar vacío");
        event.preventDefault();
        } else if (mensaje.value.trim().length > 250) {
            alert("El mensaje no puede superar los 250 caracteres");
            event.preventDefault();
        }
    return false;
}
