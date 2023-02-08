import { useState, useEffect } from "react";
import { ItemList } from '../ItemList/ItemList'
const ItemListContainer = () => {
    const [productos, setPorductos] = useState ([])
    useEffect(() => { 
        fetch ('./json/productos.json')
        .then(response => response.json())
        .then(products => console.log(products))
            const productsList = ItemList({products})
            console.log(productsList)
            setPorductos(productsList)
}, [])
    return (
        <div>
            {productos}
        </div>
    );
}

export default ItemListContainer;
