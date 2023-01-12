/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo memoria para guardar la variable nombre

	let nombre;

	// guardo en la variable nombre el texto que escriba el usuario en el prompt

	nombre = prompt ("ingrese su nombre");

//copio el nombre guardado en la variable dentro de la caja de texto embebida en la pagina html

document.getElementById("txtIdNombre").value  = nombre;


alert(nombre)
}

