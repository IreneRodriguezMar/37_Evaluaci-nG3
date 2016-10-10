//pide al usuario que escoja una de las tres variables
//pide al usuario 2 que escoja una de las tres variable 
//si escoje piedra u1 y u2 piedra empate
//si escoje piedra u1 y u2 papel u2 gana
//si escoje piedra u1 y u2 tijera u1 gana
//pide al usuario 1 que escoja una de las tres variables
//pide al usuario 2 que escoja una de las tres variables 
//si escoje papel u1 y u2 piedra u1 gana
//si escoje papel u1 y u2 papel empate
//si escoje papel u1 y u2 tijera u2 gana
//pide al usuario 1 que escoja una de las tres variables
//pide al usuario 2 que escoja una de las tres variables 
//si escoje tijera u1 y u2 piedra u2 gana
//si escoje tijera u1 y u2 papel u1 gana
//si escoje tijera u1 y tijera empate

for(i=1; i<= 3; i++){
	var usuario1 = prompt ('Escoje piedra, papel o tijera');
	var usuario2 = prompt ('Escoje piedra, papel o tijera');
	if (usuario1==='piedra'&& usuario2==='piedra'){
		alert('Empate');
	}
	else if(usuario1==='piedra'&& usuario2==='tijera'){
		alert('Usuario 1 Gana!')
	}
	else {
		(usuario1==='piedra'&& usuario2==='papel')
		alert('Usuario 2 Gana!')
	}
	
	//----------------------------------------
	
	
}
for(i=1; i<= 3; i++){
	var usuario1 = prompt ('Escoje piedra, papel o tijera');
	var usuario2 = prompt ('Escoje piedra, papel o tijera');
	if (usuario1==='papel' && usuario2==='piedra'){
		alert('Usuario 1 Gana!');
	}
	else if(usuario1==='papel' && usuario2==='tijera'){
		alert('Usuario 2 Gana!')
	}
	else {
		(usuario1==='papel' && usuario2==='papel')
		alert('Empate')
	}
	
}



