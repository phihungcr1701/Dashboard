import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function CenterLayout({ children, title, accountItems, informationItems}) {
    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 text-center text-lg-start my-5">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0 z-index">
                        <h1 className="my-5 display-5 fw-bold" style={{ color: 'hsl(218, 81%, 95%)' }}> The best user manager <br />
                            <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
                        </h1>
                        <p className="mb-4" style={{ color: 'hsl(218, 81%, 85%)' }}>Nguyễn Khả Hào - Trần Phi Hùng</p>
                    </div>
                    <div className="col-lg-6 position-relative">
                        <div id="radius-shape-1"></div>
                        <div id="radius-shape-2"></div>
                        <div id="radius-shape-3"></div>
                        <div id="radius-shape-4"></div>
                        <div className="card bg-glass">
                            <div className="card-header p-0 mt-n4 mx-3 z-index-2">
                                <div className="py-3 pe-1">
                                    <h3 className="text-center mt-2 mb-2 fw-bold text-primary">{title}</h3>
                                </div>
                            </div>
                            <div className="card-body px-4 py-5">
                                <form>
                                    <div className="row">
                                        {informationItems.id.map((value, index) => (
                                            <div className="col-md-6 mb-4">
                                                <div className="form-floating">
                                                    <input type={informationItems.type[index]} className="form-control" id={informationItems.id[index]} placeholder={informationItems.name[index]} />
                                                    <label htmlFor={informationItems.id[index]}>{informationItems.name[index]}</label>
                                                </div>
                                            </div>
                                        ))}   
                                    </div>

                                    {accountItems.id.map((value, index) => (
                                        <div className="form-floating mb-4">
                                            <input type={accountItems.type[index]} className="form-control" id={accountItems.id[index]} placeholder={accountItems.name[index]} />
                                            <label htmlFor={accountItems.id[index]}>{accountItems.name[index]}</label>
                                        </div>
                                    ))}
                                    
                                    <div className="form-check form-switch d-flex align-items-center mb-3">
                                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                                        <label className="form-check-label mb-0 ms-3" htmlFor="rememberMe">Show password</label>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary btn-lg mb-4 w-100">Enter</button>
                                    </div>

                                    <div className="text-center">
                                        {children}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CenterLayout;