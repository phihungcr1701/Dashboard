import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { editNotification, delNotification } from "../../services/notificationService";
import './style.css'
import ModalAddNotification from "../Modal/ModalAddNotification";
import ModalWarning from '../Modal/ModalWarning'
import ModalNotification from "../Modal/ModalNotification";

const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${hours}:${minutes} | ${day}/${month}/${year}`;
};

function Toast({ id, nameAuthor, title, content, date, currentRole }) {

    const [showModalEditNotification, setShowModalEditNotification] = useState(false);
    const [showModalDelNotification, setShowModalDelNotification] = useState(false);
    const [showModalNotification, setShowModalNotification] = useState(false);

    const handleToastClick = () => {
        let value = !showModalNotification;
        setShowModalNotification(value);
    }
    const handleEditClick = () => {
        let value = !showModalEditNotification;
        setShowModalEditNotification(value);
    }
    const handleEditSubmit = async (title, content) => {
        try {
            const res = await editNotification(id, title, content);
            return res.mess;
        } catch (error) {
            throw error;
        }
    }
    const handleDeleteClick = () => {
        let value = !showModalDelNotification;
        setShowModalDelNotification(value);
    }
    const handleDeleteSubmit = async () => {
        try {
            const res = await delNotification(id);
            return res.mess;
        } catch (error) {
            throw error;
        }
    }

    return (
        <>
            <div className="container mt-3">
                <div className="task-card">
                    <div
                        className="task-content"
                        onClick={handleToastClick}
                    >
                        <FontAwesomeIcon icon={faUserGear} size="2x" className="text-danger"></FontAwesomeIcon>
                        <span className="ms-xl-2 text-danger">{nameAuthor}</span>
                        <span className="badge bg bg-secondary ms-xl-2 p-2">{formatDate(date)}</span>
                        <h3 className="mt-3">{title}</h3>
                        <p className="text-muted">{content}</p>
                    </div>

                    {currentRole.data.role === 'admin' && (
                        <>
                            <button
                                className="task-edit"
                                onClick={handleEditClick}
                            >
                                Sửa
                            </button>
                            <button
                                className="task-delete"
                                onClick={() => handleDeleteClick(id)}
                            >
                                Xóa
                            </button>
                        </>
                    )}
                </div>
            </div>

            {showModalNotification && (
                <ModalNotification
                    title={title}
                    content={content}
                    onCloseClick={handleToastClick}
                />
            )}
            {showModalEditNotification && (
                <ModalAddNotification
                    onCloseClick={handleEditClick}
                    onSubmitClick={handleEditSubmit}
                    title={title}
                    content={content}
                />
            )}
            {showModalDelNotification && (
                <ModalWarning
                    onCloseClick={handleDeleteClick}
                    onSubmitClick={handleDeleteSubmit}
                >
                    {"Bạn có chắc chắn muốn xóa thông báo này không"}
                </ModalWarning>
            )}
        </>
    );
}
export default Toast;