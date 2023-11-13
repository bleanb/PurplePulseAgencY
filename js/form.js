const $form = document.getElementById('miFormulario');
const $form2 = document.getElementById('newsletter-form');

$form.addEventListener('submit', handelSubmit);

async function handelSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        this.reset();
        Swal.fire({
            title: "Gracias por contactarnos!",
            text: "te escribiremos pronto :D",
            icon: "success",
            background: "#774BC4",
            showConfirmButton: false,
            timer: 3500
        });
    }
}

$form2.addEventListener('submit', handelSubmit2);

async function handelSubmit2(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });


    if (response.ok) {
        this.reset();
        Swal.fire({
            title: "Gracias por subscibirte al Newsletter!",
            text: "Te enviaremos un mail semanal con el Newsletter",
            icon: "success",
            background: "#774BC4",
            backdrop: `
                rgba(0,0,123,0.4)
                url("../assets/img/cat-nyan-cat.gif")
                left center
                no-repeat
                        `,
                showConfirmButton: false,
                timer: 3500
        });
    }
}




