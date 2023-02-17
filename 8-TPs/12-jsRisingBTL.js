/*Manuel Quintana Miño DIV D Grupo 2
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	
 	let edad;
    let sexo;
    let estadoCivil;
    let sueldo;
    let legajo;
    let nacionalidad;

    edad = prompt("Ingrese su edad");
    while(edad < 18 || edad > 90)
    {
         edad = prompt("Ingrese su edad");
    }
    document.getElementById("txtIdEdad").value = edad;

    sexo = prompt("Ingrese su sexo");
    while(sexo != "F" && sexo != "M")
    {
        sexo = prompt("Ingrese su sexo");
    }
    document.getElementById("txtIdSexo").value = sexo

    estadoCivil = prompt("Ingrese su estado civil");
    while(estadoCivil != "Soltero" && estadoCivil != "Casado" &&
    estadoCivil != "Divorciado" && estadoCivil != "Viudo")
    {
        estadoCivil = prompt("Ingrese su estado civil");
    }
    document.getElementById("txtIdEstadoCivil").value = estadoCivil;

    sueldo = prompt("Ingrese su sueldo");
    while(sueldo < 80000)
    {
        sueldo = prompt("Ingrese su sueldo");
    }
    document.getElementById("txtIdSueldo").value = sueldo;
    
    legajo = prompt("Ingrese su legajo");
    while(legajo < 1000 || legajo > 9999 )
    {
        legajo = prompt("Ingrese su legajo");
    }
    document.getElementById("txtIdLegajo").value = legajo;

    nacionalidad = prompt("Ingrese su nacionalidad");
    while(nacionalidad != "A" && nacionalidad != "E"
    && nacionalidad != "N")
    {
        nacionalidad = prompt("Ingrese su nacionalidad");
    }
    document.getElementById("txtIdNacionalidad").value = nacionalidad
}
