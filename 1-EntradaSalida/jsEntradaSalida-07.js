/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 




function sumar()
{	
	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	var tipoOperacion;
	var resultado;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;
	tipoOperacion = "suma";
			
		alert("El resultado de la "+ tipoOperacion + " es igual a " + resultado);
}

function restar()
{
	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	var tipoOperacion;
	var resultado;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno - numeroDos;
	tipoOperacion = "resta";
		
		alert("El resultado de la "+ tipoOperacion + " es igual a " + resultado);

}

function multiplicar()
{ 
	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	var tipoOperacion;
	var resultado;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno * numeroDos;
	tipoOperacion = "multiplicacion"
		
		alert("El resultado de la "+ tipoOperacion + " es igual a " + resultado);
}

function dividir()
{
	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	var tipoOperacion;
	var resultado;
		
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno / numeroDos;
	tipoOperacion = "division";

		alert("El resultado de la "+ tipoOperacion + " es igual a " + resultado);
}

