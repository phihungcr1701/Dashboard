import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear} from '@fortawesome/free-solid-svg-icons';
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

function Toast({ id, nameAdmin, title, content, date }) {
    return (
        <>
            <div className="container mt-3">
                <div className="task-card">
                    <div className="task-content">
                        <FontAwesomeIcon icon={faUserGear} size="2x" className="text-danger"></FontAwesomeIcon>
                        <span className="ms-xl-2 text-danger">{nameAdmin}</span>
                        <span className="badge bg bg-secondary ms-xl-2 p-2">{formatDate(date)}</span>
                        <h3 className="mt-3">{title}</h3>
                        <p className="text-muted">{content}</p>
                        <button className="view-task" data-bs-toggle="modal" data-bs-target={`#${id}`}>Chi tiết</button>
                    </div>
                    <button className="task-delete">Xóa</button>
                </div>
            </div>
            
            <div className="modal fade" id={id} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-center">
                            <h5 className="modal-title">{title}</h5>
                        </div>
                        <div className="modal-body">
                            <p>{content}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Toast;