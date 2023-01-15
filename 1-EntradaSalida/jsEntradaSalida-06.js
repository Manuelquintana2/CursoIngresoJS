/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	
	//let x = "20";

	//x = parseInt(x);












	//asigno variables

	let num1;
	let num2;
	let resultado;



	//le doy valor a las variables con los numeros que eligan los usuarios

	num1 = document.getElementById("txtIdNumeroUno").value;

	num2 = document.getElementById("txtIdNumeroDos").value;

	

	//como son de tipo string, las transformo a tipo number con parseInt

	num1 = parseInt(num1);

	num2 = parseInt(num2);


	//sumo la variable num1 y la variable num2 en la variable resultado

	resultado = num1 + num2;


	//muestro resultado en alert sumado a una cadena de string

	alert("la suma es " + resultado);
}

