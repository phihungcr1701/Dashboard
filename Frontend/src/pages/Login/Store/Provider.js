import { Link, useNavigate } from "react-router-dom";
import CenterLayout from '../../../components/Layouts/CenterLayout';
import Context from "./Context";
import { checkLogin, setLoginInterface } from "./Actions";
import { useRef, useEffect, useReducer } from "react";
import Reducer, { initState } from "./Reducer";

function Provider() {
    const formRef = useRef();
    const [state, dispatch] = useReducer(Reducer, initState);
    const { data } = setLoginInterface();
    const navigate = useNavigate()

    useEffect(() => {
        const formElement = formRef.current;

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

            if (formDataObject.name === "" || formDataObject.password === "")
                alert("Nhập đầy đủ thông tin!");
            else {
                const loginResult = await checkLogin(formDataObject);
                dispatch(loginResult);
            }
        };

        formElement.addEventListener('submit', handleSubmit);

        return () => {
            formElement.removeEventListener('submit', handleSubmit);
        };
    }, []);
    
    if (state)
        navigate('/');

    return (
        <Context.Provider value={{data, formRef}}>
            <CenterLayout>     
                <Link to="/register">Don't have an account yet?</Link>
            </CenterLayout>
        </Context.Provider>
    );
}

export default Provider;