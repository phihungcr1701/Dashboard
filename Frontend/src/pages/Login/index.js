import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useReducer } from "react";
import LoginRegister from "../../components/LoginRegister";
import {setLoginInterface, checkLogin, Provider, Reducer, initStateLogin} from '../../components/Store'

function Login() {
    const formRef = useRef();
    const [state, dispatch] = useReducer(Reducer, initStateLogin);
    const { data } = setLoginInterface();
    const navigate = useNavigate()

    useEffect(() => {
        const formElement = formRef.current;

        console.log(formElement);

        const handleSubmit = async (event) => {
            event.preventDefault();

            const formData = new FormData(formElement);
            let formDataObject = { showPassword: 'off' };

            for (const [name, value] of formData.entries()) {
                formDataObject = {
                    ...formDataObject,
                    [name]: value,
                };
            }

            console.log(formElement)
        };

        formElement.addEventListener('submit', handleSubmit);

        return () => {
            formElement.removeEventListener('submit', handleSubmit);
        };
    }, []);

    return (
        <Provider value={{data, formRef}}>
            <LoginRegister>
                <Link to="/register">Tạo tài khoản mới?</Link>
            </LoginRegister>
        </Provider>
        
    );
}

export default Login;