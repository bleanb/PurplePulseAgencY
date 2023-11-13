document.getElementById("year").innerHTML = new Date().getFullYear();
        document.addEventListener("DOMContentLoaded", function () {
            // Encuentra todos los enlaces con la clase "scroll-link"
            var scrollLinks = document.querySelectorAll(".scroll-link");

            // Agrega un evento de clic a cada enlace
            scrollLinks.forEach(function (link) {
                link.addEventListener("click", function (event) {
                    event.preventDefault();

                    // Obtiene el valor del atributo href del enlace
                    var targetId = this.getAttribute("href").substring(1);

                    // Encuentra el elemento con el id correspondiente
                    var targetElement = document.getElementById(targetId);

                    // Calcula la posición de desplazamiento, restando 200px
                    var offset = targetElement.getBoundingClientRect().top - 130;

                    // Realiza el desplazamiento suave hacia la posición ajustada
                    window.scrollTo({
                        top: offset + window.scrollY,
                        behavior: "smooth"
                    });
                });
            });
        });