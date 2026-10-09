import "./styles.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormInput from "../../../components/FormImput";
import * as forms from '../../../utils/forms';
import * as productService from '../../../services/product-service';

export default function ProductForm() {

  const params = useParams();

  const isEditing = params.productId !== 'create';

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
      validation: function(value: string) {
        return /^.{3,18}$/.test(value);
      },
      message: "Favor informar um nome de 3 a 80 caracteres"
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço",
      validation: function(value: any) {
        return Number(value) > 0;
      },
      message: "Favor informar um valor positivo",
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "Imagem",
    },
  });

  useEffect(() => {
    if (isEditing) {
        productService.findById(Number (params.productId))
          .then(response => {
            const newFormData = forms.updateAll(formData, response.data);
            setFormData(newFormData);
          })
        }
  }, []);

    function handleInputChange(event: any){
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
    }

    function handleTurnDirty(name: string) {
      setFormData(forms.dirtyAndValidate(formData, name));
    }

  return (
    <main>
      <section id="product-form-section" className="nxf-container">
        <div className="nxf-product-form-container">
          <form className="nxf-card nxf-form">
            <h2>Dados do produto</h2>
            <div className="nxf-form-controls-container">
              <div>
                <FormInput
                  {...formData.name}
                  className="nxf-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className="nxf-form-error">{formData.name.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.price}
                  className="nxf-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className="nxf-form-error">{formData.price.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.imgUrl}
                  className="nxf-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="nxf-product-form-buttons">
              <Link to="/admin/products">
                <button type="reset" className="nxf-btn nxf-btn-next-page">
                  Cancelar
                </button>
              </Link>
              <button type="submit" className="nxf-btn nxf-btn-blue">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
