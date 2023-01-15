/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
	let precio2;
	let precio3;
	let resultado;


	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

	precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

	precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

	resultado = precio1 + precio2 + precio3

	alert("la suma de los precios es de $" + resultado)



}
function Promedio () 
{
	let precio1;
	let precio2;
	let precio3;
	let promedio;


	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

	precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

	precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

	promedio = (precio1 + precio2 + precio3) / 3;

	promedio = promedio.toFixed(2);

	alert("el promedio es de $" + promedio);
	
}
function PrecioFinal () 
{
	
	let precio1;
	let precio2;
	let precio3;
	let iva;
	let importeFinal;


	precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

	precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

	precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

	iva = (precio1 + precio2 + precio3) * 21 / 100;

	importeFinal = precio1 + precio2 + precio3 + iva;

	importeFinal = importeFinal.toFixed(2);

	alert("el producto final es de $" + importeFinal);

	

}