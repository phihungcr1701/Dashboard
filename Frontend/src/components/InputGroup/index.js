import React, { useState } from 'react';
import './style.css';

function InputGroup({ id, nameLabel, type, placeholder, value, options }) {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div className="mb-3">
            <label
                htmlFor={id}
                className={`row label ${isFocused ? 'label-focused' : ''}`}
            >
                {nameLabel}
            </label>
            {type === "select" ? (
                <select
                    className="row input"
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    className="row input"
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            )}
        </div>
    );
}

export default InputGroup;
