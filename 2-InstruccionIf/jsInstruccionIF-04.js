function mostrar()
{
	
let edad;

edad = parseInt(document.getElementById("txtIdEdad").value);

//OPERADORES LOGICOS || = OR 		&& = AND


	if (!(edad<13 || edad>17))

		{alert("eres adolecente");}


	/*otra solucion con operador AND

	if(edad>=13 && edad<=17) 

	{alert("eres un adolecente");}*/
	

	


alert("fin de la funcion");

	



}//FIN DE LA FUNCIÓN