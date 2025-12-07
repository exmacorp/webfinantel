/**
 * Carga fragmentos de HTML dinámicamente.
 * Busca elementos con el atributo 'include-html' y reemplaza
 * su contenido con el archivo externo.
 */
/**
 * Carga fragmentos de HTML dinámicamente.
 */
export async function loadPartials() {
    // 1. Buscar marcadores
    const elements = document.querySelectorAll('[include-html]');

    // 2. Cargar archivos
    const promises = Array.from(elements).map(async (el) => {
        const file = el.getAttribute('include-html');
        
        try {
            // === LA SOLUCIÓN ESTÁ EN ESTA LÍNEA ===
            // Agregamos ?v=${Date.now()} al final de la ruta.
            // Esto genera un número único (la hora exacta en milisegundos) cada vez.
            // El navegador ve "header.html?v=12345" y luego "header.html?v=12346",
            // por lo que se ve obligado a descargar la versión nueva siempre.
            const response = await fetch(`${file}?v=${Date.now()}`);
            
            if (response.ok) {
                const htmlContent = await response.text();
                
                // Convertir texto a nodos DOM
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = htmlContent;

                // Reemplazar el marcador por el contenido real
                el.replaceWith(...tempDiv.childNodes);
                
                // Ejecutar scripts que vengan dentro del HTML inyectado (si los hay)
                // Esto ayuda a veces con Alpine si el script está inline
                Array.from(tempDiv.querySelectorAll("script")).forEach(oldScript => {
                    const newScript = document.createElement("script");
                    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });

            } else {
                console.error(`Error cargando ${file}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error en petición: ${file}`, error);
        }
    });

    // 3. Esperar a que todos terminen
    await Promise.all(promises);
}