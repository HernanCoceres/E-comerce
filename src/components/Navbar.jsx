import Cartwidget from "./Cartwidget";

function Navbar() {
    return (
      <nav>
        <h1>Bodega Remini</h1>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          
          {/* Dropdown for Productos */}
          <li className="list_nav">
            <a href="#productos">Productos</a>
            <ul className="list_content">
              <li><a href="#vinos-tintos">Vinos Tintos</a></li>
              <li><a href="#vinos-blancos">Vinos Blancos</a></li>
              <li><a href="#vinos-rosados">Vinos Rosados</a></li>
            </ul>
          </li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contactanos">Contáctanos</a></li>
          <Cartwidget/>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;