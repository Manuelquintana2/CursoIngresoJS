//Quintana Miño Manuel DIV D grupo 2
function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			alert("este mes tiene menos de 29 dias");
			break;
		default:
			alert("este mes tiene mas de 29 dias");
	}


}//FIN DE LA FUNCIÓN