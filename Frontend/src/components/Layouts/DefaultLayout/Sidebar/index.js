import { faTachometerAlt, faColumns, faTable, faChartArea, faBell } from '@fortawesome/free-solid-svg-icons';
import ButtonNav from "../../../ButtonNav";
import { useSelector } from 'react-redux';

function Sidebar() {
    const user = useSelector((state) => state.auth.login?.currentUser?.data);
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    {user?.role === "admin" &&
                        <div>
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
                        </div>
                    }
                    <ButtonNav
                        path={"notification"}
                        icon={faBell}
                        content={"Thông báo"}
                    />
                    <ButtonNav
                        path={`setting/${user.id}`}
                        icon={faTable}
                        content={"Cài đặt tài khoản"}
                    />
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                {user.email}
            </div>
        </nav>
    );
}
export default Sidebar;