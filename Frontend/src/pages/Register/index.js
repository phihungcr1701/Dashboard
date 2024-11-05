import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useReducer } from "react";
import LoginRegister from "../../components/LoginRegister";
import { setRegisterInterface, checkEmail, Provider, Reducer, initStateRegister } from "../../components/Store";

function Register() {
    const formRef = useRef();
    const [state, dispatch] = useReducer(Reducer, initStateRegister);
    const { data } = setRegisterInterface();
    const navigate = useNavigate()

    // useEffect(() => {
    //     const formElement = formRef.current;

    //     const handleSubmit = async (event) => {
    //         event.preventDefault();

    //         const formData = new FormData(formElement);
    //         let formDataObject = { showPassword: 'off' };

    //         for (const [name, value] of formData.entries()) {
    //             formDataObject = {
    //                 ...formDataObject,
    //                 [name]: value,
    //             };
    //         }

    //         if (formDataObject.name === "" || formDataObject.password === "")
    //             alert("Nhập đầy đủ thông tin!");
    //         else {
    //             const loginResult = await checkLogin(formDataObject);
    //             dispatch(loginResult);
    //         }
    //     };

    //     formElement.addEventListener('submit', handleSubmit);

    //     return () => {
    //         formElement.removeEventListener('submit', handleSubmit);
    //     };
    // }, []);
    
    // if (state)
    //     navigate('/');

    return (
        <Provider value={{data, formRef}}>
            <LoginRegister>
                <Link to="/login">Bạn đã có tài khoản?</Link>
            </LoginRegister>
        </Provider>
    );
}

export default Register;