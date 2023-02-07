const CartWidget = ({cantCarrito}) => {
    return (
        <>
            
            <button className="btn btn-light"><i className="bi bi-cart2"></i></button>
            <p>{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
