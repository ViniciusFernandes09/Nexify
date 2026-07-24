import "./styles.css";
import type { ProductDTO } from "../../models/product";
import { Link } from 'react-router-dom';

type Props = {
  product: ProductDTO;
};

export default function CatalogCard({ product }: Props) {
  return (
    <Link to={`/product-details/${product.id}`}>
      <div className="nxf-card">
        <div className="nxf-catalog-card-top nxf-line-bottom">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="nxf-catalog-card-bottom">
          <h3>
            R${" "}
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
          <h4>{product.name}</h4>
        </div>
      </div>
    </Link>
  );
}
