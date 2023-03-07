function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let personaMasTemperatura;
	let seguir;
	let maximo;
	let contadorTemp;
	let contadorViudosMayores;
	let contadorHombresSoltOViud;
	let contadorViejos;
	let contadorHombresSolteros;
	let acumuladorEdadSolteros;
	let promedio;

	seguir = true;
	contadorTemp = 0;
	contadorViudosMayores = 0;
	contadorHombresSoltOViud = 0;
	contadorViejos = 0;
	contadorHombresSolteros = 0;
	acumuladorEdadSolteros = 0;

	while(seguir == true)
	{
		nombre = prompt("Ingrese su nombre");

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while(!(edad > 0 && edad < 100))
		{	
			edad = prompt("Ingrese una edad valida");
			edad = parseInt(edad);		
		}

		sexo = prompt("Ingrese su sexo: f / m");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese su sexo correctamente f / m");	
		}

		estadoCivil = prompt("Ingrese su estado civil: soltero / casado / viudo")
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Ingrese su estado civil: soltero / casado / viudo");
		}

		temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);

		seguir = confirm("desea seguir?");

		if (temperaturaCorporal > maximo || contadorTemp == 0) 
		{
			maximo = temperaturaCorporal;
			personaMasTemperatura = nombre;
			contadorTemp++;
		}
		if (edad > 17 && estadoCivil == "viudo") 
		{
			contadorViudosMayores++;
		}
		if (sexo == "m" && (estadoCivil == "viudo" || estadoCivil == "soltero"))
		{
			contadorHombresSoltOViud++;
		}
		
		if (edad > 59 && temperaturaCorporal > 38) 
		{
			contadorViejos++;
		}

		if (sexo == "m" && estadoCivil == "soltero") 
		{
			contadorHombresSolteros++;
			acumuladorEdadSolteros = edad + acumuladorEdadSolteros;
		}
	}

	promedio = acumuladorEdadSolteros / contadorHombresSolteros;

	document.write(`La persona con mas temperatura es ${personaMasTemperatura} con ${maximo} 
	grados de temperatura <br>`);
	if (contadorViudosMayores == 0) 
	{
		document.write(`No hay viudos mayores de edad <br>`);
	}
	else
	{
		document.write(`Hay ${contadorViudosMayores} mayores de edad que estan viudos <br>`);
	}
	
	if (contadorHombresSoltOViud == 0) 
	{
		document.write("No hay hombres solteros o viudos <br>" );
	}
	else
	{
		document.write(`Hay una cantidad de ${contadorHombresSoltOViud} hombres solteros o viudos <br>`);
	}
	
	if (contadorViejos == 0) 
	{
		document.write("No hay hombres de tercera edad con mas de 38 grados de temperatura <br>");
	}
	else
	{
		document.write(`Hay una cantidad de personas de tercera edad igual a ${contadorViejos} <br>`);
	}
	if(contadorHombresSolteros == 0)
	{
		document.write("No hay hombres solteros");
	}
	else
	{
		document.write(`El promedio de los hombres solteros es de ${promedio} años de edad`)
	}

}
