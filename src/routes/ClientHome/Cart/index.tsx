import './styles.css'
import computerImg from '../../../assets/computer.png.png'

const cart = {
    items: [
        {
            productId: 4,
            quantity: 1,
            name: "PC Gamer",
            price: 1200,
            imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg"
        },
        {
            productId: 5,
            quantity: 2,
            name: "Rails for Dummies",
            price: 100.99,
            imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
        }
    ]
}

export default function Cart() {

    return (
        <main>
            <section id="cart-container-section" className="nxf-container">
                <div className="nxf-card nxf-mb20">
                    {
                        cart.items.map(item => (
                        <div key={item.productId} className="nxf-cart-item-container nxf-line-bottom">
                        <div className="nxf-cart-item-left">
                            <img src= {item.imgUrl} alt={item.name} />
                            <div className="nxf-cart-item-description">
                                <h3>{item.name}</h3>
                                <div className="nxf-cart-item-quantity-container">
                                    <div className="nxf-cart-item-quantity-btn">-</div>
                                    <p>{item.quantity}</p>
                                    <div className="nxf-cart-item-quantity-btn">+</div>
                                </div>
                            </div>
                        </div>
                        <div className="nxf-cart-item-right">R$ {(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                        ))
                    }



                    <div className="nxf-cart-total-container">
                        <h3>R$ 15000,00</h3>
                    </div>
                </div>
                <div className="nxf-btn-page-container">
                    <div className="nxf-btn nxf-btn-blue">Finalizar pedido</div>
                    <div className="nxf-btn nxf-btn-black">Continuar comprando</div>
                </div>
            </section>
        </main>
    );
}
