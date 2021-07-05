/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe = txtIdImporte.value;
    importeTotal = parseInt(importe);
    txtIdResultado.value = importe*0.75;	
}
