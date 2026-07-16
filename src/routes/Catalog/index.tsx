import "./styles.css";

import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";
import type { ProductDTO } from "../../models/product";

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

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="nxf-container">
          <SearchBar />

          <div className="nxf-catalog-cards nxf-mb20 nxf-mt20">
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
