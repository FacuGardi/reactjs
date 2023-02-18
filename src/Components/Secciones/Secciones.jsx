import { Link } from "react-router-dom";
const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>ILUSTRA VG</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/contacto"}>Sobre Mi</Link>
            </li>
        </>
    );
}

export default Secciones;
