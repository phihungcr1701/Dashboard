import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../../components/BreadCrumb";
import { getAllUser } from "../../services/userService.js";

function Table({ icon, showBreadCrumb = true, children }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const result = await getAllUser();
            if (result && result.data) {
                setUsers(result.data);
            }
        }
        fetchUser();
    }, [])

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
                    <table id="datatablesSimple" className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>gender</th>
                                <th>date</th>
                                <th>phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.date}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">Không có dữ liệu</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Table;
