import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb";
import Toast from "../../components/Toast";
import {getAllNotification, addNotification} from '../../services/notificationService';
import Modal from '../../components/Modal'
import './style.css'

function Notification() {
    const currentRole = useSelector((state) => state.auth.login?.currentUser);
    const [toasts, setToasts] = useState([]);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [valueCheck, setValueCheck] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationItems, setPaginationItems] = useState([]);
    const [haveValue, setHaveValue] = useState(true);

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

    const handleAddToast = async () => {    
        if (!title || !content) {
            setHaveValue(false);
            return;
        }
        await addNotification(title, content, currentRole.data.id);
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

            {dataCurrentPage.map(item => (<Toast 
                key={item.id}
                id={item.id}
                nameAuthor={item.nameAuthor}
                title={item.title}
                content={item.content}
                date={item.createdAt}
                currentRole={currentRole}
            />))}

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
            {currentRole.data.role === 'admin' && <div className="floating-circle" data-bs-toggle="modal" data-bs-target="#addToast">+</div>}
            <Modal
                id="addToast"
                title="Thông báo đến các user"
            >
                <>
                    <textarea className="form-control mb-4" rows="2" placeholder="Nhập tiêu đề..." onChange={e => setTitle(e.target.value)}></textarea>
                    <textarea className="form-control" rows="5" placeholder="Nhập nội dung..." onChange={e => setContent(e.target.value)}></textarea>
                    {!haveValue && <span style={{color: 'red'}}>Nhập đủ thông tin!</span>}
                </>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                <button type="button" className="btn btn-primary" onClick={handleAddToast}>Xác nhận</button>
            </Modal>
        </>
    );
}
export default Notification;