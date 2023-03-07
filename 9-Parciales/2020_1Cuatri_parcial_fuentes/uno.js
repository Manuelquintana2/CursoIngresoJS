
function mostrar()
{
	let contador;
	let promedio;
	let tipoProducto;
	let precio;
	let cantidadUnidades;
	let marca;
	let fabricante;
	let precioDeAlcoholMasBarato;
	let contadorAlcohol;
	let contadorBarbijos;
	let contadorJabones;
	let acumuladorAlcohol;
	let acumuladorBarbijos;
	let acumuladorJabones;
	let unidadesAlcoholBarato;
	let marcaAlcoholBarato;
	let fabricanteAlcoholBarato;
	let tipoProductoMasUnidades;

	contador = 0;
	contadorAlcohol = 0;
	contadorBarbijos = 0;
	contadorJabones = 0;
	acumuladorJabones = 0;
	acumuladorBarbijos = 0;
	acumuladorAlcohol = 0;

	while(contador < 5)
	{
		tipoProducto = prompt("Ingrese el tipo de producto");
		while(tipoProducto != "barbijo" && tipoProducto != "jabón" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("Ingrese nuevamente otro tipo de producto");
		}

		contador++;

		precio = prompt("Ingrese el precio del producto");
		precio = parseFloat(precio);

		while(precio < 100 || precio > 300)
		{
			precio = prompt("Ingrese nuevamente el precio del producto");
			precio = parseFloat(precio);
		}

		cantidadUnidades = prompt("Ingrese la cantidad de unidades");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("Ingrese nuevamente la cantidad de unidades");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("Ingrese la marca");

		fabricante = prompt("Ingrese el fabricante");

		switch(tipoProducto)
		{
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
				if(precio < precioDeAlcoholMasBarato || contadorAlcohol == 1)
				{
					precioDeAlcoholMasBarato = precio;
					unidadesAlcoholBarato = cantidadUnidades;
					fabricanteAlcoholBarato = fabricante;
					marcaAlcoholBarato = marca;
				}
			break;
			
			case "jabón":
				contadorJabones++;
				acumuladorJabones = acumuladorJabones + cantidadUnidades;
			break;
			case "barbijo":
				contadorBarbijos++;
				acumuladorBarbijos = acumuladorBarbijos + cantidadUnidades;
			break;
		}
		//b) Del tipo con mas unidades, el promedio por compra
		
	}
	if(acumuladorAlcohol>acumuladorJabones && acumuladorAlcohol > acumuladorBarbijos)
		{
			promedio = acumuladorAlcohol / contadorAlcohol;
			tipoProductoMasUnidades = "alcohol";
		}
		else
		{
			if(acumuladorJabones>acumuladorBarbijos && acumuladorJabones>acumuladorAlcohol)
			{
				promedio = acumuladorJabones / contadorJabones;
				tipoProductoMasUnidades= "jabón";
			}
			else
			{
				//barbijo
				promedio = acumuladorBarbijos / contadorBarbijos;
				tipoProductoMasUnidades = "barbijo";
			}
		}
	if (contadorAlcohol==0)
	{
		document.write("A- No se ingresó ningun alcohol. <br>");
	}
	else
	{
		document.write("A- La cantidad de unidades del alcohol mas barato es: " + unidadesAlcoholBarato + " el fabricante es: " 
		+ fabricanteAlcoholBarato + " de la marca: " + marcaAlcoholBarato + "<br>");
	}	
	document.write("B- El tipo con mas unidades es: " + tipoProductoMasUnidades + " con un promedio de: " + promedio + "<br>");
	document.write("C- Hay " + acumuladorJabones + " jabones.");
}


		
		
