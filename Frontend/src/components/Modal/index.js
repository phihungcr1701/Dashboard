function Modal({ title, children, onSubmitClick, onCloseClick }) {
    return (
        <>
            <div className="modal-backdrop fade show" style={{ zIndex: 1040 }}></div>
            <div
                className="modal fade show d-block"
                id="addToast"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-center">
                            <h5 className="modal-title">{title}</h5>
                        </div>
                        <div className="modal-body d-flex flex-column gap-3 mx-2">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onCloseClick}>Đóng</button>
                            <button type="submit" className="btn btn-primary" onClick={onSubmitClick}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Modal;