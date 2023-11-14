// Captura los elementos relevantes
const aboutUs = document.querySelector(".about-us");
const botonReadMore = document.getElementById("boton-read-more");
const botonReadLess = document.createElement("button");
const parrafonuevo2 = document.getElementById("parrafo-oculto2");
const parrafonuevo3 = document.getElementById("parrafo-oculto3");
const decoracionPreExpand = document.getElementById("decoracion-about-us-preexpand"); 
const decoracionExpand = document.getElementById("decoracion-about-us-expand");
const miVideoIndex = document.getElementById('miVideoIndex');

// Variable para rastrear el estado
let isExpanded = false;

// Almacena la posición original de desplazamiento
let originalScrollPosition = 0;



if(window.innerWidth < 1000){
// Agrega un controlador de eventos al botón "Read More"
botonReadMore.addEventListener("click", () => {
  if (!isExpanded) {
    miVideoIndex.currentTime = 0;
    // Almacena la posición original de desplazamiento
    originalScrollPosition = window.scrollY;

    // Expande el div "about-us" y cambia el texto del botón
    aboutUs.style.height = "1000px";
    botonReadMore.textContent = "Mostrar -";
    botonReadMore.style.marginTop = "-100px"; // Cambia la posición del botón Read More
    botonReadMore.id = "boton-read-less"; // Cambia el ID del botón Read More
    botonReadLess.style.display = "block"; // Muestra el botón Read Less
    parrafonuevo2.style.display= "block";
    parrafonuevo3.style.display= "block";
    decoracionPreExpand.style.display= "none";
    decoracionExpand.style.display= "block";
    aboutUs.appendChild(botonReadLess); // Agrega el botón Read Less al div "about-us"

    // Desplaza la página hacia abajo 400px con desplazamiento suave
    window.scrollBy({
      top: 280,
      behavior: "smooth"
    });
  } else {
    console.log("pausar el video")
    pausarVideo(miVideoIndex);
    // Restaura el div "about-us" a su tamaño original
    aboutUs.style.height = "700px";
    botonReadMore.textContent = "+ INFO";
    botonReadMore.style.marginTop = "-230px"; // Restaura la posición del botón Read More
    botonReadMore.id = "boton-read-more"; // Restaura el ID del botón Read More
    botonReadLess.style.display = "none"; // Oculta el botón Read Less
    parrafonuevo2.style.display= "none";
    parrafonuevo3.style.display= "none";
    decoracionPreExpand.style.display= "block";
    decoracionExpand.style.display= "none";
    // Desplaza la página al elemento "about-us" menos 200px
    const aboutUsElement = document.getElementById("about-us");
    window.scrollTo({
      top: aboutUsElement.offsetTop -150,
      behavior: "smooth"
    });
  }

  // Cambia el estado
  isExpanded = !isExpanded;
});
}
else{
  botonReadMore.addEventListener("click", () => {
    if (!isExpanded) {
      miVideoIndex.currentTime = 0;
      // Almacena la posición original de desplazamiento
      originalScrollPosition = window.scrollY;
  
      // Expande el div "about-us" y cambia el texto del botón
      aboutUs.style.height = "1000px";
      botonReadMore.textContent = "Mostrar -";
      botonReadMore.style.marginTop = "-100px"; // Cambia la posición del botón Read More
      botonReadMore.id = "boton-read-less"; // Cambia el ID del botón Read More
      botonReadLess.style.display = "block"; // Muestra el botón Read Less
      parrafonuevo2.style.display= "block";
      parrafonuevo2.style.marginTop= "200px";
      parrafonuevo3.style.display= "block";
      aboutUs.appendChild(botonReadLess); // Agrega el botón Read Less al div "about-us"
  
      // Desplaza la página hacia abajo 400px con desplazamiento suave
      window.scrollBy({
        top: 280,
        behavior: "smooth"
      });
    } else {
      console.log("pausar el video")
      pausarVideo(miVideoIndex);
      // Restaura el div "about-us" a su tamaño original
      aboutUs.style.height = "700px";
      botonReadMore.textContent = "+ INFO";
      botonReadMore.style.marginTop = "-230px"; // Restaura la posición del botón Read More
      botonReadMore.id = "boton-read-more"; // Restaura el ID del botón Read More
      botonReadLess.style.display = "none"; // Oculta el botón Read Less
      parrafonuevo2.style.display= "none";
      parrafonuevo3.style.display= "none";
      // Desplaza la página al elemento "about-us" menos 200px
      const aboutUsElement = document.getElementById("about-us");
      window.scrollTo({
        top: aboutUsElement.offsetTop -150,
        behavior: "smooth"
      });
    }
  
    // Cambia el estado
    isExpanded = !isExpanded;
  });
}

// Función para pausar el video
function pausarVideo(video) {
  if (!video.paused) {
      video.pause();
  }
}




