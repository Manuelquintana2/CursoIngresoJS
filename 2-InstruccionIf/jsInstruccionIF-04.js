/*
Ejercicio 3:

Apellido: Quintana Miño
Nombre: Manuel
Comisión: D
Tutor: Renato

"Atención AFIP: ""Inspección de Bultos"": La administración federal de ingresos públicos
 tiene el ojo puesto sobre una empresa de 
logística que opera en Argentina e importa productos desde  México, Colombia y Uruguay.
Nos piden que realicemos un programa que 
permita controlar los movimientos de dicha empresa: 
De cada pedido que recibe la empresa se conoce: la cantidad de bultos, 
el peso por bulto (no debe superar los 1500 kilos), el lugar de origen.
Se establece que la tarifa regular por bulto es de $300 
y la tarifa especial (para pedidos de más de 300 kilos por bulto) es de $500.
La aplicación debe informar a la AFIP:

A) Total facturado
B) Porcentaje de bultos ingresados desde Colombia.
C) Sobre el total facturado de bultos provenientes de México, 
la empresa deberá pagar un canon del 15% sobre este total 
(este impuesto luego será redistribuido para la construcción de hospitales). Mostrar dicho valor.
D) Para incentivar el libre comercio con los países del MERCOSUR,
si el total facturado de bultos provenientes de Uruguay, 
supera los $15000000, se le otorgará a la empresa una devolución del 5% sobre ese total.

*/
function mostrar()
{
	let precioBulto;
	precioBulto = 300;
	let tarifaBulto;
	tarifaBulto = 500;

	let cantidadBultos;
	let pesoPorBulto;
	let lugarDeOrigen;
	let totalFacturado;
	let seguir;
	let contador;
	let contadorBultosColombia;
	let contadorBultosMexico;
	let contadorBultosUruguay;
	let porcentajeBultosColombia;
	let totalBultos;
	let totalFacturadoUruguayConAumento;
	let totalFacturadoColombia;
	let totalFacturadoUruguay;
	let totalFacturadoMexico;
	

	contador = 0;
	contadorBultosColombia = 0;
	contadorBultosMexico = 0;
	contadorBultosUruguay = 0;

	do
	{
		cantidadBultos = prompt("Cuantos vultos quiere ingresar?");
		cantidadBultos = parseInt(cantidadBultos);
		while(isNaN(cantidadBultos) || (cantidadBultos < 0))
		{
			cantidadBultos = prompt("Cuantos vultos quiere ingresar?");
			cantidadBultos = parseInt(cantidadBultos);
		}

		pesoPorBulto = prompt("Ingrese el peso por bulto: menos de 1500kg")
		pesoPorBulto = parseInt(pesoPorBulto);
		while(isNaN(pesoPorBulto) || (pesoPorBulto > 1500))
		{
			pesoPorBulto = prompt("Ingrese el peso por bulto: menos de 1500kg")
			pesoPorBulto = parseInt(pesoPorBulto);	
		}

		lugarDeOrigen = prompt("De donde vienen estos bultos?").toLowerCase();
		while(!isNaN(lugarDeOrigen) || (lugarDeOrigen != "mexico" && lugarDeOrigen != "colombia" && lugarDeOrigen != "uruguay"))
		{
			lugarDeOrigen = prompt("De donde vienen estos bultos?").toLowerCase();
		}

		

		switch(lugarDeOrigen)
		{
		case "mexico":
			contadorBultosMexico++;
			if (pesoPorBulto < 300) 
			{
				totalFacturadoMexico = precioBulto * cantidadBultos;
				totalFacturadoMexico = totalFacturadoMexico * 1.15
			}
			else
			{
				totalFacturadoMexico = tarifaBulto * cantidadBultos;
				totalFacturadoMexico = totalFacturadoMexico * 1.15
			}

			break;

		case "colombia":
			contadorBultosColombia++;
			if (pesoPorBulto < 300) 
			{
				totalFacturadoColombia = precioBulto * cantidadBultos;
			}
			else
			{
				totalFacturadoColombia = tarifaBulto * cantidadBultos;
			}
			break;

		case "uruguay":
			contadorBultosUruguay++;
			if (pesoPorBulto < 300) 
			{
				totalFacturadoUruguay = precioBulto * cantidadBultos;
			}
			else
			{
				totalFacturadoUruguay = tarifaBulto * cantidadBultos;
			}
			if (totalFacturadoUruguay > 15000000) 
			{
				totalFacturadoUruguayConAumento = totalFacturadoUruguay * 1.05;
			}
			break;
		}

	contador++;

	seguir = confirm("Desea seguir?");

	}while(seguir);

	totalFacturado = totalFacturadoUruguay + totalFacturadoMexico + totalFacturadoColombia;

	totalBultos = contadorBultosUruguay + contadorBultosColombia + contadorBultosMexico;

	porcentajeBultosColombia = contadorBultosColombia / totalBultos * 100;

	document.write(`El total facturado es igual a ${totalFacturado} <br>`);
	document.write(`El porcentaje de bultos que vienen desde colombia es de un ${contadorBultosColombia}% <br>`);
	document.write(`El canon que debera pagar la empresa de mexico es de un total de ${totalFacturadoMexico} <br>`);
	if (totalFacturadoUruguayConAumento > 15000000) 
	{
		document.write(`Si uruguay genera mas de un 15.000.000$ se le agregara el 5% a su total y 
		como resultado tendria un total de ${totalFacturadoUruguayConAumento}`)
	}
	else
	{
		document.write(`Uruguay no genero tantos ingresos entonces no se le otorga ningun aumento`)
	}

}//FIN DE LA FUNCIÓN