import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import type { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Apple Macbook Pro 2020",
  description: "O MacBook Neo foi projetado para acompanhar o seu ritmo. Com um desempenho excepcional em tarefas e aplicativos, ele combina elegância e durabilidade em uma estrutura resistente de alumínio, disponível em quatro cores exclusivas.",
  imgUrl: "https://raw.githubusercontent.com/ViniciusFernandes09/Nexify/refs/heads/main/src/assets/computer.png.png",
  price: 3990.00,
  categories: [
    {
      id: 2,
      name: "Eletrônicos"
    },
    {
      id: 3,
      name: "Computadores"
    },
    {
      id: 4,
      name: "Tecnologia"
    }
  ]
}

export default function ProductDetails() {

  return (
      <main>
        <section id="product-details-section" className="nxf-container">
          <ProductDetailsCard product={product} />
          <div className="nxf-btn-page-container">
            <ButtonPrimary text="Comprar" />
            <ButtonInverse text= "Início" />
          </div>
        </section>
      </main>
  );
}
