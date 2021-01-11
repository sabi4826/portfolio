window.addEventListener("load", sidenVises);

function sidenVises() {
	document.querySelector("#cv_billede").addEventListener("click", klik);
}

function klik() {
	console.log("klikFoto");
	document.querySelector(".foto").classList.add("drej");
	document.querySelector("#cv_billede").removeEventListener("click", klik);
	this.addEventListener("animationend", genstart);
}

function genstart() {
	console.log("genstart");
	this.removeEventListener("animationend", genstart);
	document.querySelector(".foto").classList.remove("drej");
	document.querySelector("#cv_billede").addEventListener("click", klik)
}
