import { faTachometerAlt, faColumns, faTable, faChartArea, faBell } from '@fortawesome/free-solid-svg-icons';
import ButtonNav from "../../../ButtonNav";

function Sidebar() {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <ButtonNav
                        path={""}
                        icon={faTachometerAlt}
                        content={"Trang chủ"}
                    />
                    <ButtonNav
                        path={"table"}
                        icon={faColumns}
                        content={"Quản lý người dùng"}
                    />
                    <ButtonNav
                        path={"chart"}
                        icon={faChartArea}
                        content={"Thống kê"}
                    />
                    <ButtonNav
                        path={"notification"}
                        icon={faBell}
                        content={"Thông báo"}
                    />
                    <ButtonNav
                        path={"setting"}
                        icon={faTable}
                        content={"Cài đặt tài khoản"}
                    />


                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Admin
            </div>
        </nav>
    );
}
export default Sidebar;