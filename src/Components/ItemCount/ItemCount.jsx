import { useState } from "react"
import { toast } from "react-toastify"
export const ItemCount = ({valInicial, stock, onAdd}) => {
        
        const [contador, setContador] = useState(valInicial)
        
        const sumar = () => (contador < stock) && setContador(contador + 1)
        const restar = () => (contador > valInicial) && setContador(contador -1)
        const agregarCarrito = () => {
            onAdd(contador)
            toast.success(`¡Agregaste ${contador} productos al carrito!`)
        }
    
            return (
        <>
            <button className="btn btn-dark" onClick={() => restar()}>-</button>
                {contador}
            <button className="btn btn-dark" onClick={() => sumar()}>+</button>
            <button className="btn btn-dark" onClick={() => agregarCarrito()}>Agregar al carrito</button>
        </>
    )
}
