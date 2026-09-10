import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as productService from '../../../services/product-service'
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    productService.findAll()
      .then(response => {
        setProducts(response.data.content);
      });
  }, []);

  return (
      <main>
        <section id="catalog-section" className="nxf-container">
          <SearchBar />

          <div className="nxf-catalog-cards nxf-mb20 nxf-mt20">
            {
              products.map(
                product => <CatalogCard key={product.id} product={product} />
              )
            }
          </div>

          <ButtonNextPage />
        </section>
      </main>
  );
}
