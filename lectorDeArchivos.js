"use strict";

const leer = (inputQuery,queryDeMuestra)=>{
	const archivo = document.querySelector(inputQuery);
	leerArchivo(archivo.files,queryDeMuestra);
};

const leerArchivo = (ar,query) =>{
	for (let i = 0; i < ar.length ; i++) {
		const reader = new FileReader();
	 	if (ar[i].type == "text/plain"){
	 		reader.readAsText(ar[i]);
	 		reader.addEventListener("load",(e)=>{
	 			document.querySelector(query).textContent+=JSON.parse(e.currentTarget.result);
	 		});
	 	}
	 	else if (ar[i].type == "image/*"){
			reader.readAsDataURL(ar[i]);
	 		reader.addEventListener("load",(e)=>{
	 			document.querySelector(query).innerHTML+=`<img src=${e.currentTarget.result} alt="Imagen cargada")`;
	 		});
	 	}
	 } 
};