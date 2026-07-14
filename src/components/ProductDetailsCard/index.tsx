import './styles.css'
import computerImg from '../../assets/computer.png.png'
import ProductCategory from '../ProductCategory'

export default function ProductDetailsCard() {

  return (
    <div className="nxf-card nxf-mb20">
      <div className="nxf-product-details-top nxf-line-bottom">
        <img src={computerImg} alt="Computador" />
      </div>
      <div className="nxf-product-details-bottom">
        <h3>R$ 5.000,00</h3>
        <h4>Computador Gamer XT</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="nxf-category-container">
          <ProductCategory />
          <ProductCategory />
        </div>
      </div>
    </div> 
  );
}
