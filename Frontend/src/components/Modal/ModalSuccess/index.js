import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "..";

function ModalSuccess({ onCloseClick }) {
    return (
        <>
            {/* Overlay riêng cho ModalSuccess */}
            <div className="modal-overlay"></div>
            <Modal
                title={
                    <span className="d-flex align-items-center gap-2">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
                        Thành Công
                    </span>
                }
                className="modal-success"
                footerContent={
                    <button type="button" className="btn btn-danger" onClick={onCloseClick}>
                        Đóng
                    </button>
                }
            >
                <div className="text-success text-center">
                    <p>Thao tác đã thực hiện thành công!</p>
                </div>
            </Modal>
        </>
    );
}

export default ModalSuccess;
