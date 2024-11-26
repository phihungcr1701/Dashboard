import { useState } from "react";
import Modal from "..";

function ModalAddNotification({ onSubmitClick, onCloseClick, title, content }) {
    const [titleInput, setTitleInput] = useState(title);
    const [contentInput, setContentInput] = useState(content);
    const [showModalError, setShowModalError] = useState(false);
    const [showModalSuccess, setShowModalSuccess] = useState(false);

    const handleSubmit = async () => {
        if (!titleInput || !contentInput) {
            setShowModalError(true);
            return;
        }
        try {
            const res = await onSubmitClick(titleInput, contentInput);
            setShowModalSuccess(true);

            onCloseClick();
            console.log(res);

        } catch (error) {
            setShowModalError(true);
            console.log(error);
        }
    }
    return (
        <>
            <Modal
                title={"Thông báo đến các user"}
                onCloseClick={onCloseClick}
                onSubmitClick={handleSubmit}
            >
                <textarea
                    className="form-control mb-4"
                    rows="2"
                    placeholder="Nhập tiêu đề..."
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                >
                </textarea>
                <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Nhập nội dung..."
                    value={contentInput}
                    onChange={e => setContentInput(e.target.value)}>
                </textarea>

            </Modal>
            {/* {showModalError && (
            
            )} */}
            {/* {showModalSuccess && (

            )} */}
        </>
    );
}
export default ModalAddNotification;