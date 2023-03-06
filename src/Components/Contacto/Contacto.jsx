import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"
const Contacto = () => {
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario.current)
        const datForm = new FormData(datosFormulario.current) 
        const contacto = Object.fromEntries(datForm)
        console.log(contacto)
        e.target.reset()
        toast.success("Consulta recibida correctamente")
        navigate("/")
    }
    
    return (
        <div className="container contactoStilo">
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
                <label htmlFor="celular" className="form-label">Numero de telefono</label>
                <input type="number" className="form-control" name='celular' />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Consulta</label>
                <textarea className="form-control" name='textarea' rows={4} defaultValue={""} />
            </div>
                <button type="submit" className="btn btn-primary">Enviar </button>
        </form>
        </div>
    );
}

export default Contacto;
