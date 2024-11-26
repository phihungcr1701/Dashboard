import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb";
import Toast from "../../components/Toast";
import { getAllNotification, addNotification } from '../../services/notificationService';
import './style.css'
import ModalAddNotification from "../../components/Modal/ModalAddNotification";

function Notification() {
    const currentRole = useSelector((state) => state.auth.login?.currentUser);
    const [toasts, setToasts] = useState([]);
    const [valueCheck, setValueCheck] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationItems, setPaginationItems] = useState([]);
    const [showModalNotification, setShowModalNotification] = useState(false);

    useEffect(() => {

        const numberPage = Math.ceil(toasts.length / valueCheck);

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

    }, [toasts.length, valueCheck, currentPage]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await getAllNotification()).data.reverse();
                setToasts(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleAddClick = () => {
        let value = !showModalNotification;
        setShowModalNotification(value);
    }
    const handleAddSubmit = async (title, content) => {
        try {
            const res = await addNotification(title, content, currentRole.data.id);
            return res.mess;
        } catch (error) {
            throw error;
        }
    }

    const handleSelectChange = (value) => {
        setValueCheck(value);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const dataCurrentPage = toasts.slice((currentPage - 1) * valueCheck, currentPage * valueCheck);

    return (
        <>
            <BreadCrumb
                namePage={"Thông báo"}
            />
            <div className="row d-flex justify-content-between pb-3">
                <div className="col-1">
                    <select
                        defaultValue={10}
                        className="form-select p-2"
                        onChange={(e) => handleSelectChange(e.target.value)}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                </div>
            </div>

            {dataCurrentPage.map(item => (
                <Toast
                    key={item.id}
                    id={item.id}
                    nameAuthor={item.nameAuthor}
                    title={item.title}
                    content={item.content}
                    date={item.createdAt}
                    currentRole={currentRole}
                />
            ))}

            <div className="row-cols-1">
                <ul className="pagination d-flex justify-content-center">
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
                            disabled={currentPage === Math.ceil(toasts.length / valueCheck)}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Kế tiếp
                        </button>
                    </li>
                </ul>
            </div>

            {currentRole.data.role === 'admin' && (
                <div
                    className="floating-circle"
                    onClick={handleAddClick}
                >
                    +
                </div>
            )}
            {showModalNotification && (
                <ModalAddNotification
                    onCloseClick={handleAddClick}
                    onSubmitClick={handleAddSubmit}
                />
            )}
        </>
    );
}
export default Notification;