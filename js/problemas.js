let free = false;

const validarCliente = (time)=>{
	let edad = prompt("Cual es tu edad?");
	if (edad > 18) {
		if (time >= 2 && < 7 && free == false) {
			alert("Podes pasar gratis");
			free = true;
		} else {
			alert("Podes pasar gratis, pero tenes que pagar la entrada");
		}
	
	} else {
		alert("No podes pasar por ser menor");
	}
}

validarCliente(2);

/*const consultaEntrada (edad, tiempo)=>{
	let edad = prompt("Que edad tenes?");
	let tiempo = prompt("Que hora es?");

	if (edad >= 18 && tiempo <= 26 && entradaGratis > 0) {
		if (tiempo > 24) {
			tiempo -= 24;	
		}
		alert(`Pudiste pasar y tenes entrada gratis, por entrar a las ${tiempo}:00Hs`);
		entradaGratis --;
		if (tiempo < 24) {
			tiempo += 24;
			tiempo += 0.15;
		}	
	}
	else if (edad < 18){
		alert("No podes entrar por ser menor");
		tiempo += 0.15;
	}
	else if (tiempo > 26 || entradaGratis == 0 && edad > 18) {
		alert("Podes entrar pero tener que pagar la entrada");
	}
}

consultaEntrada(22,22);*/