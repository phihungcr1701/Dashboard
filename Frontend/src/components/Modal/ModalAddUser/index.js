import { useState } from "react";
import Modal from "..";

function ModalAddUser({ onSubmitClick, onCloseClick }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const [showModalError, setShowModalError] = useState(false);
    const [showModalSuccess, setShowModalSuccess] = useState(false);

    const handleSubmit = async () => {
        if (!name || !email || !password) {
            setShowModalError(true);
            return;
        }
        const user = { name, email, role, password };
        try {
            const res = await onSubmitClick(user);
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
                title={"Thêm User"}
                onCloseClick={onCloseClick}
                onSubmitClick={handleSubmit}
            >
                <div>
                    <label for="name" class="form-label">Họ và tên <span class="text-danger">*</span></label>
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
                    <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
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
                    <label for="role" class="form-label">Quyền</label>
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
                    <label htmlFor="pass" className="form-label">Mật khẩu <span class="text-danger">*</span></label>
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
            {/* {showModalError && (
            
            )} */}
            {/* {showModalSuccess && (

            )} */}
        </>
    );
}
export default ModalAddUser;