/*
Ejercicio 1:

Apellido: Quintana Miño
Nombre: Manuel
Comisión: D
Tutor: Renato

El gerente de "El super de Anto"" nos pide desarrollar un programa que  permita cargar y 
analizar las compras realizadas por sus clientes en una jornada de trabajo.
Para ello, se debe ingresar en cada una de las compras:

Nombre del comprador.
Edad del comprador (Debe ser mayor de edad).
Cantidad de productos comprados (No debe ser negativo ni cero).
Total gastado (No debe ser negativo ni cero).
Método de pago (Efectivo - Débito - Crédito)

En base a todas las compras registradas, informar:

A) El promedio de edad entre todos los compradores.
B) El promedio de dinero gastado por los compradores menores a 25 años.
C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
D) Nombre y cantidad de productos del comprador que menos gasto. 
*/
function mostrar()
{
	let nombreComprador;
	let edad;
	let cantidadProductos;
	let plataGastada;
	let metodoDePago;
	let seguir;
	let acumuladorEdad;
	let contador;
	let promedioEdad;
	let acumuladorDineroMenores25;
	let contadorMenores25;
	let promedioGastadoMenores25;
	let acumuladorDebito;
	let porcentajeDebito;
	let minimo;
	let nombreMenosGastos;
	let cantidadProductosMenosGastos;

	acumuladorEdad = 0;
	contador = 0;
	acumuladorDineroMenores25 = 0;
	contadorMenores25 = 0;
	acumuladorDebito = 0;

	do
	{
		nombreComprador = prompt("Ingrese su nombre");
		while(!isNaN(nombreComprador))
		{
			nombreComprador = prompt("Ingrese su nombre");
		}

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while(isNaN(edad) || (edad < 18))
		{
			edad = prompt("Ingrese su edad mayor o igual a 18");
			edad = parseInt(edad);
		}

		cantidadProductos = prompt("Cuantos productos quiere ingresar?");
		cantidadProductos = parseInt(cantidadProductos);
		while(isNaN(cantidadProductos) || (cantidadProductos < 1))
		{
			cantidadProductos = prompt("Cuantos productos quiere ingresar?");
			cantidadProductos = parseInt(cantidadProductos);
		}

		plataGastada = prompt("Cuanto dinero gasto?");
		plataGastada = parseFloat(plataGastada);
		while(isNaN(plataGastada) || (plataGastada < 1))
		{
			plataGastada = prompt("Cuanto dinero gasto?");
			plataGastada = parseFloat(plataGastada);
		}

		metodoDePago = prompt("Ingrese un metodo de pago: Efectivo / Debito / Credito").toLowerCase();
		while(!isNaN(metodoDePago) || (metodoDePago != "efectivo" && metodoDePago != "debito" && metodoDePago != "credito"))
		{
			metodoDePago = prompt("Ingrese un metodo de pago: Efectivo / Debito / Credito").toLowerCase();
		}

		seguir = confirm("Desea seguir?");

		contador++;

		acumuladorEdad = edad + acumuladorEdad;

		if (edad < 25) 
		{
			acumuladorDineroMenores25 = plataGastada + acumuladorDineroMenores25;
			contadorMenores25++;
		}

		if (metodoDePago == "debito") 
		{
			acumuladorDebito = plataGastada + acumuladorDebito;
		}

		if (plataGastada < minimo || contador == 1) 
		{
			minimo = plataGastada;
			nombreMenosGastos = nombreComprador;
			cantidadProductosMenosGastos = cantidadProductos;

		}

	}while(seguir);


	promedioEdad = acumuladorEdad / contador;

	promedioGastadoMenores25 = acumuladorDineroMenores25 / contadorMenores25;

	porcentajeDebito = acumuladorDebito / contador;

	document.write(`El promedio de edad de todos los compradores es de ${promedioEdad} <br>`);
	document.write(`El promedio de lo que gastaron los menores de 25 es de ${promedioGastadoMenores25}$ <br>`);
	document.write(`El porcentaje del dinero total gastado con debito es de ${porcentajeDebito} <br>`);
	document.write(`El que menos gasto fue ${nombreMenosGastos} y compro un total de ${cantidadProductosMenosGastos} productos`);


}