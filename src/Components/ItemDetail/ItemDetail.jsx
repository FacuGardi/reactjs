import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({item}) => {
    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${item.img}`} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`}/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-tittle">{item.nombre}</h5>
                    <p className="card-text">TIpo de Entrega: {item.tipoDeEntrega}</p>
                    <p className="card-text">Precio: ${item.precio}</p>
                    <p className="car-text">Stock {item.stock}</p>
                    <ItemCount valInicial={1} stock={item.stock}/>
                    <button className="btn btn-secondary">Finalizar Compra</button>
                </div>
            </div>
            
        </div>
    );
}

