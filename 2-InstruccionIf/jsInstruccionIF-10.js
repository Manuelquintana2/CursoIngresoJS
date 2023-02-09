//Quintana Miño Manuel DIV D grupo 2
function mostrar()
{
	let numeroRandom;

	numeroRandom = Math.floor(Math.random() * 10 + 1);

	if (numeroRandom>=9)
	 {alert("Excelente su nota es " + numeroRandom);}

	else if (numeroRandom>=4)
	 {alert("Aprobado su nota es " + numeroRandom);}

	else{alert("Vamos la proxima se puede, su nota es " + numeroRandom);}
	

}//FIN DE LA FUNCIÓN