/*
Ejercicio 2:

Apellido:Quintana Miño
Nombre: Manuel
Comisión: D
Tutor: Renato

"El gimnasio ""Te pago la cuota pa no ir"",  quiere medir el progreso de sus clientes y
saber quien es el más fuerte.
Debemos pedirle al cliente:
Nombre
Edad(debe ser mayor a 12)
Peso(No debe ser negativo)
Género(masculino, femenino, otro)
Peso levantado en press de banca(No debe ser negativo)
Peso levantado en sentadilla(No debe ser negativo)
No sabemos cuántos clientes entran durante el día.
Se debe informar al usuario:
A) El promedio de peso levantado en sentadilla.
B) El porcentaje de clientes por género
C) El nombre y peso de la persona de género masculino que tiene el mayor peso levantado  en press de banca 
D) El genero que mas peso ha levantado en total realizando sentadillas"

*/

function mostrar()
{
	let nombre;
	let edad;
	let peso;
	let genero;
	let pesoPressPecho;
	let pesoSentadilla;
	let seguir;
	let contador;
	let acumuladorPesoSentadilla;
	let promedioSentadilla;
	let contadorHombres;
	let contadorMujeres;
	let contadorOtros;
	let totalGenero;
	let porcentajeHombres;
	let porcentajeMujeres;
	let porcentajeOtros;
	let maximo;
	let clienteMasFuerte;
	let pesoCorporal;
	let acumuladorPesoSentadillaHombres;
	let acumuladorPesoSentadillaMujeres;
	let acumuladorPesoSentadillaOtros;
	let generoMasSentadilla;

	contador = 0;
	acumuladorPesoSentadilla = 0;
	contadorHombres = 0;
	contadorMujeres = 0;
	contadorOtros = 0;
	acumuladorPesoSentadillaHombres = 0;
	acumuladorPesoSentadillaMujeres = 0;
	acumuladorPesoSentadillaOtros = 0;

	do
	{
		nombre = prompt("Ingrese su nombre");
		while(!isNaN(nombre))
		{
			nombre = prompt("Ingrese su nombre");
		}

		edad = prompt("Ingrese su edad, debe ser mayor a 12");
		edad = parseInt(edad);
		while(isNaN(edad) || (edad < 12))
		{
			edad = prompt("Ingrese su edad, debe ser mayor a 12");
			edad = parseInt(edad);
		}

		peso = prompt("Ingrese su peso");
		peso = parseInt(peso);
		while(isNaN(peso) || (peso < 0))
		{
			peso = prompt("Ingrese su peso mayor a 0");
			peso = parseInt(peso);
		}

		genero = prompt("ingrese su genero: Masculino / Femenino / Otro").toLowerCase();
		while(!isNaN(genero) || (genero != "masculino" && genero != "femenino" && genero != "otro"))
		{
			genero = prompt("ingrese su genero: Masculino / Femenino / Otro").toLowerCase();
		}

		pesoPressPecho = prompt("Cuanto peso levanta en press de banca?");
		pesoPressPecho = parseInt(pesoPressPecho);
		while(isNaN(pesoPressPecho) || (pesoPressPecho > 280))
		{
			pesoPressPecho = prompt("Cuanto peso levanta en press de banca? Esta vez sin mentir");
			pesoPressPecho = parseInt(pesoPressPecho);	
		}

		pesoSentadilla = prompt("Cuanto peso levanta en sentadilla?");
		pesoSentadilla = parseInt(pesoSentadilla);
		while(isNaN(pesoSentadilla) || (pesoSentadilla > 400))
		{
			pesoSentadilla = prompt("Cuanto peso levanta en sentadilla? no vale mentir");
			pesoSentadilla = parseInt(pesoSentadilla);
		}

		contador++;

		acumuladorPesoSentadilla = pesoSentadilla + acumuladorPesoSentadilla;

		seguir = confirm("Desea seguir?");

		switch(genero)
		{
		case "masculino":
			contadorHombres++;
			acumuladorPesoSentadillaHombres = pesoSentadilla + acumuladorPesoSentadillaHombres;
			break;

		case "femenino":
			contadorMujeres++;
			acumuladorPesoSentadillaMujeres = pesoSentadilla + acumuladorPesoSentadillaMujeres;
			break;

		case "otro":
			contadorOtros++;
			acumuladorPesoSentadillaOtros = pesoSentadilla + acumuladorPesoSentadillaOtros;
			break;
		}

		if (pesoPressPecho > maximo || contador == 1) 
		{
			maximo = pesoPressPecho;
			clienteMasFuerte = nombre;
			pesoCorporal = peso;
		}

	}while(seguir);

	if (acumuladorPesoSentadillaHombres > acumuladorPesoSentadillaMujeres && acumuladorPesoSentadillaHombres > acumuladorPesoSentadillaOtros)
	{
		generoMasSentadilla = "hombres";
	}
	else
	{
		if (acumuladorPesoSentadillaMujeres > acumuladorPesoSentadillaOtros) 
		{
			generoMasSentadilla = "mujeres";
		}
		else
		{
			generoMasSentadilla = "otros";
		}
	}
	promedioSentadilla = acumuladorPesoSentadilla / contador;

	totalGenero = contadorHombres + contadorMujeres + contadorOtros;

	porcentajeHombres = contadorHombres / totalGenero * 100;
	porcentajeMujeres = contadorMujeres / totalGenero * 100;
	porcentajeOtros = contadorOtros / totalGenero * 100;



	document.write(`El promedio levantado en sentadilla es de ${promedioSentadilla} <br>`);
	document.write(`El porcentaje de hombres es de un ${porcentajeHombres}% <br>
	El porcentaje de las mujeres es de un ${porcentajeMujeres}% <br>
	Y el porcentaje de otros es de un ${porcentajeOtros}% <br>`);
	document.write(`El nombre del cliente que mas levanta en press banca es ${clienteMasFuerte}
	y su peso corporal es de ${pesoCorporal}kg <br>`);
	document.write(`El genero que mas levanta en sentadilla en total son ${generoMasSentadilla}`);






}//FIN DE LA FUNCIÓN