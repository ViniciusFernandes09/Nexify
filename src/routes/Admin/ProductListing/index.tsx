import "./styles.css";
import * as productService from '../../../services/product-service'
import editIcon from "../../../assets/edit.svg";
import deleteIcon from "../../../assets/delete.svg";
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";

type QueryParams = {
  page: number;
  name: string;
}

export default function ProductListing() {

  const [isLastPage, setIsLastPage] = useState(false);

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParam] = useState<QueryParams>({
    page: 0,
    name: "",
  });

  useEffect(() => {
      productService.findPageRequest(queryParams.page, queryParams.name)
        .then(response => {
          const nextPage = response.data.content;
          setProducts(products.concat(nextPage));
          setIsLastPage(response.data.last);
        });
    }, [queryParams]);

  return (
    <main>
      <section id="product-listing-section" className="nxf-container">
        <h2 className="nxf-section-title nxf-mb20">Cadastro de produtos</h2>

        <div className="nxf-btn-page-container nxf-mb20">
          <div className="nxf-btn nxf-btn-next-page">Novo</div>
        </div>

        <form className="nxf-search-bar">
          <button type="submit">🔎︎</button>
          <input type="text" placeholder="Nome do produto" />
          <button type="reset">🗙</button>
        </form>

        <table className="nxf-table nxf-mb20 nxf-mt20">
          <thead>
            <tr>
              <th className="nxf-tb576">ID</th>
              <th></th>
              <th className="nxf-tb768">Preço</th>
              <th className="nxf-txt-left">Nome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                products.map(product => (
                    <tr>
                        <td className="nxf-tb576">{product.id}</td>
                        <td><img className="nxf-product-listing-image" src={product.imgUrl} alt={product.name} /></td>
                        <td className="nxf-tb768">R$ {product.price.toFixed(2)}</td>
                        <td className="nxf-txt-left">{product.name}</td>
                        <td><img className="nxf-product-listing-btn" src={editIcon} alt="Editar" /></td>
                        <td><img className="nxf-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                    </tr>
                ))
            }
          </tbody>
        </table>

        <div className="nxf-btn-next-page">Carregar mais</div>
      </section>
    </main>
  );
}
