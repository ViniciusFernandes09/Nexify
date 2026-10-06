import './styles.css'

export default function ProductForm() {

    return (
        <main>
      <section id="product-form-section" className="nxf-container">
        <div className="nxf-product-form-container">
          <form className="nxf-card nxf-form">
            <h2>Dados do produto</h2>
            <div className="nxf-form-controls-container">
              <div>
                <input className="nxf-form-control" type="text" placeholder="Nome" />
              </div>
              <div>
                <input className="nxf-form-control" type="text" placeholder="Preço" />
              </div>
              <div>
                <input className="nxf-form-control" type="text" placeholder="Imagem" />
              </div>
              <div>
                <select className="nxf-form-control nxf-select" required>
                  <option value="" disabled selected>Categorias</option>
                  <option value="1">Valor 1</option>
                  <option value="2">Valor 2</option>
                </select>
              </div>
              <div>
                <textarea className="nxf-form-control nxf-textarea" placeholder="Descrição"></textarea>
              </div>
            </div>

            <div className="nxf-product-form-buttons">
              <button type="reset" className="nxf-btn nxf-btn-next-page">Cancelar</button>
              <button type="submit" className="nxf-btn nxf-btn-blue">Salvar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
    )
}