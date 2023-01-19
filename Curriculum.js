
//funciones genéricas.

function ocultar(idE){
document.getElementById(idE).style.display = "none";
}

function mostrar(){
document.getElementById(idE).style.display = "block";
}

function mostrarOcultar(idE) {
	if (document.getElementById(idE).style.display === "none"){
		document.getElementById(idE).style.display = "block";
	}else{
		document.getElementById(idE).style.display = "none";
	}
}

//ocultar o mostrar elemento sobre mí.

document.getElementById("btsobremí").onclick = function() {
	mostrarOcultar("SobreMí");
}

//ocultar o mostrar elementos contenido por los demás botones.

document.getElementById("btFormaciónAcadémica").onclick = function() {
	mostrarOcultar("FormaciónAcadémica");
}

document.getElementById("btCursos").onclick = function() {
	mostrarOcultar("Cursos");
}

document.getElementById("btHerramientas").onclick = function() {
	mostrarOcultar("Herramientas");
}

document.getElementById("btDestreza").onclick = function() {
	mostrarOcultar("Destreza");
}

document.getElementById("btExperienciaLaboral").onclick = function() {
	mostrarOcultar("ExperienciaLaboral");
}