import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import InputGroup from "../../components/InputGroup";
import FormFloating from "../../components/FormFloating";
import { registerUser } from "../../services/authService";
import { useDispatch } from "react-redux";

function Register() {
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPass = (value) => {
        setShowPass(value);
    }
    const handleEmailChange = (value) => {
        setEmail(value);
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleSubmit = () => {
        // if (!email && !password) {
        //     console.log("Hãy điền đầy đủ thông tin");
        // }
        const user = { email, password };
        registerUser(user, dispatch, navigate);
    }

    return (
        <InputGroup
            title={"Đăng ký"}
            onShowPassClick={value => handleShowPass(value)}
            onSubmit={handleSubmit}
        >
            <>
                <div className="row">
                    <div className="col-md-6">
                        <FormFloating
                            type={"text"}
                            id={"lastName"}
                            placeholder={"Họ"}
                            labelContent={"Họ"}
                        />
                    </div>
                    <div className="col-md-6">
                        <FormFloating
                            type={"text"}
                            id={"firstName"}
                            placeholder={"Tên"}
                            labelContent={"Tên"}
                        />
                    </div>
                </div>
                <FormFloating
                    type={"email"}
                    id={"email"}
                    placeholder={"Địa chỉ Email"}
                    labelContent={"Địa chỉ Email"}
                    onInputChange={handleEmailChange}
                />
                <FormFloating
                    type={"password"}
                    id={"password"}
                    placeholder={"Mật khẩu"}
                    labelContent={"Mật khẩu"}
                    showPass={showPass}
                    onInputChange={handlePasswordChange}
                />
                <FormFloating
                    type={"password"}
                    id={"confirmPassword"}
                    placeholder={"Nhập lại mật khẩu"}
                    labelContent={"Nhập lại mật khẩu"}
                    showPass={showPass}
                />
            </>
            <Link to="/login">Bạn đã có tài khoản?</Link>
        </InputGroup>
    );
}

export default Register;