import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FormFloating from "../../components/FormFloating";
import InputGroup from "../../components/InputGroup";

function Login() {
    const [showPass, setShowPass] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [canSubmit, setCanSubmit] = useState(false);

    const handleShowPass = (value) => {
        setShowPass(value);
    }
    const handleEmailInputChange = (value) => {
        setEmailInput(value);
        // console.log("Email: ", value);
    }
    const handlePassInputChange = (value) => {
        setPassInput(value);
        // console.log("Name: ", value);
    }
    const handleSubmit = () => {
        if (!emailInput && !passInput) {
            console.log("Hãy điền đầy đủ thông tin");
        }
    }
    return (
        <InputGroup
            title={"Đăng nhập"}
            onShowPassClick={handleShowPass}
            onSubmit={handleSubmit}
        >
            <>
                <FormFloating
                    type={"email"}
                    id={"email"}
                    placeholder={"Địa chỉ Email"}
                    labelContent={"Địa chỉ Email"}
                    onInputChange={handleEmailInputChange}
                />
                <FormFloating
                    type={"password"}
                    id={"password"}
                    placeholder={"Mật khẩu"}
                    labelContent={"Mật khẩu"}
                    showPass={showPass}
                    onInputChange={handlePassInputChange}
                />
            </>
            <Link to="/register">Tạo tài khoản mới?</Link>
        </InputGroup>
    );
}

export default Login;