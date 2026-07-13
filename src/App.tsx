import './App.css'
import ButtonInverse from './components/ButtonInverse';
import ButtonPrimary from './components/ButtonPrimary'
import HeaderClient from './components/HeaderClient'
import ProductDetailsCard from './components/ProductDetailsCard';

export default function App() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="nxf-container">
          <ProductDetailsCard />
          <div className="nxf-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}
