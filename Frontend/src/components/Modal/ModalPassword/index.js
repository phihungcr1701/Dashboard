import { useState } from "react";
import Modal from "..";
import ModalError from "../ModalError";
import ModalSuccess from "../ModalSuccess";

function ModalPassword({ onSubmitClick, onCloseClick }) {

    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showModalError, setShowModalError] = useState(false);
    const [showModalSuccess, setShowModalSuccess] = useState(false);
    const [contentModalError, setContentModalError] = useState("Hãy nhập đầy đủ các trường!");

    const handleSubmit = async () => {
        if (newPassword !== confirmPassword) {
            setContentModalError("Mật khẩu không trùng khớp");
            setShowModalError(true);
            return;
        }
        try {
            const data = { password, newPassword };
            await onSubmitClick(data);
            setShowModalSuccess(true);
        } catch (error) {
            setContentModalError("Thay đổi mật khẩu không thành công");
            setShowModalError(true);
            console.log(error);
        }

    }

    return (
        <>
            <Modal
                title={"Thay đổi mật khẩu"}
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
                <div>
                    <label for="password" className="form-label">Nhập mật khẩu cũ <span className="text-danger">*</span></label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Nhập mật khẩu cũ"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label for="password" className="form-label">Nhập mật khẩu mới <span className="text-danger">*</span></label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Nhập mật khẩu mới"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label for="password" className="form-label">Nhập lại mật khẩu <span className="text-danger">*</span></label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Nhập lại mật khẩu mới"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>
            </Modal>
            {showModalError && (
                <ModalError onCloseClick={() => setShowModalError(false)}>
                    {contentModalError}
                </ModalError>
            )}
            {showModalSuccess && (
                <ModalSuccess
                    onCloseClick={() => {
                        setShowModalSuccess(false)
                        onCloseClick();
                    }}
                />
            )}
        </>
    );
}
export default ModalPassword;