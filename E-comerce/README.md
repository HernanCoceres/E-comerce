# React + Vite

# Remini - Tienda de Vinos

**Remini** es una tienda en línea de vinos donde los usuarios pueden explorar una lista de productos, ver detalles de cada vino, agregar productos al carrito y completar un formulario de compra. Además, la web cuenta con un control de stock de cada producto y permite filtrar los vinos por tipo. También se incluyen funcionalidades para manejar el carrito de compras como borrar un ítem, limpiar el carrito y actualizar la cantidad de los productos.

## Características

- **Lista de vinos**: Los usuarios pueden ver una lista completa de vinos y ver el detalle de cada uno, incluyendo información como nombre, precio, tipo de vino, y más.
- **Control de stock**: Cada producto tiene un control de stock para evitar la compra de productos fuera de inventario.
- **Filtrado por tipo de vino**: Los vinos pueden ser filtrados por categorías como "tinto", "blanco", "rosado", etc.
- **Carrito de compras**: El carrito permite agregar, eliminar productos y vaciar el carrito. Los usuarios también pueden modificar la cantidad de productos.
- **Formulario de compra**: Los usuarios pueden completar un formulario con sus datos personales para proceder con la compra.

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- **[React](https://reactjs.org/)**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **[Vite](https://vitejs.dev/)**: Un generador de proyectos y un empaquetador rápido para proyectos de JavaScript y React.
- **[Bootstrap](https://getbootstrap.com/)**: Un framework de CSS para diseño web responsivo.
  - Versión utilizada: `^5.3.3`
- **[Firebase](https://firebase.google.com/)**: Plataforma de desarrollo para aplicaciones móviles y web, utilizada para la autenticación, la base de datos en tiempo real, y el almacenamiento.
  - Versión utilizada: `^11.1.0`
- **[React Bootstrap](https://react-bootstrap.github.io/)**: Componentes de Bootstrap para React, utilizados para crear interfaces visuales.
  - Versión utilizada: `^2.10.5`
  - Versión utilizada: `^1.5.7`
- **[React Router DOM](https://reactrouter.com/)**: Biblioteca para la navegación en aplicaciones React, permite la creación de rutas y navegación entre páginas.
  - Versión utilizada: `^6.28.0`

## Instalación

Para comenzar a trabajar con el proyecto, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/remini.git
   ```

2. Instala las dependencias:

   ```bash
   cd remini
   npm install
   ```

3. Ejecuta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador y visita `http://localhost:3000` para ver la página.

## Uso

- **Página principal**: Muestra la lista de vinos disponibles.
- **Detalle de producto**: Al hacer clic en un vino, se accede a una página con los detalles del vino (precio, descripción, stock, etc.).
- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, modificar la cantidad, eliminar ítems o vaciar el carrito.
- **Formulario de compra**: Los usuarios pueden llenar un formulario con su nombre, dirección y método de pago (efectivo, tarjeta o transferencia).

## Enlaces útiles

- [Documentación de React](https://reactjs.org/docs/getting-started.html)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de Bootstrap](https://getbootstrap.com/)
- [Documentación de Firebase](https://firebase.google.com/docs)
- [Documentación de React Bootstrap](https://react-bootstrap.github.io/)
- [Documentación de React Router DOM](https://reactrouter.com/)

## Contribuciones

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit de ellos (`git commit -am 'Agrega nueva funcionalidad'`).
4. Envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
