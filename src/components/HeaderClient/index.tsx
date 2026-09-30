import "./styles.css";
import logoIcon from "../../assets/logo.png.png";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";

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
            <Link to="/cart">
              <div className="nxf-menu-item">
                <CartIcon />
              </div>
            </Link>
          </div>
          <Link to="/login"> 
            Entrar
          </Link>
        </div>
      </nav>
    </header>
  );
}
