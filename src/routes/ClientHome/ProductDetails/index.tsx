import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../services/product-service'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";

export default function ProductDetails() {

const params = useParams();

const navigate = useNavigate();

const [product, setProduct] = useState<ProductDTO>();

useEffect(() => {
productService.findById(Number(params.productId))
  .then(response => {
    console.log(response.data);
    setProduct(response.data);
  })
  .catch(() => {
    navigate("/");
  });
}, []);


  return (
      <main>
        <section id="product-details-section" className="nxf-container">
          {
            product &&
            <ProductDetailsCard product={product} />
          }
          <div className="nxf-btn-page-container">
            <ButtonPrimary text="Comprar" />
            <Link to="/">
              <ButtonInverse text= "Início" />
            </Link>
          </div>
        </section>
      </main>
  );
}
