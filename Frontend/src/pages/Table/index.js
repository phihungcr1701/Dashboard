import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../../components/BreadCrumb";
function Table({ icon, showBreadCrumb = true, children }) {
    return (
        <>
            {showBreadCrumb &&
                <BreadCrumb
                    namePage={"Quản lý người dùng"}
                    isDisplayNone={false}
                />
            }
            <div className="card mb-4">
                <div className="card-header">
                    <FontAwesomeIcon icon={icon || faTable} className="me-1"></FontAwesomeIcon>
                    Danh sách người dùng
                </div>
                <div className="card-body">
                    <table id="datatablesSimple">
                        {children}
                    </table>
                </div>
            </div>
        </>
    );
}
export default Table;