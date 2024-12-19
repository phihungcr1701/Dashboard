import { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ModalPassword from "../../components/Modal/ModalPassword";
import ModalEditUser from "../../components/Modal/ModalEditUser";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { editAccount } from "../../services/authService";
import { editUser, getUserInfors } from "../../services/userService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge, faEnvelope, faUser, faVenusMars, faCalendarAlt, faPhone, faMapMarkerAlt, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Seeting() {
    const userID = useSelector((state) => state.auth.login?.currentUser?.data.id);
    const { id } = useParams();

    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalPassword, setShowModalPassword] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        const fetchInformation = async () => {
            const res = await getUserInfors(id);
            if (res && res.data) {
                setData(res.data);
            }
        };
        fetchInformation();
    }, [showModalEdit, id]);

    const handleEditClick = () => setShowModalEdit((prev) => !prev);
    const handlePasswordClick = () => setShowModalPassword((prev) => !prev);

    const handleEditSubmit = async (infor) => {
        const infors = { id, ...infor };
        try {
            const res = await editUser(infors);
            return res.mess;
        } catch (error) {
            throw error;
        }
    };

    const formatDate = (value) => {
        const date = new Date(value);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = String(date.getFullYear());
        const formattedDate = date.toLocaleDateString("vi-VN");
        const formattedDateInForm = `${year}-${month}-${day}`;
        return { formattedDate, formattedDateInForm };
    };

    const handlePasswordSubmit = async (data) => {
        try {
            const res = await editAccount(data);
            return res.mess;
        } catch (error) {
            throw error;
        }
    };

    return (
        <>
            <BreadCrumb namePage={"Cá nhân"} />
            <div className="card shadow p-3 bg-light-subtle">
                <div className="card-title text-secondary-emphasis fs-5 fw-bold">Thông tin cá nhân</div>
                <div className="card-body">
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div className="info-row">
                                <FontAwesomeIcon icon={faIdBadge} className="info-icon" />
                                <span className="info-label">Account ID:</span>
                                <label className="label">{data?.accountId}</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-row">
                                <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
                                <span className="info-label">Email:</span>
                                <label className="label">{data?.Account.email}</label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div className="info-row">
                                <FontAwesomeIcon icon={faUser} className="info-icon" />
                                <span className="info-label">Name:</span>
                                <label className="label">{data?.name}</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-row">
                                <FontAwesomeIcon icon={faVenusMars} className="info-icon" />
                                <span className="info-label">Giới tính:</span>
                                <label className="label">{data?.gender === "0" ? "Nam" : "Nữ"}</label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div className="info-row">
                                <FontAwesomeIcon icon={faCalendarAlt} className="info-icon" />
                                <span className="info-label">Ngày sinh:</span>
                                <label className="label">{formatDate(data?.date).formattedDate}</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-row">
                                <FontAwesomeIcon icon={faPhone} className="info-icon" />
                                <span className="info-label">Số điện thoại:</span>
                                <label className="label">{data?.phone}</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="info-row">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                                <span className="info-label">Địa chỉ:</span>
                                <label className="label">{data?.address}</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-row">
                                <FontAwesomeIcon icon={faCalendarCheck} className="info-icon" />
                                <span className="info-label">Ngày tham gia:</span>
                                <label className="label">{formatDate(data?.date).formattedDate}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end gap-3 m-4">
                <button className="btn btn-warning" onClick={handleEditClick}>
                    Thay đổi thông tin
                </button>
                {userID === parseInt(id) && (
                    <button className="btn btn-danger" onClick={handlePasswordClick}>
                        Thay đổi mật khẩu
                    </button>
                )}
            </div>

            {showModalEdit && (
                <ModalEditUser
                    onCloseClick={handleEditClick}
                    name={data?.name}
                    valueGender={data?.gender === "0" ? "Nam" : "Nữ"}
                    date={formatDate(data?.date).formattedDateInForm}
                    phone={data?.phone}
                    address={data?.address}
                    onSubmitClick={handleEditSubmit}
                />
            )}
            {showModalPassword && (
                <ModalPassword
                    onCloseClick={handlePasswordClick}
                    onSubmitClick={handlePasswordSubmit}
                />
            )}
        </>
    );
}

export default Seeting;
