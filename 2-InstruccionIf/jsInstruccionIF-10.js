function mostrar()
{
	let numeroRandom;
	//let maximo = 10;
	//let minimo = 1;

	//como son constantes no declaro las variables y remplazo por su numero

	//numeroRandom = Math.round(Math.random() * (10 - 1) + 1);

	//resuelvo los parentesis


	numeroRandom = Math.round(Math.random() * 9 + 1);

	if (numeroRandom>=9)
	 {alert("Excelente su nota es " + numeroRandom);}

	else if (numeroRandom>=4)
	 {alert("Aprobado su nota es " + numeroRandom);}

	else{alert("Vamos la proxima se puede, su nota es " + numeroRandom);}
	

}//FIN DE LA FUNCIÓN