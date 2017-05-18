// YOUTUBE
jyoutube = true; // Mostrar Youtube
jyrevisar = true; // Revisado frequentemente
jytranslate = true; // Atención en varios idiomas
jymoney = false; // Monetizado
jyshop = false; // Es una tienda donde comprar articulos
jyenterprise = false; // Medio de contacto con empresas
jyprivado = false; // Medio privado
jyverify = false; // Usuario verificado (se honesto)
jyglalos = true; // ¿Hay chistes y sarcasmo?



// YOUTUBE CODE
if (jyrevisar === false) {
	document.getElementById("yrevisar").style.display = "none"; // Eliminar yrevisar
}
if (jytranslate === false) {
	document.getElementById("ytranslate").style.display = "none"; // Eliminar ytranslate
}
if (jymoney === false) {
	document.getElementById("ymoney").style.display = "none"; // Eliminar ymoney
}
if (jyshop === false) {
	document.getElementById("yshop").style.display = "none"; // Eliminar yshop
}
if (jyenterprise === false) {
	document.getElementById("yenterprise").style.display = "none"; // Eliminar yenterprise
}
if (jyprivado === false) {
	document.getElementById("yprivado").style.display = "none"; // Eliminar yprivado
}
if (jyverify === false) {
	document.getElementById("yverify").style.display = "none"; // Eliminar yverify
}
if (jyglalos === false) {
	document.getElementById("yglalos").style.display = "none"; // Eliminar yglalos
}
// FIN YOUTUBE CODE



// TWITTER
twitter = "https://twitter.com/Lekam_yt"; // Link del twitter al que redirigir
function twitterredirect() {
    window.location =twitter; //Redireccionamiento al twitter seleccionado
}


// PATREON
patreon = "#"; // Link del patreon al que redirigir
function patreonredirect() {
    window.location =patreon; //Redireccionamiento al patreon seleccionado
}

// TWITCH 
twitch = "https://www.twitch.tv/lekamyt"; // Link del twitch al que redirigir
twitchsub = "#" // Link de subscripción en twitch
function twitchredirect() {
    window.location =twitch; //Redireccionamiento al twitch seleccionado
}
function twitchsubr() {
	window.location =twitchsub; //Redireccionamiento a la página de subscripción de twitch
}

// EMAIL
email = "minemuncorreo@gmail.com" // El correo electronico
mailtoemail = "mailto:minemuncorreo@gmail.com" // El correo electronico con mailto: (ejemplo: "mailto:hola@gmou.yp")
function sendemail() {
	window.location =mailtoemail;
}

// FACEBOOK
facebook = "#" // Link a facebook
tipo = "grupo" // Escribe si es "grupo" o si es "pagina"
function facebookredirect() {
	window.location =facebook;
}

// GOOGLE +
google = "https://plus.google.com/u/0/100636659828176968009" // Link a Google +
function googleredirect() {
	window.location =google;
}

// REdDIT
reddit = "#" // Link a Reddit
function redditredirect() {
	window.location =reddit;
}