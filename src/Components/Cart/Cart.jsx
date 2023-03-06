import React from 'react';
import { Link } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList'
import { useCarritoContext } from '../../context/CarritoContext';
const Cart = () => {
    const {carrito, totalPrice, emptyCart } = useCarritoContext()
    return (
        <>
            { carrito.length === 0
                ?
                    <>
                    <div className='carritoVacio'>
                        <h2>CARRITO VACIO</h2>
                        <Link className='nav-link' to={"/"}><button className='btn-btn dark'>Seguir comprando</button></Link>
                        </div>
                        
                    </>
                :
                    <>
                        <div className='container cartContainer'>
                            {
                                <ItemList products={carrito} plantilla={"itemCart"}/>
                            }
                        </div>
                        <div className="divButtons">
                            <p>Resumen de la compra: {totalPrice()}</p>
                            <button className='btn btn-danger' onClick={() => emptyCart()}>Vaciar carrito</button>
                            <Link className='nav-link' to={"/"}><button className='btn btn-dark'>Continuar comprando</button></Link>
                            <Link className='nav-link' to={"/checkout"}><button className='btn btn-dark'>Finalizar compra</button></Link>
                        </div>

                    </>

            }





        </>




    )
}

export default Cart;
