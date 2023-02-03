// Manuel Quinana Miño DIV D Grupo 2
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

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseFloat(precio1)
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseFloat(precio2)
	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseFloat(precio3)

	resultado = precio1 + precio2 + precio3

	alert("la suma de los precios es de $" + resultado)



}
function Promedio () 
{
	let precio1;
	let precio2;
	let precio3;
	let promedio;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseFloat(precio1)
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseFloat(precio2)
	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseFloat(precio3)

	promedio = (precio1 + precio2 + precio3) / 3;
	promedio = promedio.toFixed(2);

	alert("el promedio es de $" + promedio);
	
}
function PrecioFinal () 
{
	
	let precio1;
	let precio2;
	let precio3;
	let importeFinal;
	let suma;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseFloat(precio1)
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseFloat(precio2)
	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseFloat(precio3)

	suma = precio1 + precio2 + precio3
	//iva = suma * 0.21;
	//mporteFinal = suma + iva;
	importeFinal = suma * 1.21;
	importeFinal = importeFinal.toFixed(2);

	alert("el producto final es de $" + importeFinal);

	

}