import './styles.css'
import { useEffect, useState } from 'react';
import * as cartService from '../../../services/cart-service'
import { OrderDTO, OrderItemDTO } from '../../../models/order';

const item1 : OrderItemDTO = new OrderItemDTO(
    4, 1, "PC Gamer", 1200, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/4-big.jpg"
)

const item2 : OrderItemDTO = new OrderItemDTO(
    5, 2, "Rails for Dummies", 100.99, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg"
)

export default function Cart() {

    const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

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
