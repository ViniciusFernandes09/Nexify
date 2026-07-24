import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as productService from '../../../services/product-service'

export default function Catalog() {
  return (
      <main>
        <section id="catalog-section" className="nxf-container">
          <SearchBar />

          <div className="nxf-catalog-cards nxf-mb20 nxf-mt20">
            {
              productService.findAll().map(
                product => <CatalogCard key={product.id} product={product} />
              )
            }
          </div>

          <ButtonNextPage />
        </section>
      </main>
  );
}
