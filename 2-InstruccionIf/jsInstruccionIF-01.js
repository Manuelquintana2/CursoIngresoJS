/******************************************************************************
Ejercicio 3

Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, es necesario
llevar un registro 
de la venta diaria de cafés, medialunas y churros.

Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente
Tipo de producto (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:

Café $100.
Medialunas $60.
Churros $50.


Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

Informes:

a) Cuantas Medialunas se compraron durante toda la jornada.
b) Cuál fue el tipo de producto con más unidades vendidas.
c) De la venta con más unidades el nombre del cliente y el tipo de producto.
d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.


Tener en cuenta:
Si se compran más de dos docenas de medialunas/churros por ejemplo. El descuento del 30%
se sigue aplicando, eso aplica para cualquier otro caso similar.
Por cada venta que se hace se ingresa un sólo tipo de producto (café o medialunas o churros)

*******************************************************************************/

function mostrar()
{
	let cafe = 100;
	let churros = 50;
	let medialunas = 60;

	let nombre;
	let producto;
	let cantidad;
	let respuesta;
	let precioFinalMedialunas;
	let precioFinalChurros;
	let precioFinalCafe;
	let acumuladorPrecioMedialunas;
	let acumuladorPrecioCafe;
	let acumuladorPrecioChurros;
	let acumuladorCantidadMedialunas;
	let acumuladorCantidadChurros;
	let acumuladorCantidadCafe;
	let productoMasVendido;
	let maximo;
	let contador;
	let clienteComprador;
	let productoMasComprado;
	let precioTotal;

	acumuladorPrecioChurros = 0;
	acumuladorPrecioCafe = 0;
	acumuladorPrecioMedialunas = 0;
	acumuladorCantidadMedialunas = 0;
	acumuladorCantidadCafe = 0;
	acumuladorCantidadChurros = 0;
	contador = 0;

	do
	{
		nombre = prompt("Ingrese su nombre");
		while(!isNaN(nombre))
		{
			nombre = prompt("Ingrese su nombre");
		}

		producto = prompt("Ingrese un producto: cafe / medialunas / churros").toLowerCase();
		while(!isNaN(producto) || (producto != "cafe" && producto != "medialunas" && producto != "churros"))
		{
			producto = prompt("Ingrese un producto: cafe / medialunas / churros").toLowerCase();
		}

		cantidad = prompt("Cuantos productos quiere?");
		cantidad = parseInt(cantidad);
		while(isNaN(cantidad) || (cantidad < 0))
		{
			cantidad = prompt("Cuantos productos quiere?");
			cantidad = parseInt(cantidad);
		}

		switch(producto)
		{
		case "medialunas":
			acumuladorCantidadMedialunas = cantidad + acumuladorCantidadMedialunas;
			precioFinalMedialunas = medialunas * cantidad;
				if(cantidad > 24)
				{
					precioFinalMedialunas = precioFinalMedialunas * 0.70;
				}
				else
				{
					if (cantidad > 12) 
					{
						precioFinalMedialunas = precioFinalMedialunas * 0.80;
					}
					else
					{
						if (cantidad > 10) 
						{
							precioFinalMedialunas = precioFinalMedialunas * 0.90;
						}
						else
						{	
							if (cantidad > 5) 
							{
								precioFinalMedialunas = precioFinalMedialunas * 0.95;
							}
						}
					}		
				}
			acumuladorPrecioMedialunas = precioFinalMedialunas + acumuladorPrecioMedialunas;
			break;

		case "churros":
			acumuladorCantidadChurros = cantidad + acumuladorCantidadChurros;
			precioFinalChurros = churros * cantidad;
			if(cantidad > 24)
				{
					precioFinalChurros = precioFinalChurros * 0.70;
				}
				else
				{
					if (cantidad > 12) 
					{
						precioFinalChurros = precioFinalChurros * 0.80;
					}
					else
					{
						if (cantidad > 10) 
						{
							precioFinalChurros = precioFinalChurros * 0.90;
						}
						else
						{
							if (cantidad > 5) 
							{
								precioFinalChurros = precioFinalChurros * 0.95;
							}
						}
					}
					
				}
			acumuladorPrecioChurros = precioFinalChurros + acumuladorPrecioChurros;
			break;

		case "cafe":
			acumuladorCantidadCafe = cantidad + acumuladorCantidadCafe;
			precioFinalCafe = cafe * cantidad;
			if(cantidad > 1)
			{
				precioFinalCafe = precioFinalCafe * 0.95;
			}
			acumuladorPrecioCafe = precioFinalCafe + acumuladorPrecioCafe;
			break;
		}

		if (cantidad > maximo || contador == 0) 
		{	
			maximo = cantidad;
			productoMasVendido = producto;
			clienteComprador = nombre;

		}

		respuesta = confirm("Desea seguir?");
		contador++;

	}while(respuesta);

	if(acumuladorCantidadMedialunas > acumuladorCantidadChurros && acumuladorCantidadMedialunas > acumuladorCantidadCafe)
	{
		productoMasComprado = "medialunas";
	}
	else
	{
		if (acumuladorCantidadChurros > acumuladorCantidadCafe) 
		{
			productoMasComprado = "churros";
		}
		else
		{
			productoMasComprado = "cafe";
		}
	}


	precioTotal = acumuladorPrecioCafe + acumuladorPrecioMedialunas + acumuladorPrecioChurros;

	if (precioTotal > 1300) 
	{
		precioTotal = precioTotal * 1.20;
	}

	document.write(`Se compraron un total de ${acumuladorCantidadMedialunas} medialunas <br>`);
	document.write(`El producto con mas unidades vendidas es ${productoMasComprado} <br>`);
	document.write(`El cliente que mas unidades compro, es ${clienteComprador} y compro ${productoMasVendido} <br>`);
	document.write(`El precio total es de ${precioTotal}$`)

}//FIN DE LA FUNCIÓN