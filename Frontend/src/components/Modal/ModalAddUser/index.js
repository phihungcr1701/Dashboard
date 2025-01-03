import { useState } from "react";
import Modal from "..";
import ModalError from "../ModalError";
import ModalSuccess from "../ModalSuccess";

function ModalAddUser({ onSubmitClick, onCloseClick }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const [showModalError, setShowModalError] = useState(false);
    const [contentModalError, setContentModalError] = useState("");
    const [showModalSuccess, setShowModalSuccess] = useState(false);

    const handleSubmit = async () => {
        if (!name || !email || !password) {
            setShowModalError(true);
            setContentModalError("Hãy nhập đầy đủ thông tin!");
            return;
        }
        const user = { name, email, role, password };
        try {
            const res = await onSubmitClick(user);
            setShowModalSuccess(true);
            console.log(res);
        } catch (error) {
            setShowModalError(true);
            setContentModalError("Tài khoản đã tồn tại. Vui lòng thử lại!");
            console.log(error);
        }
    }
    return (
        <>
            <Modal
                title={"Thêm User"}
                className={showModalSuccess || showModalError ? "blurred" : ""}
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
                    <label for="name" className="form-label">Họ và tên <span className="text-danger">*</span></label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        placeholder="Họ và tên"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label for="email" className="form-label">Email <span className="text-danger">*</span></label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label for="role" className="form-label">Quyền</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="admin"
                            value="admin"
                            checked={role === "admin"}
                            onChange={e => setRole(e.target.value)}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="admin"
                        >
                            Admin
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="user"
                            value="user"
                            name="role"
                            checked={role === "user"}
                            onChange={e => setRole(e.target.value)}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="user"
                        >
                            User
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="pass" className="form-label">Mật khẩu <span className="text-danger">*</span></label>
                    <input
                        type="password"
                        className="form-control"
                        id="pass"
                        required
                        placeholder="Mật khẩu"
                        onChange={e => setPassword(e.target.value)}
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
                        onCloseClick()
                    }}
                />
            )}
        </>
    );
}
export default ModalAddUser;