import './styles.css'
import logoIcon from '../../assets/logo.png.png';
import cartIcon from '../../assets/cart.svg.svg';

export default function HeaderClient() {

    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <a className="nxf-logo">
                    <img src={logoIcon} alt="Logo Nexify" />
                </a>
                <div className="dsc-navbar-right">
                    <div className="dsc-menu-items-container">
                        <div className="dsc-menu-item">
                            <img src={cartIcon} alt="Carrinho de compras" />
                        </div>
                    </div>
                    <a href="#">Entrar</a>
                </div>
            </nav>
        </header>
    );
}
