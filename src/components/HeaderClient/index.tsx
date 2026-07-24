import "./styles.css";
import logoIcon from "../../assets/logo.png.png";
import cartIcon from "../../assets/cart.svg.svg";
import { Link } from "react-router-dom";

export default function HeaderClient() {
    
  return (
    <header className="nxf-header-client">
      <nav className="nxf-container">
        <Link to="/">
          <a className="nxf-logo">
            <img src={logoIcon} alt="Logo Nexify" />
          </a>
        </Link>
        <div className="nxf-navbar-right">
          <div className="nxf-menu-items-container">
            <div className="nxf-menu-item">
              <Link to="/cart">
                <img src={cartIcon} alt="Carrinho de compras" />
              </Link>
            </div>
          </div>
          <Link to="/login"> 
            Entrar
          </Link>
        </div>
      </nav>
    </header>
  );
}
