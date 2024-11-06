import './style.css';

function CenterLayout({children}) {
    return (
        
            <div className="container-fluid p-0 background-radial-gradient overflow-hidden">
                <div className="row align-items-center h-100 position-relative">
                    <div className="position-absolute">
                        <div className="position-absolute" id="radius-shape-1"></div>
                        <div className="position-absolute" id="radius-shape-2"></div>
                        <div className="position-absolute" id="radius-shape-3"></div>
                        <div className="position-absolute" id="radius-shape-4"></div>
                    </div>
                    <div className="col-md-6 mb-5 text-center position-relative">
                        <h1 className="my-5 display-5 fw-bold" style={{ color: 'hsl(218, 81%, 95%)' }}> Quản lý người dùng <br />
                            <span className="fs-1" style={{ color: 'hsl(218, 81%, 75%)' }}>cho doanh nghiệp của bạn</span>
                        </h1>
                        <p className="" style={{ color: 'hsl(218, 81%, 85%)' }}>Nguyễn Khả Hào - Trần Phi Hùng</p>
                    </div>
                    <div className="col-md-6 col-lg-5 position-relative">
                        <div className="card bg-glass mx-5">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default CenterLayout;