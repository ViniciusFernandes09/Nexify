import "./styles.css";
import logoIcon from "../../assets/logo.png.png";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import iconAdmin from "../../assets/admin.svg";
import * as authService from "../../services/auth-service";
import { useContext } from "react";
import { ContextToken } from "../../utils/context-token";

export default function HeaderClient() {

  const { contextTokenPayload } = useContext(ContextToken);

  return (
    <header className="nxf-header-client">
      <nav className="nxf-container">
        <Link to="/" className="nxf-logo">
          <img src={logoIcon} alt="Logo Nexify" />
        </Link>
        <div className="nxf-navbar-right">
          <div className="nxf-menu-items-container">
            {
              contextTokenPayload &&
              authService.hasAnyRoles(['ROLE_ADMIN']) &&
              <Link to="/admin">
                <div className="nxf-menu-item">
                  <img src={iconAdmin} alt="Admin" />
                </div>
              </Link>
            }
            <Link to="/cart">
              <div className="nxf-menu-item">
                <CartIcon />
              </div>
            </Link>
          </div>
          <Link to="/login">Entrar</Link>
        </div>
      </nav>
    </header>
  );
}
