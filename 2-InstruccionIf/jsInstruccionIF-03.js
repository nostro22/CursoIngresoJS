/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/

function mostrar()
{
	var edadIngresada = txtIdEdad.value;
	var mayoriaEdad = 18; //Se asume que la mayoria de edad es si es superior o igual a 18
	
	edadIngresada = parseInt(edadIngresada);	

	if(edadIngresada >= mayoriaEdad) 
	{
		alert("Es mayor de edad");	
	}	
	else if (edadIngresada< mayoriaEdad && edadIngresada>0)
	{
		alert("Es menor de edad");	
	}
	else
	{
		alert("Dato Invalido");	
	}

}//FIN DE LA FUNCIÓN