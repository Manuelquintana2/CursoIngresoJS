/******************************************************************************
Ejercicio 1

De los 50 participantes del torneo de TETRIS, se deben ingresar los datos de acuerdo a 
lo siguiente:
Nombre
Genero (“F”, “M”, "X")
Edad (validar de manera coherente)
Score (validar de manera coherente)
Informar:
a) La cantidad de participantes mayores de edad.
b) El promedio de edad de todos los participantes femeninos.
c) El nombre del participante (cualquiera sea el genero) con mejor score.
Pedir datos por prompt y mostrar la información por document.write.



*******************************************************************************/
function mostrar()
{
	let nombre;
	let genero;
	let edad;
	let score;
	let contador;
	let contadorEdad;
	let acumuladorEdadF;
	let contadorEdadF;
	let promedio;
	let maximo;
	let mejorJugador;

	contador = 0;
	contadorEdad = 0;
	acumuladorEdadF = 0;
	contadorEdadF = 0;

	do
	{	
		nombre = prompt("Ingrese su nombre");
		while(!isNaN(nombre))
		{
			nombre = prompt("Ingrese su nombre");
		}

		genero = prompt("Ingrese su genero?").toLowerCase();
		while(!isNaN(genero) || (genero != "f" && genero != "m" && genero != "x"))
		{
			genero = prompt("Ingrese su genero?").toLowerCase();
		}

		edad = prompt("Ingrese su edad: Mayor a 10 y menor a 85");
		edad = parseInt(edad);
		while(isNaN(edad) || (edad < 10 || edad > 85))
		{	
			alert("No puede ingresar al torneo con esa edad, ingrese otra")
			edad = prompt("Ingrese su edad: Mayor a 10 y menor a 85");
			edad = parseInt(edad);
		}

		score = prompt("Ingrese su score");
		score = parseInt(score);
		while(isNaN(score) || (score < 0))
		{
			score = prompt("Ingrese un score valido");
			score = parseInt(score);
		}

		if (edad > 17) 
		{
			contadorEdad++;
		}

		if (genero == "f") 
		{
			acumuladorEdadF = edad + acumuladorEdadF;
			contadorEdadF++
		}

		if (score > maximo || contador == 0) 
		{
			maximo = score
			mejorJugador = nombre;
		}


		contador++
	}while(contador < 4)

	promedio = acumuladorEdadF / contadorEdadF;

	document.write(`La cantidad de participantes mayores de edad es de ${contadorEdad} 
	mayores <br>`);
	document.write(`El promedio de edad de las mujeres es de ${promedio} años <br>`);
	document.write(`El mejor mejor jugador es ${mejorJugador} con un score de ${maximo} <br>`)



}

