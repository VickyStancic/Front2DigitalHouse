window.addEventListener('load', function () {

    //Selecciono los nodos
    const valor = document.querySelector("#valor");
    const inicio = document.querySelector("#iniciar");
    const pausa = document.querySelector("#pausa");
    const detener = document.querySelector("#detener");
    const acelerar = document.querySelector("#acelerar");

    // inicializo el valor del contador y declaro cronometro
    let contador = 0;
    let cronometro;

    // funcion Renderizar para que se muestre "valor" por pantalla
    function renderizar() {
        valor.innerText = contador;
    }

    //  -------- INICIAR --------
    // funcion Iniciar
    function play() {
        cronometro = this.setInterval(() => {
            contador++;
            renderizar();
        }, 1000)
    }
    // -------------> boton iniciar
    inicio.addEventListener("click", () => {
        play()
    });

    // -------- PARAR --------
    // funcion Stop
    function stop() {
        clearInterval(cronometro);
        contador = 0;
        renderizar();
    }
    // -----> boton stop
    detener.addEventListener("click", () => {
        stop()
    });

    // -------- PAUSAR --------
    // funcion Pausar
    function pausar() {
        clearInterval(cronometro);
    }
    // -----> boton pausa
    pausa.addEventListener("click", () => {
        pausar()
    });

    // -------- ACELERAR --------
    // funcion Acelerar
    function aumentarVelocidad() {
        pausar();
        cronometro = this.setInterval(() => {
            contador++;
            renderizar();
        }, 500)
    }
    // -----> boton acelerar
    acelerar.addEventListener("click", () => {
        aumentarVelocidad()
    });

});


