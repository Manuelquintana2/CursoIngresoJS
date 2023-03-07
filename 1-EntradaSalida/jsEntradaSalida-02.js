/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo,
 Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete
 de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Precio total del paquete de viaje (validar el rango posible de precio).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento,
 los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor.
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo
 antes de la proxima venta con un alert
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por
 el cliente.
 PRECIO BASE 10.000$
*/

function mostrar()
{
 	let vendedor;
 	let comprador;
 	let cantidadDePasajes;
 	let precioDeviaje;
 	let asiento;
 	let tipoDeViaje;
 	let destino;
 	let seguir;
 	let contadorPaquete;
 	let acumuladorPesosPepe;
 	let acumuladorPesosQuinoto;
 	let acumuladorPesosHuesos;
 	let mejorVendedor;
 	let recaudado;
 	let contadorVuelosNacionales;
 	let contadorVuelosInternacionales;
 	let vuelosGeneral;
 	let porcentajeInter;
 	let porcentajeNacional;
 	let acumuladorDePaquetesDirectos;
 	let acumuladorDePaquetesInternacionales;

 	acumuladorPesosPepe = 0;
 	acumuladorPesosQuinoto = 0;
 	acumuladorPesosHuesos = 0;
 	contadorVuelosInternacionales = 0;
 	contadorVuelosNacionales = 0;
 	contadorPaquete = 0;
 	acumuladorDePaquetesDirectos = 0;
 	acumuladorDePaquetesInternacionales = 0;

 	seguir = true;

 	while(seguir == true)
 	{
 		vendedor = prompt("Quien es su vendedor");
 		while(vendedor != "Pepe" && vendedor != "Quinoto" && vendedor != "Huesos")
 		{
 			vendedor = prompt("Quien es su vendedor");
 		}

 		comprador = prompt("Quien es el comprador");
 		while(isNaN == false)
 		{
 			comprador = prompt("Quien es el comprador");
 		}

 		cantidadDePasajes = prompt("Cuantos pasajes quiere?");
 		while(cantidadDePasajes < 1 || cantidadDePasajes > 5)
 		{
 			cantidadDePasajes = prompt("Cuantos pasajes quiere?");
 		}

 		precioDeviaje = prompt("precio del viaje");
 		while(precioDeviaje < 10000 && precioDeviaje > 50000)
 		{
 			precioDeviaje = prompt("precio del viaje valido");
 		}

 		asiento = prompt("Que asiento quiere? clase economica / ejecuiva / primera clase");
 		while(asiento != "clase economica" && asiento != "clase ejecutiva" && asiento != "primera clase")
 		{
 			asiento = prompt("Que asiento quiere? clase economica / ejecuiva / primera clase");
 		}

 		tipoDeViaje = prompt("Su viaje es con escala o directo?");
 		while(tipoDeViaje != "directo" && tipo != "escala")
 		{
 			tipoDeViaje = prompt("Su viaje es con escala o directo?");
 		}

 		destino = prompt("Su destino es internacional o nacional");
 		while(destino != "nacional" && destino != "internacional")
 		{
 			destino = prompt("Su destino es internacional o nacional");
 		}

 		contadorPaquete++
 		switch(vendedor)
 		{
 		case "Pepe":
 			acumuladorPesosPepe = precioDeviaje + acumuladorPesosPepe;
 			break;
 		case "Quinoto":
 			acumuladorPesosQuinoto = precioDeviaje + acumuladorPesosQuinoto;
 			break;
 		case "Huesos":
 			acumuladorPesosHuesos = precioDeviaje + acumuladorPesosHuesos;
		}
 		seguir = confirm("desea seguir")

 		switch(destino)
 		{
 		case "nacional":
 			contadorVuelosNacionales++;
 			break;
 		case "internacional":
 			contadorVuelosInternacionales++;
 			acumuladorDePaquetesInternacionales = contadorPaquete + acumuladorDePaquetesInternacionales;
 			break;
 		}
 		if (tipoDeViaje == "directo") 
 		{
 			acumuladorDePaquetesDirectos = contadorPaquete + acumuladorDePaquetesDirectos;
 		}
 		
 	}

 	if (acumuladorPesosHuesos > acumuladorPesosQuinoto && acumuladorPesosHuesos > acumuladorPesosPepe) 
 	{
 		mejorVendedor = "Huesos"
 		recaudado = acumuladorPesosHuesos;
 	}
 	else
 	{
 		if (acumuladorPesosPepe > acumuladorPesosQuinoto && acumuladorPesosPepe > acumuladorPesosHuesos) 
 		{
 			mejorVendedor = "Pepe"
 			recaudado = acumuladorPesosPepe;
 		}
 		else
 		{
 			mejorVendedor = "Huesos"
 			recaudado = acumuladorPesosHuesos;
 		}
 	}

vuelosGeneral = contadorVuelosNacionales + contadorVuelosInternacionales

porcentajeInter = contadorVuelosInternacionales / vuelosGeneral  * 100;
porcentajeNacional = contadorVuelosNacionales / vuelosGeneral * 100;

document.write(`pepe vendio ${acumuladorPesosPepe}, Quinoto vendio ${acumuladorPesosQuinoto}
y huesos vendio ${acumuladorPesosHuesos}`);
document.write(`El que mas vendio fue ${mejorVendedor} y recaudo ${recaudado}`);
document.write(`El porcentaje de vuelos internacionales es del ${porcentajeInter}% 
y el porcentaje de vuelos nacionales es del ${porcentajeNacional}%`);
document.write(`La cantidad de paquetes directos es de ${acumuladorDePaquetesDirectos}
y de los internacionales es de ${acumuladorDePaquetesInternacionales}`);
document.write()



}

