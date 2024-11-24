import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Modal from '../../components/Modal'
import { editNotification, delNotification } from "../../services/notificationService";
import './style.css'

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
    const [titleChange, setTitleChange] = useState(title);
    const [contentChange, setContentChange] = useState(content);
    const [haveValue, setHaveValue] = useState(true);

    const resetData = () => {
        setTimeout(() => {
            setTitleChange(title);
            setContentChange(content);
        }, 1000);
    }

    const handleDelete = async (id) => {
        await delNotification(id);
    }

    const handleEdit = async () => {
        if (!titleChange || !contentChange) {
            setHaveValue(false);
            return;
        }
        await editNotification(id, titleChange, contentChange);
    }

    return (
        <>
            <div className="container mt-3">
                <div className="task-card">
                    <div className="task-content" data-bs-toggle="modal" data-bs-target={`#show${id}`}>
                        <FontAwesomeIcon icon={faUserGear} size="2x" className="text-danger"></FontAwesomeIcon>
                        <span className="ms-xl-2 text-danger">{nameAuthor}</span>
                        <span className="badge bg bg-secondary ms-xl-2 p-2">{formatDate(date)}</span>
                        <h3 className="mt-3">{title}</h3>
                        <p className="text-muted">{content}</p>
                    </div>
                    {currentRole.data.role === 'admin' && (
                        <>
                            <button className="task-edit" data-bs-toggle="modal" data-bs-target={`#edit${id}`}>Sửa</button>
                            <button className="task-delete" onClick={() => handleDelete(id)}>Xóa</button>
                        </>
                    )}
                </div>
            </div>
            
            <Modal
                id={`show${id}`}
                title={title}
            >
                {content}
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            </Modal>

            <Modal
                id={`edit${id}`}
                title={"Cập nhật thông báo"}
            >
                <>
                    <textarea className="form-control mb-4" rows="2" placeholder="Nhập tiêu đề..." onChange={e => setTitleChange(e.target.value)} value={titleChange}></textarea>
                    <textarea className="form-control" rows="5" placeholder="Nhập nội dung..." onChange={e => setContentChange(e.target.value)} value={contentChange}></textarea>
                    {!haveValue && <span style={{color: 'red'}}>Nhập đủ thông tin!</span>}
                </>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={resetData}>Đóng</button>
                <button type="button" className="btn btn-primary" onClick={handleEdit}>Xác nhận</button>
            </Modal>
        </>
    );
}
export default Toast;