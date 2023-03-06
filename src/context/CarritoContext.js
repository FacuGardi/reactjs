import { useContext, createContext, useState, Children } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {
    
    const [carrito, setCarrito] = useState([])

    //si existe producto en el carrito

    const isInCart = (id) => {
        return carrito.find(prod => prod.id === id)
    }
    
    //agregar producto

    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) { //reemplazo
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux = [...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
        } else { //si no creo el objeto
            const prodCart ={
                ...producto,
                cant: cantidad
            }
            setCarrito([...carrito, prodCart])
        } 
    }
    
    //vaciar carrito
    
    const emptyCart = () => {
        setCarrito([])
    }

    //eliminar producto
    const removeItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id))
    } 

    //cantidad total de productos en carrito
    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.cant, 0)
    }

    //precio total de la compra 
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }
    console.log(carrito)

    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CarritoContext.Provider>

    )
}

