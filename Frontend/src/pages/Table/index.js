import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../../components/BreadCrumb";
import DataTable from "../../components/DataTable/index.js";
import { getAllUser } from "../../services/userService.js";
import { deleteAccount, registerUser } from "../../services/authService.js";
import { useDispatch } from "react-redux";
import dowloadExcel from "../../services/dowloadExcel.js";
import { useParams } from "react-router-dom";


function Table({ icon, showBreadCrumb = true }) {

    const typePath = useParams().type;
    let initialValueCheck = null;
    if (typePath === "monthlyVisits") {
        initialValueCheck = "Lượt truy cập trong tháng";
    } else if (typePath === "newUsersMonth") {
        initialValueCheck = "Người dùng mới trong tháng";
    } else if (typePath === "userOffMonth") {
        initialValueCheck = "Người dùng không hoạt động";
    } else {
        initialValueCheck = "Danh sách người dùng";
    }

    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [isSortAsc, setSortAsc] = useState(false);
    const [activeColumn, setActiveColumn] = useState(null);
    const [valueCheck, setValueCheck] = useState(initialValueCheck);
    const dispatch = useDispatch();

    const columnsName = ["Tên", "Email", "Quyền", "Ngày tham gia", "Hành động"];

    useEffect(() => {
        const fetchUser = async () => {
            const result = await getAllUser(valueCheck, input, activeColumn, isSortAsc);
            if (result && result.data) {
                setData(result.data);
            }
        }
        fetchUser();
    }, [valueCheck, input, isSortAsc, activeColumn])

    const handleModalAddUserSubmit = async (user) => {
        try {
            const res = await registerUser(user, dispatch);
            return res.mess;
        } catch (error) {
            throw error;
        }
    }
    const handleModalExportSubmit = async (valueExport) => {
        try {
            if (valueExport === "filter") {
                await dowloadExcel(valueCheck, input, activeColumn, isSortAsc);
            } else {
                await dowloadExcel();
            }
        } catch (error) {
            throw error;
        }
    }

    const handleModalDeleteSubmit = async (accountId) => {
        try {
            const res = await deleteAccount(accountId);
            return res.mess;
        } catch (error) {
            throw error;
        }
    }

    return (
        <>
            {showBreadCrumb &&
                <>
                    <BreadCrumb
                        namePage={"Quản lý người dùng"}
                    />
                    <select
                        defaultValue={valueCheck}
                        className="form-select mb-4"
                        onChange={(e) => setValueCheck(e.target.value)}
                    >
                        <option value={"Danh sách người dùng"}>Danh sách người dùng</option>
                        <option value={"Người dùng mới trong tháng"}>Người dùng mới trong tháng</option>
                        <option value={"Người dùng không hoạt động"}>Người dùng không hoạt động trong tháng</option>
                        <option value={"Lượt truy cập trong tháng"}>Lượt truy cập trong tháng</option>
                    </select>
                </>
            }

            <div className="card mb-4">
                <div className="card-header">
                    <FontAwesomeIcon icon={icon || faTable} className="me-1"></FontAwesomeIcon>
                    {valueCheck}
                </div>
                <div className="card-body">
                    <DataTable
                        columnsName={columnsName}
                        data={data}
                        onSearchChange={value => setInput(value)}
                        onColumnActive={nameColumn => setActiveColumn(nameColumn)}
                        onSortAscChange={value => setSortAsc(value)}
                        onModalAddUserSubmit={handleModalAddUserSubmit}
                        onModalExportSubmit={handleModalExportSubmit}
                        onModalDeleteSubmit={handleModalDeleteSubmit}
                    />
                </div>
            </div>
        </>
    );
}

export default Table;
