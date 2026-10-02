import './styles.css'
import { useEffect, useState } from "react";
import { OrderDTO } from "../../../models/order";
import { Link, useParams } from "react-router-dom";
import * as orderService from "../../../services/order-service"
import ButtonInverse from '../../../components/ButtonInverse';

export default function Confirmation() {

    const params = useParams();

    const [order, setOrder] = useState<OrderDTO>();

    useEffect(() => {
        orderService.findByIdRequest(Number(params.orderId))
            .then(response => {
                setOrder(response.data);
            })
    }, []);

    return (
        <main>
            <section id="confirmation-section" className="nxf-container">
        
                <div className="nxf-card nxf-mb20">
                    {
                        order?.items.map(item => (
                        <div key={item.productId} className="nxf-cart-item-container nxf-line-bottom">
                            <div className="nxf-cart-item-left">
                                <img src= {item.imgUrl} alt={item.name} />
                                <div className="nxf-cart-item-description">
                                    <h3>{item.name}</h3>
                                    <div className="nxf-cart-item-quantity-container">
                                        <p>{item.quantity}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="nxf-cart-item-right">
                                R$ {item.subTotal.toFixed(2)}
                            </div>
                        </div>
                    ))
                }

                <div className="nxf-cart-total-container">
                    <h3>R$ {order?.total.toFixed(2)}</h3>
                </div>
            </div>


                <div className="nxf-confirmation-message nxf-mb20">
                    Pedido realizado! Número {order?.id}
                </div>
                <div className="nxf-btn-page-container">
                    <Link to="/">
                        <ButtonInverse text= "Início" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
