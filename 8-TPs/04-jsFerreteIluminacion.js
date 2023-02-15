/*Manuel Quintana Miño DIV D Grupo 2
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    /*
    let marca;
    const PRECIO = 35;
    let precioFinal;
    let ingresoBruto;

    lamparas = document.getElementById("txtIdCantidad").value;
    lamparas = parseInt(lamparas)
    marca = document.getElementById("Marca").value;

    if (lamparas > 5) 
    {
        precioFinal = PRECIO * lamparas * 0.50;
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
    else
    {
        if (lamparas == 5) 
        {
            if (marca == "ArgentinaLuz") 
            {
                precioFinal = PRECIO * lamparas * 0.60;
                document.getElementById("txtIdprecioDescuento").value = precioFinal;
            }
            else 
            {
                precioFinal = PRECIO * lamparas * 0.70;
                document.getElementById("txtIdprecioDescuento").value = precioFinal;
            }
        }
        if (lamparas == 4) 
            {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
                {
                    precioFinal = PRECIO * lamparas * 0.75;
                    document.getElementById("txtIdprecioDescuento").value = precioFinal;
                }
                else 
                {
                    precioFinal = PRECIO * lamparas * 0.80;
                    document.getElementById("txtIdprecioDescuento").value = precioFinal;
                }
            }
            if (lamparas == 3) 
                {
                    if (marca == "ArgentinaLuz") 
                    {
                        precioFinal = PRECIO * lamparas * 0.85;
                        document.getElementById("txtIdprecioDescuento").value = precioFinal;
                    }
                    else
                    {
                        if (marca == "FelipeLamparas") 
                        {
                            precioFinal = PRECIO * lamparas * 0.90;
                            document.getElementById("txtIdprecioDescuento").value = precioFinal;
                        }
                        else 
                        {
                            precioFinal = PRECIO * lamparas * 0.95;
                            document.getElementById("txtIdprecioDescuento").value = precioFinal;
                        }
                    }
                    
                }
    }
    if (precioFinal > 120) 
    {   
        ingresoBruto = precioFinal * .1
        document.getElementById("txtIdprecioDescuento").value = precioFinal + ingresoBruto;
        alert(`Los ingresos brutos son de ${ingresoBruto}`)
    }*/

    let marca;
    const PRECIO = 35;
    let precioFinal;
    let ingresoBruto;

    lamparas = document.getElementById("txtIdCantidad").value;
    lamparas = parseInt(lamparas)
    marca = document.getElementById("Marca").value;

    precioFinal = PRECIO * lamparas

    switch(lamparas)
    {
        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    precioFinal = precioFinal * 0.60;
                    document.getElementById("txtIdprecioDescuento").value = precioFinal;
                    break;
                default:
                    precioFinal = precioFinal * 0.70;
                    document.getElementById("txtIdprecioDescuento").value = precioFinal;
                    break;
            }
            break;
        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    precioFinal = precioFinal * 0.75;
                    document.getElementById("txtIdprecioDescuento").value = precioFinal;
                    break;
                default:
                    precioFinal = precioFinal * 0.80;
                    document.getElementById("txtIdprecioDescuento").value = precioFinal;
                    break;
            }
            break;
        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    precioFinal = precioFinal * 0.85;
                    document.getElementById("txtIdprecioDescuento").value = precioFinal;
                    break;
                case "FelipeLamparas":
                    precioFinal = precioFinal * 0.90;
                    document.getElementById("txtIdprecioDescuento").value = precioFinal;
                    break;
                default:
                    precioFinal = precioFinal * 0.95;
                    document.getElementById("txtIdprecioDescuento").value = precioFinal;
                     
            }
            break;
        case 2:
            document.getElementById("txtIdprecioDescuento").value = precioFinal;
            break;
        case 1:
            document.getElementById("txtIdprecioDescuento").value = precioFinal;
            break;

        default:
            precioFinal = precioFinal * 0.50;
            document.getElementById("txtIdprecioDescuento").value = precioFinal;
            break;
    }

    if (precioFinal > 120) 
    {   
        ingresoBruto = precioFinal * .1
        document.getElementById("txtIdprecioDescuento").value = precioFinal + ingresoBruto;
        alert(`Los ingresos brutos son de ${ingresoBruto}`)
    }       
}
