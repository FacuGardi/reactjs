import { useState, useEffect } from "react";
export const Dolar = () => {
const [dolar, setDolar] = useState ([])

    useEffect (() => {
    fetch ('https://criptoya.com/api/dolar')
    .then(response => response.json())
    .then(dolar => {
        const {blue, oficial, solidario} = dolar
        console.log(blue, oficial, solidario)
        const esqueleto =
        <>
            <p>Dolar Blue: ${blue}</p>
            <p>Dolar Oficial: ${oficial}</p>
            <p>Dolar Solidario: ${solidario}</p>
        </>
        setDolar(esqueleto)
    })
    .catch(error => console.error(error))
}, [])
    return (
        <div>
            {dolar}
        </div>
    )
}

