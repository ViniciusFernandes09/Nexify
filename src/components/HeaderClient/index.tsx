import "./styles.css";
import logoIcon from "../../assets/logo.png.png";
import cartIcon from "../../assets/cart.svg.svg";

export default function HeaderClient() {
    
  return (
    <header className="nxf-header-client">
      <nav className="nxf-container">
        <a className="nxf-logo">
          <img src={logoIcon} alt="Logo Nexify" />
        </a>
        <div className="nxf-navbar-right">
          <div className="nxf-menu-items-container">
            <div className="nxf-menu-item">
              <img src={cartIcon} alt="Carrinho de compras" />
            </div>
          </div>
          <a href="#">Entrar</a>
        </div>
      </nav>
    </header>
  );
}
