/*Enunciado:
Al ingresar una edad debemos informar solo si la persona es mayor de edad*/

function mostrar()
{

	var edadIngresada = txtIdEdad.value;
	var mayoriaEdad = 18; //Se asume que la mayoria de edad es si es superior o igual a 18
	
	edadIngresada = parseInt(edadIngresada);	

	if(edadIngresada >= mayoriaEdad) 
	{
		alert("Es mayor de edad");	
	}	
	

}//FIN DE LA FUNCIÓN