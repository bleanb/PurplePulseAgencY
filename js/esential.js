document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed('.typed', {
        strings: ['<p class="titulo-essential-neon">PURPLE PULSE ESSENTIAL</p>'],
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

// Obtener referencias a los elementos de texto explicativo
const textoExplicativo1 = document.querySelector(".video-explicativo1");
const textoExplicativo2 = document.querySelector(".video-explicativo2");
const textoExplicativo3 = document.querySelector(".video-explicativo3");
const miVideo1 = document.getElementById('miVideo1');
const miVideo2 = document.getElementById('miVideo2');
const miVideo3 = document.getElementById('miVideo3');
//Creo Array
var ArraydeTextos=[];

//Inicio la pagia con el bloque uno seleccionado
fadeIn(textoExplicativo1);
textoExplicativo1.style.zIndex = 3;
growthMarketingLink.parentElement.classList.add('clicked');

//*************************************************************************************************************** */
//BLOQUE 1
growthMarketingLink.addEventListener("click", function (event) {
    event.preventDefault();

    if(!miVideo2.paused || !miVideo3.paused){
        pausarVideo(miVideo2);
        pausarVideo(miVideo3); 
    }
    
    ArraydeTextos = [textoExplicativo2,textoExplicativo3];

    for (let i = 0; i < ArraydeTextos.length; i++) {

        if(ArraydeTextos[i].style.opacity >= 0.99){

            fadeOut(ArraydeTextos[i]);
            fadeIn(textoExplicativo1);
            textoExplicativo1.style.zIndex = 3;
            textoExplicativo2.style.zIndex = 0;
            textoExplicativo3.style.zIndex = 0;
            growthMarketingLink.parentElement.classList.add('clicked');
            contentScriptsLink.parentElement.classList.remove('clicked');
            VideoEditingLink.parentElement.classList.remove('clicked'); 

        }
    }
});
//*************************************************************************************************************** */
//BLOQUE 2
contentScriptsLink.addEventListener("click", function (event) {
    event.preventDefault();

    if(!miVideo1.paused || !miVideo3.paused){
        pausarVideo(miVideo1);
        pausarVideo(miVideo3); 
    }
  

    ArraydeTextos= [textoExplicativo1,textoExplicativo3];

    for (let i = 0; i < ArraydeTextos.length; i++) {

        if(ArraydeTextos[i].style.opacity >= 0.99){

            fadeOut(ArraydeTextos[i]);
            fadeIn(textoExplicativo2);
            textoExplicativo2.style.zIndex = 3;
            textoExplicativo1.style.zIndex = 0;
            textoExplicativo3.style.zIndex = 0;
            contentScriptsLink.parentElement.classList.add('clicked');
            growthMarketingLink.parentElement.classList.remove('clicked');
            VideoEditingLink.parentElement.classList.remove('clicked');

        }
    }
});
//*************************************************************************************************************** */
//BLOQUE 3
VideoEditingLink.addEventListener("click", function (event) {
    event.preventDefault();

    if(!miVideo1.paused || !miVideo2.paused){
        pausarVideo(miVideo1);
        pausarVideo(miVideo2); 
    }
    
    ArraydeTextos= [textoExplicativo1,textoExplicativo2];

    for (let i = 0; i < ArraydeTextos.length; i++) {

        if(ArraydeTextos[i].style.opacity >= 0.99){

            fadeOut(ArraydeTextos[i]);
            fadeIn(textoExplicativo3);
            textoExplicativo3.style.zIndex = 3;
            textoExplicativo1.style.zIndex = 0;
            textoExplicativo2.style.zIndex = 0;
            VideoEditingLink.parentElement.classList.add('clicked');
            growthMarketingLink.parentElement.classList.remove('clicked');
            contentScriptsLink.parentElement.classList.remove('clicked');

        }
    }
});
//*************************************************************************************************************** */
//FUNCIONES

// Función para pausar el video
function pausarVideo(video) {
    if (!video.paused) {
        video.pause();
    }
}
// Función para desaparecer el video
function fadeOut(element) {
    console.log('Fade out started');
    let opacity = 1;
    const fadeOutInterval = setInterval(function () {
        if (opacity <= 0) {
            clearInterval(fadeOutInterval);
        } else {
            opacity -= 0.1;
            element.style.opacity = opacity;
        }
    }, 100);
}
// Función para aparecer el video
function fadeIn(element) {
    let opacity = 0;
    const fadeInInterval = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(fadeInInterval);
        } else {
            opacity += 0.08; 
            element.style.opacity = opacity;
        }
    }, 100); 
}
