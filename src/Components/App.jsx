import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import "react-toastify/dist/ReactToastify.css"


import {ToastContainer} from "react-toastify";

import { updateProducto, deleteProducto } from "../firebase/firebase"

import Navbar from "./Navbar/Navbar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer  from "./ItemDetailContainer/ItemDetailContainer";
import Contacto from "./Contacto/Contacto"
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';

import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/CarritoContext';
const App = () => {
  updateProducto("8dme8RcGhKAJgrhy2oIK", {
    "idCategoria": 3,
    "nombre":"Ilustracion de Mascota" ,
    "tipoDeEntrega":"Entrega Digital o Impresa" ,
    "precio": 790 ,
    "stock": 25,
    "img": "https://firebasestorage.googleapis.com/v0/b/ilustravg-react.appspot.com/o/IlustracionMascota.jpg?alt=media&token=15d13e01-6b1c-46f7-94fe-260c6750a0df"})
  return (
    <>
    <BrowserRouter>
      <CarritoProvider>
        <DarkModeProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
            <ToastContainer/>
        </DarkModeProvider>
      </CarritoProvider>
    </BrowserRouter>
    </>
  );
}

export default App;