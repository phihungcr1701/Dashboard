import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css"

function DataTable({ columnsName, data, onSearchChange, onColumnActive, onSortAscChange }) {

    const [isSortAsc, setSortAsc] = useState(false);
    const [activeColumn, setActiveColumn] = useState(null);
    const [valueCheck, setValueCheck] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationItems, setPaginationItems] = useState([]);
    const [input, setInput] = useState("");

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

    const dataCurrentPage = data.slice((currentPage - 1) * valueCheck, currentPage * valueCheck);

    return (
        <>
            <div className="row d-flex justify-content-between pb-3">
                <div className="col-1">
                    <select
                        defaultValue={10}
                        className="form-select p-2"
                        onChange={(e) => handleSelectChange(e.target.value)}
                    >
                        <option value={1}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                </div>
                <div className="col-3">
                    <input
                        value={input}
                        className="form-control col-6"
                        placeholder="Tìm kiếm..."
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                </div>
            </div>

            <table id="datatablesSimple" className="table table-bordered table-hover table--fs">
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
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.gender}</td>
                                <td>{data.date}</td>
                                <td>{data.phone}</td>
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
        </>
    );
}
export default DataTable;