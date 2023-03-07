function mostrar()
{
    let tipo;
    let respuesta;
    let cantidadDeBolsas;
    let precioPorBolsa;
    let descuento;
    let importeTotal;
    let ImporteConDescuento;
    let tipoMasCaro;
    let tipoMasBolsas;
    let acumuladorBolsas;
    let acumuladorPrecio;
    let acumuladorBolsasArena;
    let acumuladorBolsasCal;
    let acumuladorBolsasCemento;
    let acumuladorPrecioArena;
    let acumuladorPrecioCal;
    let acumuladorPrecioCemento;

    respuesta = true;
    acumuladorBolsas = 0;
    acumuladorPrecio = 0;
    acumuladorBolsasCemento = 0;
    acumuladorBolsasCal = 0;
    acumuladorBolsasArena = 0;
    acumuladorPrecioArena = 0;
    acumuladorPrecioCemento = 0;
    acumuladorPrecioCal = 0;

    while(respuesta == true)
    {
        tipo = prompt("Ingrese el tipo de bolsa: cemento, arena, cal")
        while(tipo != "cemento" && tipo != "arena" && tipo != "cal")
        {
           tipo = prompt("Ingrese un tipo de bolsa valido")
        }

        cantidadDeBolsas = prompt("Ingrese la cantidad de bolsas");
        cantidadDeBolsas = parseInt(cantidadDeBolsas);

        precioPorBolsa = prompt("Ingrese el precio por bolsa");
        precioPorBolsa = parseFloat(precioPorBolsa);
        while(!(precioPorBolsa > 0))
        {
            precioPorBolsa = prompt("Ingrese un precio mas elevado por bolsa");
            precioPorBolsa = parseFloat(precioPorBolsa);
        }

        acumuladorBolsas = cantidadDeBolsas + acumuladorBolsas;
        acumuladorPrecio = precioPorBolsa + acumuladorPrecio;

        respuesta = confirm("Desea seguir ingresando productos?")

        switch(tipo)
        {
        case "arena":
            acumuladorBolsasArena = cantidadDeBolsas + acumuladorBolsasArena;
            acumuladorPrecioArena = precioPorBolsa + acumuladorPrecioArena;
            break;

        case "cal":
            acumuladorBolsasCal = cantidadDeBolsas + acumuladorBolsasCal;
            acumuladorPrecioCal = precioPorBolsa + acumuladorBolsasCal;
            break;

        case "cemento":
            acumuladorBolsasCemento = cantidadDeBolsas + acumuladorBolsasCemento;
            acumuladorPrecioCemento = precioPorBolsa + acumuladorPrecioCemento;
            break;

        }

    }
    if (acumuladorBolsas > 10) 
    {
      descuento = acumuladorPrecio * 0.85;
    }
    else
    {
      if (acumuladorBolsas > 30) 
      {
          descuento = acumuladorPrecio * 0.75;
      }
    }

    if(acumuladorBolsasArena > acumuladorBolsasCemento && acumuladorBolsasArena > acumuladorBolsasCal)
    {
        tipoMasBolsas = "arena";
    }
    else
    {
        if (acumuladorBolsasCal > acumuladorBolsasArena && acumuladorBolsasCal > acumuladorBolsasCemento) 
        {
            tipoMasBolsas = "cal";
        }
        else
        {
            tipoMasBolsas = "cemento";
        }
    }

    if (acumuladorPrecioArena > acumuladorPrecioCemento && acumuladorPrecioArena > acumuladorPrecioCal) 
    {
        tipoMasCaro = "arena";
    }
    else
    {
        if (acumuladorPrecioCemento > acumuladorPrecioArena && acumuladorPrecioCemento > acumuladorPrecioCal) 
        {
            tipoMasCaro = "cemento";
        }
        else
        {
            tipoMasCaro = "cal";
        }
    }

  importeTotal = acumuladorPrecio * acumuladorBolsas;
  ImporteConDescuento = importeTotal - descuento;

  document.write(`El importe total es de ${importeTotal}$ <br>
   El importe con descuento es de ${ImporteConDescuento} <br>
   El tipo con mas cantidad de bolsas es de ${tipoMasBolsas} <br>
   El tipo mas caro es ${tipoMasCaro}`)

}
