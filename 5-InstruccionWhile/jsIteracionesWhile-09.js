/*Manuel Quintana Miño DIV D Grupo 2
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let banderaDelPrimero = false;
	let seguir = true;
	let numeroIngresado;
	let maximo;
	let minimo;

	while(seguir == true)
	{
		numeroIngresado = prompt("Ingese un numero");
		numeroIngresado = parseInt(numeroIngresado);	

		if (banderaDelPrimero == false) 
		{
			 maximo = numeroIngresado;
			 minimo = numeroIngresado;
			banderaDelPrimero = true;
		}
		else
		{
			if (numeroIngresado > maximo) 
			{
				maximo = numeroIngresado;
			}
			else
			{
				if (numeroIngresado < minimo) 
				{
					minimo = numeroIngresado;
				}
				
			}
		}
		seguir = confirm("Desea seguir?")
	}
	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}
//FIN DE LA FUNCIÓN