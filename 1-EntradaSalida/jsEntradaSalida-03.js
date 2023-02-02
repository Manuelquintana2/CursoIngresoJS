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
	let valorConDescuento;

	valorDeCompra = document.getElementById("txtIdValor").value;
	valorDeCompra = parseFloat(valorDeCompra);

	iva = valorDeCompra * 0.21;

	descuento = valorDeCompra * 0.05;

	importeTotal = valorDeCompra + iva - descuento;

	importeTotal = importeTotal.toFixed(2)

	importeConIva = valorDeCompra + iva;

	importeConIva = parseFloat(importeConIva.toFixed(2))


	alert(`el importe bruto es de ${valorDeCompra}, la suma del iva es de
${iva}, el importe con iva seria de ${importeConIva}, el valor del
descuento es de ${descuento} y el total a pagar es ${importeTotal}`);

}


