/**/
const formulario =  document.forms[0];

const inputComentario = document.querySelector('#comentario');

const comentariosRealizados = document.querySelector('.comentarios');

const comentariosEnMemoria = obtenerComentariosRealizados();

function guardarComentario(comentario) {
    
    comentariosEnMemoria.push(comentario);
    
    localStorage.setItem('comentariosRealizados', JSON.stringify(comentariosEnMemoria))

}

function obtenerComentariosRealizados() {
    
    let comentarioAlmacenado = JSON.parse(localStorage.getItem('comentariosRealizados'));

    if(!comentarioAlmacenado){
        comentarioAlmacenado = [];
    }

    comentariosRealizados.innerHTML = `<p>${comentarioAlmacenado.join(" - ")}</p>`

    return comentarioAlmacenado;
}

/*
- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

*/

formulario.addEventListener('submit', function(event){
  

    guardarComentario(inputComentario.value);
    
    formulario.reset();
});



/*
cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/