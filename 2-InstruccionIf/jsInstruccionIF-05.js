/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/

function mostrar()
{
	var edadIngresada;
	var finalAdolecencia; 
	var inicioAdolecencia;


	edadIngresada = txtIdEdad.value;
	finalAdolecencia = 17; 
	 inicioAdolecencia= 13;
	
	edadIngresada = parseInt(edadIngresada);	
	finalAdolecencia = parseInt(17); 
	var inicioAdolecencia= parseInt(13);


	 if (edadIngresada > finalAdolecencia || edadIngresada < inicioAdolecencia)
	{
		alert("No es adolecente");	
	}


}//FIN DE LA FUNCIÓN