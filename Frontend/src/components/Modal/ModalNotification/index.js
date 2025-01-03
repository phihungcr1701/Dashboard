import Modal from "..";

function ModalNotification({ title, content, onCloseClick }) {

    return (
        <>
            <Modal
                title={title}
                footerContent={
                    <button type="button" className="btn btn-danger" onClick={onCloseClick}>
                        Đóng
                    </button>
                }
            >
                <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Nhập nội dung..."
                    value={content}
                    readOnly
                >
                </textarea>
            </Modal>
        </>
    );
}
export default ModalNotification;