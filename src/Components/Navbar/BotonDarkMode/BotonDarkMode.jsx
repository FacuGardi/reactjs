import React from 'react';
import "./BotonDarkMode.css"
const BotonDarkMode = () => {
    return (
        <div>
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="label">
                <i className="fas fa-moon" />
                <i className="fas fa-sun" />
                <div className="ball">
                </div>
            </label></div>

    );
}

export default BotonDarkMode;
