// YOUTUBE
youtube = true; // Mostrar Youtube
yrevisar = true; // Revisado frequentemente
ytranslate = true; // Atención en varios idiomas
ymoney = false; // Monetizado
yshop = false; // Es una tienda donde comprar articulos
yenterprise = false; // Medio de contacto con empresas
yprivado = false; // Medio privado
yverify = false; // Usuario verificado (se honesto)
yglalos = true; // ¿Hay chistes y sarcasmo?

if (yrevisar === false) {
	document.getElementById("yrevisar").style.display = "none"; // Código de prueba
}



// TWITTER
twitter = "https://twitter.com/Lekam_yt"; // Link del twitter al que redirigir
function twitterredirect() {
    window.location =twitter; //Redireccionamiento al twitter seleccionado
}


// PATREON
patreon = "#"; // Link del twitter al que redirigir
function patreonredirect() {
    window.location =patreon; //Redireccionamiento al patreon seleccionado
}