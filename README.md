# Portfolio Web (Jose Molina)

Sitio web personal y portfolio periodístico diseñado para ser alojado en GitHub Pages. Esta versión ha sido refactorizada para usar un sistema de contenido dinámico mediante JSON y cuenta con soporte bilingüe completo (español/inglés).

## 📂 Estructura del Proyecto

El sitio principal se encuentra en y consta de los siguientes archivos clave:

- **`index.html`**: Página de inicio. Contiene la biografía, competencias principales, botón a LinkedIn y el formulario de contacto.
- **`trabajo.html`**: Página de portfolio. Carga de forma dinámica la línea temporal de artículos y contiene la sección estática "Otras cosas" (Más allá del periodismo).
- **`style.css`**: Hoja de estilos global que unifica la estética, paleta de colores (`--ink`, `--paper`, `--accent`) y tipografías para todo el sitio.
- **`lang.js`**: Motor de internacionalización (i18n). Gestiona el estado del idioma (guardado en `localStorage`), cambia los textos de la interfaz gráfica y maneja la traducción automática de las páginas.
- **`trabajos.json`**: Base de datos estática en formato JSON. Almacena todos los artículos periodísticos en una estructura bilingüe.

## 🛠 Cómo actualizar el contenido

La principal ventaja de esta arquitectura es la clara separación entre la estructura (HTML) y la información (JSON/JS). 

### 1. Añadir o editar artículos periodísticos
Para añadir un nuevo proyecto a la página de "Trabajos", **no necesitas editar el HTML**. Solo hay que añadir un nuevo objeto al archivo `trabajos.json` con la siguiente estructura:

```json
{
  "id": "identificador-unico",
  "year": 2025,
  "month": 10,
  "categories": ["datos", "desinfo"],
  "titles": {
    "es": ["Título en español"],
    "en": ["Título en inglés"]
  },
  "paragraphs": {
    "es": ["Descripción en español."],
    "en": ["Descripción en inglés."]
  },
  "techniques": {
    "es": ["análisis de datos", "OSINT"],
    "en": ["data analysis", "OSINT"]
  },
  "links": [
    "https://url-del-articulo.com"
  ]
}
```
*Si tienes múltiples enlaces, se generarán automáticamente las etiquetas (p. ej., "Artículo 1 →", "Artículo 2 →").*

### 2. Actualizar textos fijos (Interfaz)
Cualquier texto estructural de la web (menús, botones de filtros, etiquetas de meses y placeholder del formulario) se gestiona en el archivo `lang.js`. Busca el objeto `translations` y modifica las cadenas según necesites.

### 3. Modificar Biografía o "Otras cosas"
El texto base de la biografía o la sección *Otras cosas* en los trabajos está hardcodeado a través del sistema de i18n para facilitar el cambio rápido de textos en HTML puro. Puedes editar esos textos actualizando las variables correspondientes en `lang.js` (como `bio.1`, `panel.list.1`, etc.).

## 🌍 Sistema Bilingüe (i18n)

Se ha implementado un sistema del lado del cliente mediante el atributo `data-i18n`. 
- Etiqueta normal: `<p data-i18n="clave.diccionario">Texto por defecto</p>`
- Placeholder o etiquetas aria: `<input data-i18n-placeholder="contact.email" />`

El botón `ES | EN` en la barra de navegación permite conmutar los valores actualizando la vista y el contenido JSON inmediatamente sin recargar la página.

## 🚀 Entorno Local y GitHub Pages

1. **Test local**: Al utilizar promesas (Fetch API para consultar `trabajos.json`), no debes abrir localmente los archivos HTML con doble clic (ruta `file:///`), ya que algunos navegadores bloquean peticiones JSON por reglas CORS de archivos locales. Utiliza herramientas como `Live Server` de VSCode o lanza un servidor desde la terminal:
```bash
python3 -m http.server 8000
```
2. **Subir cambios**: Realiza un `git commit` y un `git push origin main`. Los cambios se publicarán instantáneamente vía GitHub Pages.
