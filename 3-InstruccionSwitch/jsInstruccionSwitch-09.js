//Manuel Quintana Miño DIV D Grupo 2
function mostrar()
{
	
	let destino;
	let estacion;
	let precioFinal;
	const PRECIO = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
	case "Invierno":
		if (destino == "Bariloche") 
		{
			precioFinal = PRECIO * 1.20;
			alert(`El precio del viaje es de ${precioFinal}`);
		}
		else
		{
			if (destino == "Cataratas" || destino == "Cordoba") 
			{
				precioFinal = PRECIO * 0.90;
				alert(`El precio del viaje es de ${precioFinal}`);
			}
			else if (destino == "Mar del plata") 
			{
				precioFinal = PRECIO * 0.80;
				alert(`El precio del viaje es de ${precioFinal}`);
			}
		}
		break;

	case "Verano":
		if (destino == "Bariloche") 
		{
			precioFinal = PRECIO * 0.80;
			alert(`El precio del viaje es de ${precioFinal}`);
		}
		else
		{
			if (destino == "Cataratas" || destino == "Cordoba") 
			{
				precioFinal = PRECIO * 1.10;
				alert(`El precio del viaje es de ${precioFinal}`);
			}
			else if (destino == "Mar del plata") 
			{
				precioFinal = PRECIO * 1.20;
				alert(`El precio del viaje es de ${precioFinal}`);
			}
		}
		break;
	
	case "Otoño":
	case "Primavera":

		if (destino == "Bariloche" || destino == "Cataratas" ||  destino == "Mar del plata") 
		{	
			precioFinal = PRECIO * 1.10;
			alert(`El precio del viaje es de ${precioFinal}`)
		}

			else
			{
				precioFinal = PRECIO;
				alert(`El precio del viaje es de ${precioFinal}`)
			}

			break;
	}



}//FIN DE LA FUNCIÓN