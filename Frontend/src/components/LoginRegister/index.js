import { useGetContext } from '../Store';

function LoginRegister({children}) {
    const {data, formRef} = useGetContext();
    const {title, accountItems, informationItems} = data;

    return (
        <>
            <div className="card-header p-0 mt-n4 mx-3 z-index-2">
                <div className="py-3 pe-1">
                    <h3 className="text-center mt-2 mb-2 fw-bold text-primary text-uppercase">{title}</h3>
                </div>
            </div>
            <div className="card-body px-4 py-5" >
                <form ref={formRef}>
                    <div className="row">
                        {informationItems.id.map((value, index) => (
                            <div className="col-md-6 mb-4">
                                <div className="form-floating" key={`${value}-${index}`}>
                                    <input type={informationItems.type[index]} className="form-control" name={informationItems.id[index]} placeholder={informationItems.name[index]} />
                                    <label htmlFor={informationItems.id[index]}>{informationItems.name[index]}</label>
                                </div>
                            </div>
                        ))}   
                    </div>

                    {accountItems.id.map((value, index) => (
                        <div className="form-floating mb-4" key={`${value}-${index}`}>
                            <input type={accountItems.type[index]} className="form-control" name={accountItems.id[index]} placeholder={accountItems.name[index]} />
                            <label htmlFor={accountItems.id[index]}>{accountItems.name[index]}</label>
                        </div>
                    ))}
                    
                    <div className="form-check form-switch d-flex align-items-center mb-3">
                        <input className="form-check-input" type="checkbox" name="showPassword" />
                        <label className="form-check-label mb-0 ms-3" htmlFor="showPassword">Hiển thị mật khẩu</label>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type='submit' className="btn btn-primary btn-lg mb-4 w-100" name="enter">{title}</button>
                    </div>

                    <div className="text-center">
                        {children}
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginRegister;