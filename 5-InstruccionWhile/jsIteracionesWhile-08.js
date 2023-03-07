/*Manuel Quintana Miño DIV D Grupo 2
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador = 0;
	let seguir;
	let numeroIngresado;
	let sumaDePositivos = 0;
	let multiplicacionNegativos = 1;

	do
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado > 0) 
		{
			sumaDePositivos = sumaDePositivos + numeroIngresado; 
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

	seguir = confirm("Quiere seguir poniendo numeros?");

	}while(seguir == true);

	document.getElementById("txtIdSuma").value = sumaDePositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;



	
	




}//FIN DE LA FUNCIÓN
/*sumaPositivos = prompt("Ingrese un numero positivo");
		sumaPositivos = parseInt(sumaPositivos);
		acumulador1 = acumulador1 + sumaPositivos;

		multiplicacionNegativos = prompt("Ingrese un numero negativo");
		multiplicacionNegativos = parseInt(multiplicacionNegativos);
		acumulador2 = acumulador2 * multiplicacionNegativos;

		seguir = prompt("Quiere seguir poniendo numeros? si/no")
		contador++;*/