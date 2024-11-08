import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../../components/BreadCrumb";
import DataTable from "../../components/DataTable/index.js";
import { getAllUser } from "../../services/userService.js";

function Table({ icon, showBreadCrumb = true, children }) {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [isSortAsc, setSortAsc] = useState(false);
    const [activeColumn, setActiveColumn] = useState(null);

    const columnsName = ["ID", "Tên", "Giới tính", "Ngày sinh", "Số điện thoại"];

    useEffect(() => {
        const fetchUser = async () => {
            const result = await getAllUser(input, activeColumn, isSortAsc);
            if (result && result.data) {
                setData(result.data);
            }
        }
        fetchUser();
    }, [input, isSortAsc, activeColumn])

    const handleSearchChange = (value) => {
        console.log(value);
        setInput(value);
    }
    const handleColumnActive = (nameColumn) => {
        setActiveColumn(nameColumn);
        console.log(nameColumn)
    }
    const handleSortAscChange = (value) => {
        setSortAsc(value);
        console.log(value);
    }

    return (
        <>
            {showBreadCrumb &&
                <BreadCrumb
                    namePage={"Quản lý người dùng"}
                />
            }
            <div className="card mb-4">
                <div className="card-header">
                    <FontAwesomeIcon icon={icon || faTable} className="me-1"></FontAwesomeIcon>
                    Danh sách người dùng
                </div>
                <div className="card-body">
                    <DataTable
                        columnsName={columnsName}
                        data={data}
                        onSearchChange={handleSearchChange}
                        onColumnActive={handleColumnActive}
                        onSortAscChange={handleSortAscChange}
                    />
                </div>
            </div>
        </>
    );
}

export default Table;
