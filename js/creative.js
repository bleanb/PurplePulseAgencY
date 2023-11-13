
//Pone el titulo con TYPED
document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed('.typed', {
        strings: ['<p class="titulo-essential-neon">PURPLE PULSE CREATIVE</p>'],
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar
	    showCursor: false, // Mostrar cursor palpitanto
	    contentType: 'html', // 'html' o 'null' para texto sin formato
    });
});

// Obtener referencias a los Bloques
const growthMarketingLink = document.querySelector(".essential-li:nth-child(1) .essential-link");
const contentScriptsLink = document.querySelector(".essential-li:nth-child(2) .essential-link");
const VideoEditingLink = document.querySelector(".essential-li:nth-child(3) .essential-link");
const MarketingInfluencersLink = document.querySelector(".essential-li:nth-child(4) .essential-link");
const MarketingAfiliadosLink = document.querySelector(".essential-li:nth-child(5) .essential-link");
const SEOLink = document.querySelector(".essential-li:nth-child(6) .essential-link");

// Obtener referencias de los contenedores de video 
const textoExplicativo1 = document.querySelector(".video-explicativo1");
const textoExplicativo2 = document.querySelector(".video-explicativo2");
const textoExplicativo3 = document.querySelector(".video-explicativo3");
const textoExplicativo4 = document.querySelector(".video-explicativo4");
const textoExplicativo5 = document.querySelector(".video-explicativo5");
const textoExplicativo6 = document.querySelector(".video-explicativo6");
//Obtener referencias de los videos
const miVideo1 = document.getElementById('miVideo1');
const miVideo2 = document.getElementById('miVideo2');
const miVideo3 = document.getElementById('miVideo3');
const miVideo4 = document.getElementById('miVideo4');
const miVideo5 = document.getElementById('miVideo5');
const miVideo6 = document.getElementById('miVideo6');

//Creo Array
var ArraydeTextos=[];
var ArraydeLinks=[];
var ArrayVideos=[];

// Inicializar la opacidad en 0 para los textos explicativos
textoExplicativo2.style.opacity = 0;
textoExplicativo3.style.opacity = 0;
textoExplicativo4.style.opacity = 0;
textoExplicativo5.style.opacity = 0;
textoExplicativo6.style.opacity = 0;

//Inicializo los index de los texto
textoExplicativo2.style.zIndex = 0;
textoExplicativo3.style.zIndex = 0;
textoExplicativo4.style.zIndex = 0;
textoExplicativo5.style.zIndex = 0;
textoExplicativo6.style.zIndex = 0;

//Inicio la pagia con el bloque uno seleccionado
fadeIn(textoExplicativo1);
textoExplicativo1.style.zIndex = 1;
growthMarketingLink.parentElement.classList.add('clicked');

//************************************************************************************************************ */
//BLOQUE 1
growthMarketingLink.addEventListener("click", function (event) {
    event.preventDefault();

    ArraydeTextos = [textoExplicativo2,textoExplicativo3,textoExplicativo4,textoExplicativo5,textoExplicativo6];
    ArraydeLinks = [contentScriptsLink,VideoEditingLink,MarketingInfluencersLink,MarketingAfiliadosLink,SEOLink];
    ArrayVideos = [miVideo2,miVideo3,miVideo4,miVideo5,miVideo6];
    
    for(let b = 0; b < ArrayVideos.length; b++){
        if(!ArrayVideos[b].paused){
            pausarVideo(ArrayVideos[b]);
        } 
    }
    miVideo1.currentTime = 0;

    for (let i = 0; i < ArraydeTextos.length; i++) {

        ArraydeTextos[i].style.zIndex = 0 ;

        if(ArraydeTextos[i].style.opacity >= 0.99){

            fadeOut(ArraydeTextos[i]);
            fadeIn(textoExplicativo1);
            textoExplicativo1.style.zIndex = 3;
            growthMarketingLink.parentElement.classList.add('clicked');
            for(let a = 0; a < ArraydeLinks.length; a++){
                ArraydeLinks[a].parentElement.classList.remove('clicked');
            }

        }

    }

});
//************************************************************************************************************/
//BLOQUE 2
contentScriptsLink.addEventListener("click", function (event) {
    event.preventDefault();

    ArraydeTextos= [textoExplicativo1,textoExplicativo3,textoExplicativo4,textoExplicativo5,textoExplicativo6];
    ArraydeLinks = [growthMarketingLink,VideoEditingLink,MarketingInfluencersLink,MarketingAfiliadosLink,SEOLink];
    ArrayVideos = [miVideo1,miVideo3,miVideo4,miVideo5,miVideo6];
    
    for(let b = 0; b < ArrayVideos.length; b++){
        if(!ArrayVideos[b].paused){
            pausarVideo(ArrayVideos[b]);
        } 
    }
    miVideo2.currentTime = 0;

    for (let i = 0; i < ArraydeTextos.length; i++) {

        ArraydeTextos[i].style.zIndex = 0 ;

        if(ArraydeTextos[i].style.opacity >= 0.99){

            fadeOut(ArraydeTextos[i]);
            fadeIn(textoExplicativo2);
            textoExplicativo2.style.zIndex = 3;
            contentScriptsLink.parentElement.classList.add('clicked');

            for(let a = 0; a < ArraydeLinks.length; a++){
                ArraydeLinks[a].parentElement.classList.remove('clicked');
            }

        }

    }
});
//************************************************************************************************************/
//BLOQUE 3
VideoEditingLink.addEventListener("click", function (event) {
    event.preventDefault();

    ArraydeTextos= [textoExplicativo1,textoExplicativo2,textoExplicativo4,textoExplicativo5,textoExplicativo6];
    ArraydeLinks = [growthMarketingLink,contentScriptsLink,MarketingInfluencersLink,MarketingAfiliadosLink,SEOLink];
    ArrayVideos = [miVideo1,miVideo2,miVideo4,miVideo5,miVideo6];
    
    for(let b = 0; b < ArrayVideos.length; b++){
        if(!ArrayVideos[b].paused){
            pausarVideo(ArrayVideos[b]);
        } 
    }
    miVideo3.currentTime = 0;
    
    for (let i = 0; i < ArraydeTextos.length; i++) {

        ArraydeTextos[i].style.zIndex = 0 ;

        if(ArraydeTextos[i].style.opacity >= 0.99){

            fadeOut(ArraydeTextos[i]);
            fadeIn(textoExplicativo3);
            textoExplicativo3.style.zIndex = 3 ;
            VideoEditingLink.parentElement.classList.add('clicked');

            for(let a = 0; a < ArraydeLinks.length; a++){
                ArraydeLinks[a].parentElement.classList.remove('clicked');
            }

        }

    }
});
//************************************************************************************************************/
//BLOQUE 4
MarketingInfluencersLink.addEventListener("click", function (event) {
    event.preventDefault();

    ArraydeTextos= [textoExplicativo1,textoExplicativo2,textoExplicativo3,textoExplicativo5,textoExplicativo6];
    ArraydeLinks = [growthMarketingLink,contentScriptsLink,VideoEditingLink,MarketingAfiliadosLink,SEOLink];
    ArrayVideos = [miVideo2,miVideo3,miVideo1,miVideo5,miVideo6];
    
    for(let b = 0; b < ArrayVideos.length; b++){
        if(!ArrayVideos[b].paused){
            pausarVideo(ArrayVideos[b]);
        } 
    }
    miVideo4.currentTime = 0;

    for (let i = 0; i < ArraydeTextos.length; i++) {

        ArraydeTextos[i].style.zIndex = 0 ;

        if(ArraydeTextos[i].style.opacity >= 0.99){

            fadeOut(ArraydeTextos[i]);
            fadeIn(textoExplicativo4);
            textoExplicativo4.style.zIndex = 3 ;
            MarketingInfluencersLink.parentElement.classList.add('clicked');

            for(let a = 0; a < ArraydeLinks.length; a++){
                ArraydeLinks[a].parentElement.classList.remove('clicked');
            }
            
        }
    }
});
//************************************************************************************************************/
//BLOQUE 5
MarketingAfiliadosLink.addEventListener("click", function (event) {
    event.preventDefault();

    ArraydeTextos= [textoExplicativo1,textoExplicativo2,textoExplicativo3,textoExplicativo4,textoExplicativo6];
    ArraydeLinks = [growthMarketingLink,contentScriptsLink,VideoEditingLink,MarketingInfluencersLink,SEOLink];
    ArrayVideos = [miVideo2,miVideo3,miVideo4,miVideo1,miVideo6];
    
    for(let b = 0; b < ArrayVideos.length; b++){
        if(!ArrayVideos[b].paused){
            pausarVideo(ArrayVideos[b]);
        } 
    }
    miVideo5.currentTime = 0;

    for (let i = 0; i < ArraydeTextos.length; i++) {

        ArraydeTextos[i].style.zIndex = 0 ;

        if(ArraydeTextos[i].style.opacity >= 0.99){

            fadeOut(ArraydeTextos[i]);
            fadeIn(textoExplicativo5);
            textoExplicativo5.style.zIndex = 3 ;
            MarketingAfiliadosLink.parentElement.classList.add('clicked');

            for(let a = 0; a < ArraydeLinks.length; a++){
                ArraydeLinks[a].parentElement.classList.remove('clicked');
            }

        }
    }
});
//************************************************************************************************************/
//BLOQUE 6
SEOLink.addEventListener("click", function (event) {
    event.preventDefault();

    ArraydeTextos= [textoExplicativo1,textoExplicativo2,textoExplicativo3,textoExplicativo4,textoExplicativo5];
    ArraydeLinks = [growthMarketingLink,contentScriptsLink,VideoEditingLink,MarketingInfluencersLink,MarketingAfiliadosLink];
    ArrayVideos = [miVideo2,miVideo3,miVideo4,miVideo5,miVideo1];
    
    for(let b = 0; b < ArrayVideos.length; b++){
        if(!ArrayVideos[b].paused){
            pausarVideo(ArrayVideos[b]);
        } 
    }
    miVideo6.currentTime = 0;

    for (let i = 0; i < ArraydeTextos.length; i++) {

        ArraydeTextos[i].style.zIndex = 0 ;

        if(ArraydeTextos[i].style.opacity >= 0.99){

            fadeOut(ArraydeTextos[i]);
            fadeIn(textoExplicativo6);
            textoExplicativo6.style.zIndex = 3 ;
            SEOLink.parentElement.classList.add('clicked');
            
            for(let a = 0; a < ArraydeLinks.length; a++){
                ArraydeLinks[a].parentElement.classList.remove('clicked');
            }

        }

    }

});
//************************************************************************************************************/
//************************************************************************************************************/
//************************************************************************************************************/
//************************************************************************************************************/
//FUNCIONES
// Función para ocultar el contenedor del video
function fadeOut(element) {
    let opacity = 1;
    const fadeOutInterval = setInterval(function () {
        if (opacity <= 0) {
            clearInterval(fadeOutInterval);
        } else {
            opacity -= 0.5; 
            element.style.opacity = opacity;
        }
    }, 100); 
}
// Función para mostrar el contenedor del video
function fadeIn(element) {
    let opacity = 0;
    const fadeInInterval = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(fadeInInterval);
        } else {
            opacity += 0.09; 
            element.style.opacity = opacity;
        }
    }, 100); 
}

// Función para pausar el video
function pausarVideo(video) {
    if (!video.paused) {
        video.pause();
    }
}
