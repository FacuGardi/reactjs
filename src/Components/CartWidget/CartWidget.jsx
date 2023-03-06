import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
const CartWidget = ({cantCarrito}) => {
    const {getItemQuantity} = useCarritoContext()
    
    return (
        <>
            
            <Link className="nav-link" to={"/cart"}><button className="btn btn-light"><i className="bi bi-cart2"></i></button></Link>
            {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
        </>
    );
}

export default CartWidget;
