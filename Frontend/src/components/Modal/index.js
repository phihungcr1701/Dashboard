import React from 'react';
import './style.css'

function Modal( {children, id, title} ) {
    const [body, footer1, footer2] = React.Children.toArray(children);

    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-center">
                        <h5 className="modal-title">{title}</h5>
                    </div>
                    <div className="modal-body">
                        {body}
                    </div>
                    <div className="modal-footer">
                        {footer1}
                        {footer2}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;