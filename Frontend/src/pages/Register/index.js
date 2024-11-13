import { Link } from "react-router-dom";
import { useState } from "react";
import InputGroup from "../../components/InputGroup";
import FormFloating from "../../components/FormFloating";

function Register() {
    const [showPass, setShowPass] = useState(false);
    const handleShowPass = (value) => {
        setShowPass(value);
    }

    return (
        <InputGroup
            title={"Đăng ký"}
            onShowPassClick={value => handleShowPass(value)}
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
                />
                <FormFloating
                    type={"password"}
                    id={"password"}
                    placeholder={"Mật khẩu"}
                    labelContent={"Mật khẩu"}
                    showPass={showPass}
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