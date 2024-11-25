import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import InputGroup from "../../components/InputGroup";
import FormFloating from "../../components/FormFloating";
import { registerUser } from "../../services/authService";
import { useDispatch } from "react-redux";

function Register() {
    const [showPass, setShowPass] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [isError, setIsError] = useState(false);
    const [msgError, setMsgError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowPass = (value) => {
        setShowPass(value);
    }
    const handleFirstNameChange = (value) => {
        setFirstName(value);
    }
    const handleLastNameChange = (value) => {
        setLastName(value);
    }
    const handleEmailChange = (value) => {
        setEmail(value);
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
    }
    const handleConfirmPasswordChange = (value) => {
        setConfirmPass(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !password || !confirmPass) {
            setIsError(true);
            setMsgError("Hãy điền đầy đủ thông tin!");
            return;
        }
        if (password !== confirmPass) {
            setIsError(true);
            setMsgError("Mật khẩu không trùng khớp!");
            return;
        }
        const name = firstName + lastName;
        const user = { name, email, password };
        try {
            setIsError(false);
            await registerUser(user, dispatch);
            navigate('/login');
        } catch (error) {
            setIsError(true);
            setMsgError("Đăng ký thất bại");
        }
    }

    return (
        <InputGroup
            title={"Đăng ký"}
            onShowPassClick={value => handleShowPass(value)}
            onSubmit={handleSubmit}
            msgError={isError && msgError}
        >
            <>
                <div className="row">
                    <div className="col-md-6">
                        <FormFloating
                            type={"text"}
                            id={"lastName"}
                            placeholder={"Họ"}
                            labelContent={"Họ"}
                            onInputChange={handleFirstNameChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <FormFloating
                            type={"text"}
                            id={"firstName"}
                            placeholder={"Tên"}
                            labelContent={"Tên"}
                            onInputChange={handleLastNameChange}
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
                    onInputChange={handleConfirmPasswordChange}
                />
            </>
            <Link to="/login">Bạn đã có tài khoản?</Link>
        </InputGroup>
    );
}

export default Register;