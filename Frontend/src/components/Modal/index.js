import "./style.css"
function Modal({ title, children, className, footerContent }) {
    return (
        <>
            <div className="modal-backdrop fade show" style={{ zIndex: 1040 }}></div>
            <div
                className={`modal fade show d-block ${className || ""}`}
                id="addToast"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-center">
                            <h5 className="modal-title">{title}</h5>
                        </div>
                        <div className="modal-body d-flex flex-column gap-3">
                            {children}
                        </div>
                        {footerContent ? (
                            <div className="modal-footer">{footerContent}</div>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Modal;
