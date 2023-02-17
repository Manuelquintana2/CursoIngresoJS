//Manuel Quintana Miño DIV D Grupo 2
function mostrar()
{
	let horaDelDia;

 	horaDelDia = document.getElementById("txtIdHora").value;
 	horaDelDia = parseInt(horaDelDia)

 	if (horaDelDia > 6 && horaDelDia < 12) 
 	{
 		alert("es de mañana"); 		
 	}

 	else if (horaDelDia > 11 && horaDelDia < 20) 
 		{
 			alert("Es de tarde");
 		}

 	else if ( (horaDelDia > 19 && horaDelDia < 25) || (horaDelDia >= 0 && horaDelDia < 7) ) 
 		{
 			alert("Es de noche")
 		}
 	
 	else 
 	{
 		alert("Esa hora no existe")
 	}
 	

}//FIN DE LA FUNCIÓN