import React from 'react';

const ToggleSwitch = () => {
    return (
        <>
            <div className="admin-sidebar-switch">
                <input
                    className="switch__input"
                    type="checkbox"
                    id="switchCheckbox1"
                    onClick={toggleTheme}
                />
                <label aria-hidden="true" className="switch__label" htmlFor="switchCheckbox1">
                    On
                </label>
                <div aria-hidden="true" className="switch__marker"></div>
            </div>
        </>
    );
};

export default ToggleSwitch;
