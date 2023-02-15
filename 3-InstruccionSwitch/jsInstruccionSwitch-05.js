//Quintana Miño Manuel DIV D grupo 2
function mostrar()
{
	let hora;


	hora = document.getElementById("txtIdHora").value;
	hora = parseInt(hora)

	switch(hora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("es de mañana")
			break;
		default:
			alert("Ingrese otro horario")


	}
	




}//FIN DE LA FUNCIÓN