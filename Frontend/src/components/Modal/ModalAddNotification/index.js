import { useState } from "react";
import Modal from "..";
import ModalError from "../ModalError";
import ModalSuccess from "../ModalSuccess";

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
            await onSubmitClick(titleInput, contentInput);
            setShowModalSuccess(true);
        } catch (error) {
            setShowModalError(true);
            console.log(error);
        }
    }
    return (
        <>
            <Modal
                title={"Thông báo đến các user"}
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
            {showModalError && (
                <ModalError onCloseClick={() => setShowModalError(false)}>
                    {"Hãy nhập đầy đủ tiêu đề và nội dung!"}
                </ModalError>
            )}
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
export default ModalAddNotification;