// Manuel Quintana Miño DIV D Grupo 2 


function mostrar()
{
	let edad1;
	let edad2;
	let edad3;

	edad1 = prompt("ingrese la edad")
	edad1 = parseInt(edad1)

	edad2 = prompt("ingrese la segunda edad")
	edad2 = parseInt(edad2)

	edad3 = prompt("ingrese la tercera edad")
	edad3 = parseInt(edad3)

	if (edad1 > edad2 && edad1 < edad3)
	 {
		alert("Edad 1 mayor que edad 2 y edad 1 menor que edad 3")
	}

	else {

		if (edad3 < edad2) {
			alert("la edad tres es menor que la segunda")
		}

		else {alert("no se cumple la condicion")}
	}




}//FIN DE LA FUNCIÓN


/*	Forma mas eficiente

	let edad1;
	let edad2;
	let edad3;

	edad1 = prompt("ingrese la edad")
	edad1 = parseInt(edad1)

	edad2 = prompt("ingrese la segunda edad")
	edad2 = parseInt(edad2)

	edad3 = prompt("ingrese la tercera edad")
	edad3 = parseInt(edad3)

	if (edad1 > edad2 && edad1 < edad3)
	 {
		alert("la primer edad ingresada es mayor que la segunda y menor que la tercera")
	}

	else if (edad3 < edad2)
	 {
	 	alert("la tercer edad ingresada es menor que la segunda")
	 }

	 else if (edad1 < edad2 && edad1 < edad3) {
	 	alert("la primer edad ingresada es menor que la segunda y la tercera")
	 }

*/