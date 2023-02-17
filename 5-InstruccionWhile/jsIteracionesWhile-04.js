/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = prompt("Ingrese un numero entre 0 y 9");
	numero = parseInt(numero);

	while(numero < 0 || numero > 10)
	{
		numero = prompt("ingrese un numero entre 0 y 9");
		numero = parseInt(numero);
	}

	document.getElementById("txtIdNumero").value = numero;
	
}//FIN DE LA FUNCIÓN