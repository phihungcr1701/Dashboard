import { useState } from "react";

function FormFloating({ type, id, labelContent, showPass = false, onInputChange }) {
    const [input, setInput] = useState("");
    const handleInputChange = (value) => {
        setInput(value);
        onInputChange(value);
    }
    return (
        <div className="form-floating">
            <input
                className="form-control"
                type={showPass ? "text" : type}
                id={id}
                value={input}
                placeholder={labelContent}
                onChange={e => handleInputChange(e.target.value)}
            />
            <label htmlFor={id}>{labelContent}</label>
        </div>
    );
}

export default FormFloating;