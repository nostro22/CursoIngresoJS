/*Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .*/

function mostrar()
{
	var edadIngresada = txtIdEdad.value;
	var finalAdolecencia = 17; 
	var inicioAdolecencia= 13;
	
	edadIngresada = parseInt(edadIngresada);	
	finalAdolecencia = parseInt(17); 
	var inicioAdolecencia= parseInt(13);


	 if (edadIngresada <= finalAdolecencia && edadIngresada >= inicioAdolecencia)
	{
		alert("Es adolecente");	
	}


}//FIN DE LA FUNCIÓN