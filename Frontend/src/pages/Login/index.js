import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import FormFloating from "../../components/FormFloating";
import InputGroup from "../../components/InputGroup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/authService";


function Login() {
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [msgError, setMsgError] = useState("");

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
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setIsError(true);
            setMsgError("Hãy điền đầy đủ thông tin!");
            return;
        }
        const user = { email, password };
        try {
            setIsError(false);
            await loginUser(user, dispatch, navigate);
        } catch (error) {
            console.log(error);
            setIsError(true);
            setMsgError("Sai tài khoản hoặc mật khẩu!");
        }

    }
    return (
        <InputGroup
            title={"Đăng nhập"}
            onShowPassClick={handleShowPass}
            onSubmit={handleSubmit}
            msgError={isError && msgError}
        >
            <>
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
            </>
            <Link to="/register">Tạo tài khoản mới?</Link>
        </InputGroup>
    );
}

export default Login;