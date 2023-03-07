/******************************************************************************
Ejercicio 2

Una casa de computación debe realizar el ingreso de los datos de los productos 
que tiene a la venta, de acuerdo al 
siguiente detalle:
PC (“DESKTOP” o “LAPTOP”)
Marca (“DELL”, “HP”, “ACER”)
Modelo
Precio (No puede ser menor a 100.000 pesos)
Informar:
a) El precio de la PC más barata.
b) La cantidad total de PC marca HP del tipo DESKTOP.
c) El promedio del precio de las PC marca ACER.
d) Porcentaje de computadoras de cada marca.
e) De las computadoras DESKTOP de marca DELL, el modelo de la mas cara.
Pedir datos por prompt y mostrar la información por document.write.


*******************************************************************************/
function mostrar()
{	

	let tipoDePc;
	let marca;
	let modelo;
	let precio;
	let precioBarata;
	let pcMasBarata;
	let minimo;
	let maximo;
	let contadorPcBarata;
	let contadorMarcaHptipoDesktop;
	let promedioAcer;
	let contadorAcer;
	let acumuladorPrecioAcer;
	let porcentajeAcer;
	let porcentajeDell;
	let porcentajeHp;
	let pcDesktopDellMasCara;
	let confirmar;
	let contadorDell;
	let contadorHp;
	let totalMarcas;
	let contadorDellCara;
	let modeloMasCaro;

	contadorMarcaHptipoDesktop = 0;
	contadorPcBarata = 0;
	contadorAcer = 0;
	acumuladorPrecioAcer = 0;
	contadorDell = 0;
	contadorHp = 0;
	contadorDellCara = 0;

	do
	{	
		tipoDePc = prompt("Ingrese el tipo de pc: Desktop o Laptop?").toLowerCase();
		while(!isNaN(tipoDePc) || (tipoDePc != "desktop" && tipoDePc != "laptop"))
		{
			tipoDePc = prompt("Ingrese el tipo de pc: Desktop o Laptop?").toLowerCase();
		}

		marca = prompt("Ingrese una marca: Dell / Hp / Acer").toLowerCase();
		while(!isNaN(marca) || (marca != "dell" && marca != "hp" && marca != "acer"))
		{
			marca = prompt("Ingrese una marca valida: Dell / Hp / Acer").toLowerCase();
		}

		modelo = prompt("Ingrese el modelo");

		precio = prompt("Ingrese un precio mayor a 100.000$");
		while(isNaN(precio) || (precio < 100000))
		{
			precio = prompt("Ingrese un precio mayor a 100.000$");
		}

		//A)
		if (precio < minimo || contadorPcBarata == 0) 
		{
			precioBarata = precio;
			contadorPcBarata++;
		}

		//B)
		if (tipoDePc == "desktop" && marca == "hp") 
		{
			contadorMarcaHptipoDesktop++;
		}

		//C)
		if (marca == "acer") 
		{
			acumuladorPrecioAcer = precio + acumuladorPrecioAcer;
			contadorAcer++;
		}

		switch(marca)
		{
		case "dell":
			contadorDell++;
			break;
		case "hp":
			contadorHp++;
			break;
		}

		if (marca == "dell" && tipoDePc == "desktop") 
		{
			if (precio > maximo || contadorDellCara == 0) 
			{
				modeloMasCaro = modelo;
				contadorDellCara++;
			}
		}
		confirmar = confirm("Desea seguir ingresando datos?");
	}while(confirmar)

	totalMarcas = contadorAcer + contadorHp + contadorDell;

	porcentajeAcer = contadorAcer / totalMarcas * 100;
	porcentajeHp = contadorHp / totalMarcas * 100;
	porcentajeDell = contadorDell / totalMarcas * 100;
	
	promedioAcer = acumuladorPrecioAcer / contadorAcer;

	document.write(`El precio de la pc mas barata es de ${pcMasBarata}$`);
	document.write(`la cantidad total de Hp tipo desktop es ${contadorMarcaHptipoDesktop}`);
	document.write(`El promedio de precio de las Acer es de ${promedioAcer}$`);
	document.write(`Hay un ${porcentajeAcer}% de Acer, un ${porcentajeHp}% de Hp y 
	un ${porcentajeDell}% de Dell`);
	document.write(`El modelo de la computadora Dell tipo Desktop mas cara es ${modeloMasCaro}`);

}

