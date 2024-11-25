import Modal from "..";
import { useState } from "react";

function ModalWarning({ onCloseClick, onSubmitClick, children }) {

    const [showModalSuccess, setShowModalSuccess] = useState(false);
    const handleSubmit = async () => {
        try {
            const res = await onSubmitClick();
            setShowModalSuccess(true);
            // 
            onCloseClick();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Modal
            title={"Cảnh báo"}
            onCloseClick={onCloseClick}
            onSubmitClick={handleSubmit}
        >
            {children}
        </Modal>
    );
}
export default ModalWarning;