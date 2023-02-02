/* Quintana Miño Manuel DIV D grupo 2
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	

	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById("txtIdNumeroUno").value;

	num2 = document.getElementById("txtIdNumeroDos").value;


	num1 = parseInt(num1);

	num2 = parseInt(num2);

	resultado = num1 + num2;

	alert("la suma es " + resultado);
}

