/*Manuel Quintana Miño DIV D Grupo 2
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{/*
	//declarar contadores y variables 
	let seguir = true;
	let numeroIngresado;
	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let contadorP = 0;
	let contadorN = 0;
	let contadorC = 0;
	let contadorPares = 0;
	let promedioP;
	let promedioN;
	let diferencia;
	let totalNumeros;
	let porcentajeN;
	let porcentajeP;
	let porcentajeC;
	let maximo;
	let minimo;
	
	while(seguir == true)
	{
		numeroIngresado = prompt("Ingrese numeros");
		numeroIngresado = parseInt(numeroIngresado);

		seguir = confirm("desea continuar?");

		if (numeroIngresado < 0) 
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorN++;
			if (numeroIngresado < minimo || contadorN == 1) 
			{
				minimo = numeroIngresado;
			}
		}
		else
		{
			if (numeroIngresado > 0) 
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				contadorP++;
				if (numeroIngresado > maximo || contadorP == 1) 
				{
					maximo = numeroIngresado;
				}
			}
			else
			{
				if (numeroIngresado == 0) 
				{
					contadorC++;
				}				
			}
		}

	if (numeroIngresado % 2 == 0) 
		{
			contadorPares++;
		}

	}

	promedioN = sumaNegativos / contadorN;
	promedioP = sumaPositivos / contadorP;

	diferencia = sumaNegativos + sumaPositivos;

	totalNumeros = contadorN + contadorP + contadorC;

	porcentajeN = contadorN / totalNumeros * 100;
	porcentajeP = contadorP / totalNumeros * 100;
	porcentajeC = contadorC / totalNumeros * 100;



document.write(`La suma de los negativos es :${sumaNegativos} <br> 
 La suma de los positivos es ${sumaPositivos} <br>
 La cantidad de los positvos es ${contadorP} <br>
 La cantidad de negativos es ${contadorN} <br>
 La cantidad de ceros es :${contadorC} <br>
 La cantidad de numeros pares es de ${contadorPares} <br>
 El promedio de los negativos es de ${promedioN.toFixed(2)} <br>
 El promedio de los positivos es de ${promedioP.toFixed(2)} <br>
 La diferencia es de ${diferencia} <br>
 El porcentaje de los negativos es de ${porcentajeN.toFixed(2)}% <br>
 El porcentaje de los positivos es de ${porcentajeP.toFixed(2)}% <br>
 El porcentaje de los ceros es de ${porcentajeC.toFixed(2)}% <br>
 El mayor de los positivos es ${maximo} <br>
 El menor de los negativos es ${minimo}`)*/

  	var sumaPositivos;
    var sumaNegativos;
    var numeroIngresado;
    var contadorNumPares;
    var contadorPositivos;
    var contadorNegativos;
    var contadorCeros;
    var promedioNegativos;
    var promedioPositivos;
    var diferencia;
    var porcentajeNegativos;
    var porcentajePositivos;
    var positivoGrande;
    var negativoChico;
    var respuesta;
    var contador;

    sumaPositivos = 0;
    sumaNegativos = 0;
    contadorNumPares = 0;
    contadorPositivos = 0;
    contadorNegativos = 0;
    contadorCeros = 0;
    respuesta = true;
    contador = 0;

    while (respuesta == true) {
        numeroIngresado = prompt('Ingrese un numero por favor');
        numeroIngresado = parseInt(numeroIngresado);
        contador++;

        if (numeroIngresado < 0) {
            sumaNegativos = sumaNegativos + numeroIngresado; //se guarda el num ingresado
            contadorNegativos = contadorNegativos + 1; // se cuenta cant num positivos

            if (numeroIngresado < negativoChico || contadorNegativos == 1) {
                negativoChico = numeroIngresado;
            }
        }
        else {
            if (numeroIngresado > 0) {
                sumaPositivos = sumaPositivos + numeroIngresado;
                contadorPositivos++;


                if (numeroIngresado > positivoGrande || contadorPositivos == 1) {
                    positivoGrande = numeroIngresado;
                }
            }

            else {
                contadorCeros = contadorCeros + 1;
            }

        }
        if (numeroIngresado % 2 == 0) //operador módulo (%)
        {
            contadorNumPares++;
        }

        respuesta = confirm("Desea continuar?");

    }// Fin del While

    diferencia = sumaPositivos + sumaNegativos;
    porcentajePositivos = (contadorPositivos * 100) / contador;
    porcentajeNegativos = (contadorNegativos * 100) / contador;

    document.write("La suma de negativos es: " + sumaNegativos + "<br>");
    document.write("La suma de positivos es: " + sumaPositivos + "<br>");
    document.write("La cantidad de negativos " + contadorNegativos + "<br>");
    document.write("La cantdidad de positivos es : " + contadorPositivos + "<br>");
    document.write("La cantidad de ceros es " + contadorCeros + "<br>");
    document.write("La cantidad de numeros pares es: " + contadorNumPares + "<br>");

    if (contadorNegativos != 0) {
        promedioNegativos = sumaNegativos / contadorNegativos;
        document.write("El promedio de numeros negativos es: " + promedioNegativos.toFixed(2) + "<br>");
    } else {
        document.write("No se pudo mostrar el promedio de los negativos" + "<br>");
    }

    if (contadorPositivos != 0) {
        promedioPositivos = sumaPositivos / contadorPositivos;
        document.write("El promedio de numeros positivos es: " + promedioPositivos.toFixed(2) + "<br>");
    } else {
        document.write("No se pudo mostrar el promedio de los positivos" + "<br>");
    }

    document.write("La diferencia entre los números es: " + diferencia + "<br>");
    document.write("El porcentaje de numeros positivos es:" + porcentajePositivos.toFixed(2) + "<br>");
    document.write("El porcentajede numeros negativos es: " + porcentajeNegativos.toFixed(2) + "<br>");

    if (positivoGrande != null) {
        document.write("El número mayor positivo es: " + positivoGrande + "<br>");
    } else {
        document.write('No se ingreso ningun numero positivo' + "<br>");
    }

    if (negativoChico != null) {
        document.write("El número menor negativo es: " + negativoChico + "<br>");
    } else {
        document.write('No se ingreso ningun numero negativo');
    }

}//FIN DE LA FUNCIÓN