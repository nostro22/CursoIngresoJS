/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	var suma = parseInt(numeroUno)+parseInt(numeroDos);
	alert("La suma es " +suma);
}

