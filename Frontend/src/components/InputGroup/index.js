import React, { useState } from 'react';
import './style.css';

function InputGroup({ title, children, onShowPassClick, onSubmit, msgError }) {
    const [body, footer] = React.Children.toArray(children);
    const [showPass, setShowPass] = useState(false);

    const handleCheck = () => {
        let value = !showPass;
        setShowPass(value);
        onShowPassClick(value);
    }

    return (
        <div className='card'>
            <div className="card-header d-flex align-items-center justify-content-center">
                <h3 className="text-center fw-bold text-primary text-uppercase m-0 py-1">{title}</h3>
            </div>
            <div className='card-body px-4 py-4'>
                <form
                    className='d-flex flex-column gap-4'
                    onSubmit={onSubmit}
                >
                    {body}
                    <div className="form-check form-switch d-flex align-items-center">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="showPassword"
                            onClick={handleCheck}
                        />
                        <label className="form-check-label mb-0 ms-3" htmlFor="showPassword">Hiển thị mật khẩu</label>
                    </div>
                    {msgError &&
                        <span className='text-danger small'>{msgError}</span>
                    }
                    <div className="d-flex justify-content-center">
                        <button type='submit' className="btn btn-primary btn-lg w-100" name="submit">{title}</button>
                    </div>
                </form>
            </div>
            <div className="card-footer text-center align-items-center py-3" >
                {footer}
            </div>
        </div>
    );
}

export default InputGroup;
