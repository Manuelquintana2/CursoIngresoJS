function mostrar()
{
	let promedio;
	let numeros;
	let acumulador = 0;
	let i = 0;

	while(i < 5)
	{
		numeros = prompt("Ingrese numeros");
		numeros = parseInt(numeros);
		acumulador = acumulador + numeros;
		i++ 

	}
	promedio = acumulador / 5;
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
		
	
}//FIN DE LA FUNCIÓN