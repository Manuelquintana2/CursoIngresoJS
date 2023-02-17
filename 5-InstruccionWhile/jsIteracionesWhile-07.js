/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let seguir;
	let numeros;
	let suma = 0;
	let promedio;
	let veces = 0;

	do
	{	
		numeros = prompt("Ingrese un numero");
		numeros = parseInt(numeros);
		seguir = prompt("quiere seguir sumando numeros?");
		suma = suma + numeros;
		veces = veces + 1;

	}while(seguir == "si"); 


	promedio = suma / veces;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN