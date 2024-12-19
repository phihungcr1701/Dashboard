import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"
import { faUpload, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ModalExport from "../Modal/ModalExport";
import ModalAddUser from "../Modal/ModalAddUser";
import ModalWarning from "../Modal/ModalWarning";

function DataTable({ columnsName, data, onSearchChange, onColumnActive, onSortAscChange,
    onModalExportSubmit, onModalAddUserSubmit, onModalDeleteSubmit }) {

    const [isSortAsc, setSortAsc] = useState(false);
    const [activeColumn, setActiveColumn] = useState(null);
    const [valueCheck, setValueCheck] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationItems, setPaginationItems] = useState([]);
    const [input, setInput] = useState("");
    const [accountId, setAccountId] = useState("");

    const [showModalExport, setShowModalExport] = useState(false);
    const [showModalAddUser, setShowModalAddUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const formatDate = (value) => {
        const date = new Date(value);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = String(date.getFullYear());
        const formattedDate = date.toLocaleDateString("vi-VN")
        const formattedDateInForm = `${year}-${month}-${day}`;
        return { formattedDate, formattedDateInForm };
    }

    useEffect(() => {

        const numberPage = Math.ceil(data.length / valueCheck);

        setPaginationItems(() => {
            let pages = [];
            let temp = 2;

            if (currentPage <= 5) {
                for (let i = 1; i <= numberPage; i++) {
                    if (i <= 7 || i === numberPage)
                        pages.push(i);
                }
            } else if (numberPage - currentPage <= 5) {
                for (let i = 1; i <= numberPage; i++) {
                    if (i === 1 || numberPage - i <= 6)
                        pages.push(i);
                }
            } else {
                for (let i = 1; i <= numberPage; i++) {
                    if (i === 1 || i === numberPage || (i >= currentPage - temp && i <= currentPage + temp))
                        pages.push(i);
                }
            }
            for (let i = 0; i < pages.length; i++) {
                if (pages[i + 1] - pages[i] > 1) {
                    pages.splice(i + 1, 0, "...");
                    i++;
                }
            }
            return pages;
        })

    }, [data.length, valueCheck, currentPage]);

    const handleSortClick = (columnName) => {
        let value = !isSortAsc;
        setSortAsc(value);
        onSortAscChange(value);

        setActiveColumn(columnName);
        onColumnActive(columnName);
    };

    const handleSelectChange = (value) => {
        setValueCheck(value);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleInputChange = (value) => {
        setInput(value);
        onSearchChange(value);
        setCurrentPage(1);
    }
    const handleModalExportClick = () => {
        let value = !showModalExport;
        setShowModalExport(value);
    }
    const handleModalAddUserClick = () => {
        let value = !showModalAddUser;
        setShowModalAddUser(value);
    }
    const handleDeleteClick = (id) => {
        let value = !showModalDeleteUser;
        setAccountId(id);
        setShowModalDeleteUser(value);
    }

    const dataCurrentPage = data.slice((currentPage - 1) * valueCheck, currentPage * valueCheck);

    return (
        <>
            <div className="row d-flex justify-content-between pb-3">
                <div className="col-lg-1 col-md-2">
                    <select
                        defaultValue={10}
                        name="itemShow"
                        className="form-select p-2"
                        onChange={(e) => handleSelectChange(e.target.value)}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                </div>
                <div className="col-lg-7 col-md-8 d-flex align-items-center justify-content-end">
                    <div className="d-flex align-items-center justify-content-end gap-3">
                        <div>
                            <input
                                value={input}
                                name="search"
                                className="form-control"
                                placeholder="Tìm kiếm..."
                                onChange={(e) => handleInputChange(e.target.value)}
                            />
                        </div>
                        <div>
                            <button
                                className="btn btn-outline-primary"
                                onClick={handleModalExportClick}
                            >
                                <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon> Xuất
                            </button>
                        </div>
                        <div>
                            <button
                                className="btn btn-primary"
                                onClick={handleModalAddUserClick}
                            >
                                <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> Thêm người dùng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showModalExport && (
                <ModalExport
                    onCloseClick={handleModalExportClick}
                    onSubmitClick={onModalExportSubmit}
                />
            )}
            {showModalAddUser && (
                <ModalAddUser
                    onCloseClick={handleModalAddUserClick}
                    onSubmitClick={onModalAddUserSubmit}
                />
            )}

            <table className="table table-bordered table-hover table--fs">
                <thead>
                    <tr>
                        {columnsName.map(columnName => (
                            <th key={columnName}>
                                <Link
                                    to=""
                                    className={`datatable__Link--sort ${activeColumn === columnName
                                        ? isSortAsc
                                            ? "datatable--sortAsc"
                                            : "datatable--sortDesc"
                                        : ""
                                        }`}
                                    onClick={() => handleSortClick(columnName)}
                                >
                                    {columnName}
                                </Link>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataCurrentPage.length > 0 ? (
                        dataCurrentPage.map((data) => (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.Account.email}</td>
                                <td>{data.Account.role}</td>
                                <td>{formatDate(data?.createdAt).formattedDate}</td>
                                <td>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-light dropdown-toggle table--fs"
                                            type="button"
                                            id="dropdownMenuButton"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Chọn
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <li>
                                                <Link className="dropdown-item" to={`/setting/${data.accountId}`}>Xem</Link>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={() => handleDeleteClick(data.accountId)}
                                                >
                                                    Xóa
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Không có dữ liệu</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="row-cols-1">
                <ul className="pagination d-flex justify-content-end">
                    <li className="page-item">
                        <button
                            className="page-link"
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Trước
                        </button>
                    </li>
                    {paginationItems.map((page, index) => (
                        <li key={index} className="page-item">
                            <button
                                className={`page-link ${page === currentPage ? "active" : ""}`}
                                disabled={page === currentPage}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li className="page-item">
                        <button
                            className="page-link"
                            disabled={currentPage === Math.ceil(data.length / valueCheck)}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Kế tiếp
                        </button>
                    </li>
                </ul>
            </div>
            {showModalDeleteUser && (
                <ModalWarning
                    onCloseClick={handleDeleteClick}
                    onSubmitClick={() => onModalDeleteSubmit(accountId)}
                >
                    {"Bạn có chắc chắn muốn xóa user này không"}
                </ModalWarning>
            )}
        </>
    );
}
export default DataTable;