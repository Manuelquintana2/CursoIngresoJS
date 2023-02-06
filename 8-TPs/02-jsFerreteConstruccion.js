/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largodeTerreno;
	let anchodeTerreno;
	let cantidadAlambre;
	let perimetro;

	largodeTerreno = parseFloat(document.getElementById("txtIdLargo").value);
	anchodeTerreno = parseFloat(document.getElementById("txtIdAncho").value);
	
	perimetro = (anchodeTerreno + largodeTerreno) * 2;
	cantidadAlambre = perimetro * 3;

	alert(`la cantidad de alambre necesaria es
de ${cantidadAlambre} metros`);

}
function Circulo () 
{
	let perimetro;
	let radio;
	let cantidadAlambre;
	const PI = 3.14;

	radio = parseInt(document.getElementById("txtIdRadio").value);
	perimetro = 2 * PI * radio;
	cantidadAlambre = perimetro * 3;

	alert(`la cantidad de alambre necesaria es
de ${cantidadAlambre} metros`);

}
function Materiales () 

{
	let largodeTerreno;
	let anchodeTerreno;
	let area;
	let cemento;
	let cal;

	largodeTerreno = parseInt(document.getElementById("txtIdLargo").value);
	anchodeTerreno = parseInt(document.getElementById("txtIdAncho").value);

	area = largodeTerreno * anchodeTerreno;
	cemento = area * 2
	cal = area * 3

	alert(`Para un contrapiso de ${area}m2 
necesito comprar ${cemento} bolsas de cemento y ${cal} bolsas de cal`);



}
