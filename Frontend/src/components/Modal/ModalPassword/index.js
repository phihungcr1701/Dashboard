import { useState } from "react";
import Modal from "..";
import ModalError from "../ModalError";

function ModalPassword({ onSubmitClick, onCloseClick }) {

    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showModalError, setShowModalError] = useState(false);
    const [showModalSuccess, setShowModalSuccess] = useState(false);

    const handleSubmit = async () => {
        if (newPassword !== confirmPassword) {
            ///
            setShowModalError(true);
            return;
        }
        try {
            const data = { password, newPassword };
            const res = await onSubmitClick(data);
            setShowModalSuccess(true);
            // 
            console.log(res);
            onCloseClick();
        } catch (error) {
            setShowModalError(true);
            console.log(error);
        }

    }

    return (
        <>
            <Modal
                title={"Thay đổi mật khẩu"}
                onCloseClick={onCloseClick}
                onSubmitClick={handleSubmit}
            >
                <div>
                    <label for="password" class="form-label">Nhập mật khẩu cũ <span class="text-danger">*</span></label>
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
                    <label for="password" class="form-label">Nhập mật khẩu mới <span class="text-danger">*</span></label>
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
                    <label for="password" class="form-label">Nhập lại mật khẩu <span class="text-danger">*</span></label>
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
            {/* {showModalError && (
                <ModalError />
            )} */}
        </>
    );
}
export default ModalPassword;