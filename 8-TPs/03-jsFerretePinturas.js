/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 

{
	
	let temperaturafarenheit;
	const CALCULO1 = 32;
	const CALCULO2 = 5;
	const CALCULO3 = 9;
	let gradocentigrados;

	temperaturafarenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

//hacemos temperatur farenheit -32, y el resultado lo multiplicamos por 5 
//y lo dividimos por 9 y daria la temperatura en centigrados

	gradocentigrados = (temperaturafarenheit - CALCULO1) * CALCULO2 / CALCULO3;

	
//usamos toFixed para restar decimales

	gradocentigrados = gradocentigrados.toFixed(4);

	alert(temperaturafarenheit + " grados farenheit son equivalentes a " + gradocentigrados + " grados centigrados");




}

function CentigradosFahrenheit () 
{

	let tempF;
	let tempC;
	const CALCULO1 = 32;
	const CALCULO2 = 5;
	const CALCULO3 = 9;

	tempC = parseFloat(document.getElementById("txtIdTemperatura").value);

	tempF = tempC * CALCULO3 / CALCULO2 + CALCULO1;

	tempF = tempF.toFixed(4);

	alert(tempC + " grados centigrados son equivalentes a " + tempF + "grados farenheit");






}
