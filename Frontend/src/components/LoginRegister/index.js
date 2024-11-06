import { useGetContext } from '../Store';
import { useState } from 'react';

function LoginRegister({children}) {
    const {data, formRef} = useGetContext();
    const {title, accountItems, informationItems} = data;

    const [state, setState] = useState({
        check: {email: "", password: "", confirmPassword: "confirmPassword"},           
        show: false, 
    });

    const handleCheck = event => {
        event.preventDefault();
        const formElement = formRef.current;
        const formData = new FormData(formElement);

        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        const newCheck = {email: "", password: "", confirmPassword: ""};

        if (email !== "") {
            newCheck.email = 'email';
        }

        if (password !== "") {
            newCheck.password = 'password';
        }

        if (confirmPassword === password) {
            newCheck.confirmPassword = 'confirmPassword';
        }

        setState(prevState => ({
            ...prevState, 
            check: newCheck, 
        }));
    }

    const handleShow = event => {
        setState(prevState => ({
            ...prevState,
            show: !state.show
        }))
    }

    return (
        <>
            <div className="card-header p-0 mt-n4 mx-3 z-index-2">
                <div className="py-3 pe-1">
                    <h3 className="text-center mt-2 mb-2 fw-bold text-primary text-uppercase">{title}</h3>
                </div>
            </div>
            <form ref={formRef}>
                <div className="card-body px-4 py-5" >
                    <div className="row">
                        {informationItems.name.map((value, index) => (
                            <div className="col-md-6 mb-4">
                                <div className="form-floating" key={`${value}-${index}`}>
                                    <input type={informationItems.type[index]} className="form-control" name={informationItems.name[index]} placeholder={informationItems.text[index]} />
                                    <label htmlFor={informationItems.name[index]}>{informationItems.text[index]}</label>
                                </div>
                            </div>
                        ))}   
                    </div>

                    {accountItems.name.map((value, index) => (
                        <div key={`${value}-${index}`}>
                            <div className="form-floating">
                                <input 
                                    type={state.show && (accountItems.name[index] === "password" || accountItems.name[index] === "confirmPassword") 
                                        ? "text" : accountItems.type[index]} 
                                    className="form-control" 
                                    name={accountItems.name[index]} 
                                    placeholder={accountItems.text[index]} 
                                    onChange={handleCheck} 
                                />
                                <label htmlFor={accountItems.name[index]}>{accountItems.text[index]}</label>
                            </div>
                            <label 
                                name={accountItems.name[index] + "Label"} 
                                className="mb-2 ms-2" 
                                style={{ color: '#ff0000' }}
                            >
                                {
                                    accountItems.name[index] !== "confirmPassword" && 
                                    state.check[accountItems.name[index]] === "" && 
                                    (`* Thiếu ${accountItems.text[index].toLowerCase()} * `)
                                }
                                {
                                    accountItems.name[index] === "confirmPassword" && 
                                    state.check[accountItems.name[index]] === "" && 
                                    (`* Không khớp mật khẩu * `)
                                }
                            </label>
                        </div>
                    ))}
                    
                    <div className="form-check form-switch d-flex align-items-center mb-3">
                        <input className="form-check-input" type="checkbox" name="showPassword" onClick={handleShow} />
                        <label className="form-check-label mb-0 ms-3" htmlFor="showPassword">Hiển thị mật khẩu</label>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type='submit' className="btn btn-primary btn-lg mb-4 w-100" name="enter">{title}</button>
                    </div>
                </div>
                <div className="card-footer text-center align-items-center py-4" >
                {children}
                </div>
            </form>
        </>
    );
}

export default LoginRegister;