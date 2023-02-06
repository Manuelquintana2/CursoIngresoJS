/*Manuel Quintana Miño DIV D Grupo 2
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 

{
	let tempF;
	const CALCULO1 = 32;
	const CALCULO2 = 5;
	const CALCULO3 = 9;
	let tempC;

	tempF = document.getElementById("txtIdTemperatura").value;
	tempF = parseFloat(tempF);
	
/*hacemos temperatur farenheit -32, y el resultado lo multiplicamos por 5 
y lo dividimos por 9 y daria la temperatura en centigrados*/
	tempC = (tempF - CALCULO1) * CALCULO2 / CALCULO3;
	tempC = tempC.toFixed(2);

	alert(`${tempF} grados fahrenheit es igual a
${tempC} grados centigrados`);

}

function CentigradosFahrenheit () 

{
	let tempF;
	let tempC;
	const CALCULO1 = 32;
	const CALCULO2 = 5;
	const CALCULO3 = 9;

	tempC = document.getElementById("txtIdTemperatura").value;
	tempC = parseFloat(tempC)
	tempF = tempC * CALCULO3 / CALCULO2 + CALCULO1;
	tempF = tempF.toFixed(2);

	alert(`${tempC} grados centigrados es igual a 
${tempF} grados fahrenheit`);

}
