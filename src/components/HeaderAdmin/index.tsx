import "./styles.css";
import logoIcon from "../../assets/logo.png.png";
import homeIcon from '../../assets/inicio.svg'
import productsIcon from '../../assets/produtos.svg'
import { Link } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <header className="nxf-header-admin">
      <nav className="nxf-container">
        <Link to="/" className="nxf-logo">
            <img src={logoIcon} alt="Logo Nexify" />
        </Link>
        <div className="nxf-navbar-right">
          <div className="nxf-menu-items-container">
            <div className="nxf-menu-item">
              <img src={homeIcon} alt="Início" />
              <p>Início</p>
            </div>
            <div className="nxf-menu-item">
              <img src={productsIcon} alt="Cadastro de produtos" />
              <p className="nxf-menu-item-active">Produtos</p>
            </div>
          </div>
          <div className="nxf-logged-user">
            <p>Maria Silva</p>
            <a href="#">Sair</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
