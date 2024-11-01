import Header from "./Header";
import Sidebar from "./Sidebar";
import './style.css';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <div className="container-fluid px-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DefaultLayout;