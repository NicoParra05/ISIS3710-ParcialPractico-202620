# ISIS3710-ParcialPractico-202620

Nombre: Nicolás Parra Zorro
Código: 202322257

| # | Ubicación (archivo y línea) | Herramienta que lo detectó | Regla o principio incumplido | Por qué es un problema o caso específico | Corrección |
|---|---|---|---|---|---|
| 1 | `src/app/plans/page.tsx` – imagen de cada plan | Lighthouse / Axe | Imágenes deben tener texto alternativo | Las imágenes no tienen `alt`, por lo que un lector de pantalla no puede describirlas. | Agregar `alt={plan.name}` a cada `<img>`. |
| 2 | `src/app/plans/page.tsx` – títulos de los planes | Lighthouse | Jerarquía correcta de encabezados | Se pasa de un `<h1>` directamente a `<h4>`, dificultando entender la estructura de la página. | Cambiar los títulos de los planes a `<h2>` o ajustar la jerarquía. |
| 3 | `src/app/plans/[id]/page.tsx` – botón “Me gustó” | Axe | Orden de foco lógico | El botón tiene `tabIndex={5}`, lo que puede alterar el orden natural de navegación por teclado. | Eliminar el `tabIndex` positivo y usar el orden natural del DOM. |
| 4 | `src/app/plans/page.tsx` – textos con `text-slate-300` | Lighthouse | Contraste de color suficiente | Algunos textos claros sobre fondo claro pueden tener contraste insuficiente y ser difíciles de leer. | Usar un tono más oscuro, por ejemplo `text-slate-600`. |
| 5 | Páginas/formularios disponibles – campos de entrada | Axe / Lighthouse | Los controles deben tener nombre o etiqueta accesible | Un input sin `<label>` asociado dificulta identificar su propósito con lectores de pantalla. | Asociar cada campo con un `<label htmlFor="...">` y un `id`. |