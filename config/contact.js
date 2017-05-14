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