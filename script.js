document.addEventListener('DOMContentLoaded', () => {
    /*Selecciona los elementos */
    const inputTarea = document. getElementById('nuevaTarea');
    const botonAgregar = document.getElementById('agregarTarea');
    const listaTareas = document.getElementById('listaTareas');

    botonAgregar.addEventListener('click', agregarNuevaTarea);

    function agregarNuevaTarea(){
        const textoTarea = inputTarea.value.trim(); /*Trim elimina los espacios en blanco al principio y al final */

        if (textoTarea === '') {
            mostrarMensajeError('Por favor, escribe una tarea.');
            return;
        }

        ocultarMensajeError();

        const nuevaList = document.createElement('li');
        const spanTarea = document.createElement('span');
        spanTarea.textContent = textoTarea;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', eliminarTarea);

        nuevaList.appendChild(spanTarea);
        nuevaList.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaList);

        inputTarea.value = ''; // Limpiar el campo de texto

        // Funcionalidad de marcar como completada directamente en el listener de la lista
        spanTarea.addEventListener('click', marcarComoCompletada);
    }

    function eliminarTarea(evento) {
        const botonEliminar = evento.target;
        const tareaLi = botonEliminar.parentNode;
        listaTareas.removeChild(tareaLi);
    }

    function marcarComoCompletada(evento) {
        const tareaSpan = evento.target;
        tareaSpan.parentNode.classList.toggle('completada');
    }

    function mostrarMensajeError(mensaje) {
        let mensajeError = document.querySelector('.mensaje-error');
        if (!mensajeError) {
            mensajeError = document.createElement('p');
            mensajeError.classList.add('mensaje-error');
            inputTarea.parentNode.insertBefore(mensajeError, botonAgregar.nextSibling);
        }
        mensajeError.textContent = mensaje;
        mensajeError.style.display = 'block';
    }

    function ocultarMensajeError() {
        const mensajeError = document.querySelector('.mensaje-error');
        if (mensajeError) {
            mensajeError.style.display = 'none';
        }
    }
});