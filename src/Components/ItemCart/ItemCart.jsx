import { useCarritoContext } from "../../context/CarritoContext";
export const ItemCart = ({ item }) => {
    const {removeItem} = useCarritoContext()
    return (
        <div className="card mb-3 cardCart">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de producto ${item.nombre}`} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">Cantidad: {item.cantidad}</p>
                        <p className="card-text">Precio Unitario: ${item.precio}</p>
                        <p className="card-text">Subtotal: ${item.precio * item.cant}</p>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar del Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

