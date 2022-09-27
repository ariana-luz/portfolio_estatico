/*document.getElementById(id)
document.getElementsByTagName(name)
document.getElementsByClassName(name)

element.atributte=login

 onclick: el usario hizo clic en un elemento*/


function cambiar_parrafo() {
	document.getElementById("edit-acercade").style.display="block";
	let texto = document.getElementById("text-acercade").innerText;
	console.log(texto);
}

function myFunction2(valor) {
	document.getElementById("text-acercade").innerText=valor;
}

function logMessage(message) {
	console.log(message + "<br>");
}

document.addEventListener('keyup', (e) => {
	logMessage(`Key "${e.key}" released [event: keyup]`);
	if (e.key=="Enter"){
	document.getElementById("edit-acercade").style.display="none"
	}
});

function cambiar_foto() {
	document.getElementById("edit-foto").style.display="block";
	let image = document.getElementById("avatar");
}

function showFile(input){
	let file = input.files[0];
	alert(`File name: ${file.name}`); 

	let reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function() {
	console.log(reader.result);
	document.getElementById("avatar").src=reader.result;
	};
	reader.onerror=function(){
	console.log(reader.error);
	};
	document.getElementById("edit-foto").style.display="none"
}

