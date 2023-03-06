import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import  React  from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import { createOrdenCompra, getOrdenCompra, getProducto, updatePro, updateProducto } from "../../firebase/firebase";

const Checkout = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate
    
    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant
                updateProducto(prodCarrito.id, prodBDD)
            })
        })

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
            getOrdenCompra(ordenCompra.id)
            toast.success(`¡Muchas gracias por comprar con nosotros!, su orden de compra ${ordenCompra.id} por un total de $${totalPrice()} fue realizada con exito`)
            emptyCart()
            e.target.reset()
            navigate("/") 
    })
    }
    return (
        <>
            {carrito.lentgh === 0
            ?
                <>
                    <h2>Para finalizar compra debe tener productos en el Carrito</h2>
                    <Link className='nav-link' to={"/"}><button className='btn-btn dark'>Seguir comprando</button></Link>
                </>
            :
                <div className="container" style={{marginTop:"30px"}}>
                <form onSubmit={consultarFormulario} ref={datosFormulario}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nombre y Apellido</label>
                        <input type="text" className="form-control" name='nombre' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repEmail" className="form-label">Repetir Email</label>
                        <input type="email" className="form-control" name='repEmail' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="celular" className="form-label">Numero de telefono</label>
                        <input type="number" className="form-control" name='celular' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Direccion</label>
                        <input type="text" className="form-control" name='direccion' />
                    </div>
                        <button type="submit" className="btn btn-primary">Finalizar Compra </button>
                </form>
                </div>
            }
        
        </>

        
    );
}

export default Checkout;
