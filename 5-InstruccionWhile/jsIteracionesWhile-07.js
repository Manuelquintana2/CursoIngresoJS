/*Manuel Quintana Miño DIV D Grupo 2
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let seguir;
	let numeros;
	let contador = 0;
	let promedio;

	do
	{	
		numeros = prompt("Ingrese un numero");
		numeros = parseInt(numeros);
		seguir = prompt("quiere seguir sumando numeros?");
		suma = suma + numeros;
		contador = contador + 1;

	}while(seguir == "si"); 

	promedio = suma / contador;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN