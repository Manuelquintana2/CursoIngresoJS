/* Quintana Miño Manuel DIV D grupo 2
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{

	let valorDeCompra;
	let iva;
	let descuento;
	let importeTotal;
	let importeConIva;

//Cambie el ID de la caja de texto y use el ejercicio 3

	valorDeCompra = document.getElementById("txtIdValor").value;
	valorDeCompra = parseFloat(valorDeCompra);

	iva = valorDeCompra * 0.21;

	descuento = valorDeCompra * 0.05;

	importeTotal = valorDeCompra + iva - descuento;

	importeTotal = importeTotal.toFixed(2)

	importeConIva = valorDeCompra + iva;

	importeConIva = parseFloat(importeConIva.toFixed(2))


	alert(`IMPORTE BRUTO: ${valorDeCompra}
	IVA: ${iva} 
	IMPORTE CON IVA: ${importeConIva} 
	VALOR DEL DESCUENTO: ${descuento} 
	TOTAL A PAGAR: ${importeTotal}`);

}


