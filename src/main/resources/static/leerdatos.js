document.addEventListener('DOMContentLoaded', () => {
    const frmRegistro = document.querySelector('#frmData');
    const datosMostradosDiv = document.querySelector('#datosMostrados');
    const btnGuardar = document.querySelector('#btnGuardar');

    // Manejar el evento de clic en el botón
    btnGuardar.addEventListener('click', async () => {
        // Prevenir el comportamiento por defecto del formulario
        // Nota: No es necesario prevenir el comportamiento por defecto ya que no es un botón de tipo submit

        // Obtener los datos del formulario
        const datos = Object.fromEntries(new FormData(frmRegistro).entries());
        console.log(JSON.stringify(datos)); // Ver datos en la consola

        // Mostrar datos en la página
        const parrafo = document.createElement('p');
        parrafo.textContent = `Nombre: ${datos.nombre}, Apellido: ${datos.apellido}, Edad: ${datos.edad}, Cédula: ${datos.cedula}`;
        datosMostradosDiv.innerHTML = '';
        datosMostradosDiv.appendChild(parrafo);

        // Enviar datos por POST
        try {
            const response = await fetch('/api/crearusuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Indicar que el contenido es JSON
                },
                body: JSON.stringify(datos) // Convertir datos a JSON
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Respuesta del servidor:', result);
            } else {
                console.error('Error en la respuesta del servidor:', response.statusText);
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    });
});
