import "./styles.css";
import logoIcon from "../../assets/logo.png.png";
import homeIcon from '../../assets/inicio.svg'
import productsIcon from '../../assets/produtos.svg'
import { Link, NavLink } from "react-router-dom";
import LoggedUser from "../LoggedUser";

export default function HeaderAdmin() {
  
  return (
    <header className="nxf-header-admin">
      <nav className="nxf-container">
        <Link to="/" className="nxf-logo">
            <img src={logoIcon} alt="Logo Nexify" />
        </Link>
        <div className="nxf-navbar-right">
          <div className="nxf-menu-items-container">
            <NavLink to="/admin/home" className={({isActive}) => isActive ? "nxf-menu-item-active" : ""}>
              <div className="nxf-menu-item">
                <img src={homeIcon} alt="Início" />
              <p>Início</p>
            </div>
            </NavLink>
            <NavLink to="/admin/products" className={({isActive}) => isActive ? "nxf-menu-item-active" : ""}>
              <div className="nxf-menu-item">
                <img src={productsIcon} alt="Cadastro de produtos" />
              <p>Produtos</p>
            </div>
            </NavLink>

          </div>
          <LoggedUser />
        </div>
      </nav>
    </header>
  );
}
