import { useState } from "react";
import Modal from "..";
import ModalSuccess from "../ModalSuccess";

function ModalWarning({ onCloseClick, onSubmitClick, children }) {

    const [showModalSuccess, setShowModalSuccess] = useState(false);
    const handleSubmit = async () => {
        try {
            const res = await onSubmitClick();
            setShowModalSuccess(true);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Modal
                title={"Cảnh báo"}
                footerContent={
                    <>
                        <button type="button" className="btn btn-danger" onClick={onCloseClick}>
                            Đóng
                        </button>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                            Xác nhận
                        </button>
                    </>
                }
                className="modal-warning"
            >
                {children}
            </Modal>
            {showModalSuccess && (
                <ModalSuccess
                    onCloseClick={() => {
                        setShowModalSuccess(false)
                        onCloseClick()
                    }}
                />
            )}
        </>
    );
}
export default ModalWarning;