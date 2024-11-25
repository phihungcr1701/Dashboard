import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Toast from "../../components/Toast";
import './style.css'
import axios from 'axios'

function Notification() {
    const [toasts, setToasts] = useState([]);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await axios.get('http://localhost:1234/api/data')).data;
                setToasts(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const addToast = () => {
        console.log(title, content);
    }

    return (
        <>
            <BreadCrumb
                namePage={"Thông báo"}
            />
            {toasts.map(item => (<Toast
                key={item.id}
                id={item.id}
                nameAdmin={item.nameAdmin}
                title={item.title}
                content={item.content}
                date={item.createdAt}
            />))}
            <div className="floating-circle" data-bs-toggle="modal" data-bs-target="#addToast">+</div>
            <div className="modal fade" id="addToast" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-center">
                            <h5 className="modal-title">Thông báo đến các user</h5>
                        </div>
                        <div className="modal-body">
                            <textarea className="form-control mb-4" rows="2" placeholder="Nhập tiêu đề..." onChange={e => setTitle(e.target.value)}></textarea>
                            <textarea className="form-control" rows="5" placeholder="Nhập nội dung..." onChange={e => setContent(e.target.value)}></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                            <button type="button" className="btn btn-primary" onClick={addToast}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Notification;