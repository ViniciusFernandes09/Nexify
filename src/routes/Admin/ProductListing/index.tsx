import './styles.css'
import editIcon from '../../../assets/edit.svg'
import deleteIcon from '../../../assets/delete.svg'
import product from '../../../assets/computer2.png'

export default function ProductListing() {

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
            <tr>
              <td className="nxf-tb576">341</td>
              <td><img className="nxf-product-listing-image" src={product} alt="Computer" /></td>
              <td className="nxf-tb768">R$ 5000,00</td>
              <td className="nxf-txt-left">Computador Gamer XT Plus Ultra</td>
              <td><img className="nxf-product-listing-btn" src={editIcon} alt="Editar" /></td>
              <td><img className="nxf-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
            </tr>
            <tr>
              <td className="nxf-tb576">341</td>
              <td><img className="nxf-product-listing-image" src={product} alt="Computer" /></td>
              <td className="nxf-tb768">R$ 5000,00</td>
              <td className="nxf-txt-left">Computador Gamer XT Plus Ultra</td>
              <td><img className="nxf-product-listing-btn" src={editIcon} alt="Editar" /></td>
              <td><img className="nxf-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
            </tr>
            <tr>
              <td className="nxf-tb576">341</td>
              <td><img className="nxf-product-listing-image" src={product} alt="Computer" /></td>
              <td className="nxf-tb768">R$ 5000,00</td>
              <td className="nxf-txt-left">Computador Gamer XT Plus Ultra</td>
              <td><img className="nxf-product-listing-btn" src={editIcon} alt="Editar" /></td>
              <td><img className="nxf-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
            </tr>
          </tbody>
        </table>

        <div className="nxf-btn-next-page">Carregar mais</div>
      </section>
    </main>
    )
}