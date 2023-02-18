import { Link } from "react-router-dom";
const Categorias = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/category/1RedesSociales"}>Redes Sociales</Link></li>
                <li><Link className="dropdown-item" to={"/category/2StickerPlantillas"}>Sticker y Plantillas</Link></li>
                <li><Link className="dropdown-item" to={"/category/3Ilustraciones"}>Ilustraciones</Link></li>
            </ul>
        </li>
    );
}

export default Categorias;
