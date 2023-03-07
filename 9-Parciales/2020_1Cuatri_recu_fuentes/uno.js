
/*
A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:

nombre del titular,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano?
paga con mercado , tarjeta o efectivo*/

function mostrar()
{
	let nombreTitular;
	let lugar;
	let temporada;
	let diasDeviaje;
	let importeDelViaje;
	let alturaPasajeros;
	let pesoPasajero;
	let sexo;
	let equipajeDeMano;
	let pago;
	let seguir;

	seguir = true;

	while(seguir == true)
	{
		nombreTitular = prompt("Ingrese el nombre del titular");

		lugar = prompt("Ingrese un lugar: Puerto Madryn / Villa Gessel / Cordoba");
		while(lugar != "Puerto Madryn" && lugar != "Villa Gessel" && lugar != "Cordoba")
		{
			lugar = prompt("Ingrese un lugar valido: Puerto Madryn / Villa Gessel / Cordoba");
		}

		temporada = prompt("Eliga en que temporada: alta / baja");
		while(temporada != "alta" && temporada != "baja")
		{
			temporada = prompt("Eliga una temporada valida: alta / baja");
		}

		diasDeviaje = prompt("Cuantos dias viajara?")
		diasDeviaje = parseInt(diasDeviaje);
		while(!(diasDeviaje > 0))
		{
			diasDeviaje = prompt("Cuantos dias viajara?");
			diasDeviaje = parseInt(diasDeviaje);
		}

		importeDelViaje = prompt("Ingrese el importe del viaje");
		importeDelViaje = parseFloat(importeDelViaje);
		while(!(importeDelViaje > 0))
		{
			importeDelViaje = prompt("Ingrese el importe del viaje");
			importeDelViaje = parseFloat(importeDelViaje);
		}

		alturaPasajeros = prompt("Ingrese su altura");
		alturaPasajeros = parseInt(alturaPasajeros);
		while(!(alturaPasajeros > 0))
		{
			alturaPasajeros = prompt("Ingrese su altura");
			alturaPasajeros = parseInt(alturaPasajeros);
		}

		pesoPasajero = prompt("Ingrese su peso")
		pesoPasajero = parseInt(pesoPasajero);
		while(!(pesoPasajero > 0))
		{
			pesoPasajero = prompt("Ingrese su peso")
			pesoPasajero = parseInt(pesoPasajero);
		}

		sexo = prompt("Ingrese su sexo: F / M / NB");
		while(sexo != "F" && sexo != "M" && sexo != "NB")
		{
			sexo = prompt("Ingrese un sexo valido: F / M / NB");
		}

		equipajeDeMano = prompt("Viaja con equipaje de mano? si / no");
		while(equipajeDeMano != "si" && equipajeDeMano != "no")
		{
			equipajeDeMano = prompt("Viaja con equipaje de mano? si / no");
		}

		pago = prompt("Con que va a pagar? mercado / tarjeta / efectivo");
		while(pago != "mercado" && pago != "tarjeta" && pago != "efectivo")
		{
			pago = prompt("Con que va a pagar? mercado / tarjeta / efectivo");
		}

		seguir = confirm("desea seguir poniendo datos?");
	}
}
