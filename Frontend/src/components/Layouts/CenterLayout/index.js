import './style.css';

function CenterLayout({children}) {
    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 text-center text-lg-start my-5">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0 z-index">
                        <h1 className="my-5 display-5 fw-bold" style={{ color: 'hsl(218, 81%, 95%)' }}> Quản lý người dùng <br />
                            <span className="fs-1" style={{ color: 'hsl(218, 81%, 75%)' }}>cho doanh nghiệp của bạn</span>
                        </h1>
                        <p className="mb-4" style={{ color: 'hsl(218, 81%, 85%)' }}>Nguyễn Khả Hào - Trần Phi Hùng</p>
                    </div>
                    <div className="col-lg-6 position-relative">
                        <div id="radius-shape-1"></div>
                        <div id="radius-shape-2"></div>
                        <div id="radius-shape-3"></div>
                        <div id="radius-shape-4"></div>
                        <div className="card bg-glass">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CenterLayout;