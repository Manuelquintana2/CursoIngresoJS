//Quintana Miño Manuel DIV D grupo 2
function mostrar()
{
	let edad;

edad = parseInt(document.getElementById("txtIdEdad").value);


/*si edad es menor a 13, es niño, 

sino si es mayor o igual a 13 Y menor o igual a 17, es adolecente

sino es mayor de edad*/

	if (edad<13) 
		{alert("es niño");}

	else if(edad<18)
		{alert("es adolecente");}

	else 
		{alert("es adulto");}
	

alert("fin de la funcion");




}//FIN DE LA FUNCIÓN