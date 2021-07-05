/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDivisor = txtIdNumeroDivisor.value;
	var numeroDividendo = txtIdNumeroDividendo.value;
	var tipoOperacion;
	var resultado;

	numeroDivisor = parseInt(numeroDivisor);
	numeroDividendo = parseInt(numeroDividendo);
		
	resultado = numeroDividendo % numeroDivisor;
	
		alert("El resultado del resto es igual a " + resultado);
}
