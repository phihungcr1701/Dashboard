import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "..";

function ModalError({ onCloseClick, children }) {
    return (
        <>
            <div className="modal-overlay"></div>
            <Modal
                title={
                    <span className="d-flex align-items-center gap-2">
                        <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
                        Lỗi
                    </span>
                }
                className="modal-error"
                footerContent={
                    <button type="button" className="btn btn-danger" onClick={onCloseClick}>
                        Đóng
                    </button>
                }
            >
                <div className="text-danger text-center">
                    {children || "Đã xảy ra lỗi. Vui lòng thử lại!"}
                </div>
            </Modal>
        </>
    );
}

export default ModalError;
