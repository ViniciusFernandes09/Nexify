import './styles.css'
import * as cartService from '../../../services/cart-service'
import { OrderDTO } from '../../../models/order';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {

    const [cart, setCart] = useState<OrderDTO>(cartService.getCart());

    function handleClearClick() {
        cartService.clearCart();
        setCart(cartService.getCart());
    }

    return (
        <main>
            <section id="cart-container-section" className="nxf-container">
                {
                    cart.items.length === 0
                    ? (
                        <div>
                            <h2 className="nxf-section-title nxf-mb20">Seu carrinho está vazio!</h2>
                        </div>
                    )
                    : (
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
                                <div className="nxf-cart-item-right">R$ {item.subTotal.toFixed(2)}</div>
                            </div>
                                ))
                            }

                            <div className="nxf-cart-total-container">
                                <h3>R$ {cart.total.toFixed(2)}</h3>
                            </div>
                        </div>
                    )
                }
                
                <div className="nxf-btn-page-container">
                    <div className="nxf-btn nxf-btn-blue">Finalizar pedido</div>
                    <Link to="/catalog">
                        <div className="nxf-btn nxf-btn-black">Continuar comprando</div>
                    </Link>
                <div onClick={handleClearClick} className="nxf-btn nxf-btn-black">Limpar Carrinho</div>
                </div>
            </section>
        </main>
    );
}
