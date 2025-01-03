import { useState } from "react";
import Modal from "..";
import ModalError from "../ModalError";
import ModalSuccess from "../ModalSuccess";

function ModalEditUser({ onSubmitClick, onCloseClick, name, valueGender, date, phone, address }) {

    const [nameInput, setNameInput] = useState(name);
    const [genderInput, setGender] = useState(valueGender);
    const [dateInput, setDate] = useState(date);
    const [phoneInput, setPhone] = useState(phone);
    const [addressInput, setAddress] = useState(address);
    const [showModalError, setShowModalError] = useState(false);
    const [showModalSuccess, setShowModalSuccess] = useState(false);

    const handleSubmit = async () => {
        const infor = { nameInput, genderInput, dateInput, phoneInput, addressInput };
        try {
            const res = await onSubmitClick(infor);
            console.log(res);
            setShowModalSuccess(true);
            // onCloseClick();
        } catch (error) {
            console.log(error);
            setShowModalError(true);
        }
    }

    return (
        <Modal
            title={"Cập nhật thông tin"}
            footerContent={
                <>
                    <button type="button" className="btn btn-danger" onClick={onCloseClick}>
                        Đóng
                    </button>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Xác nhận
                    </button>
                </>
            }
        >
            <div>
                <label htmlfor="name" className="form-label">Họ và tên</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Họ và tên"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                />
            </div>

            <div>
                <label for="gender" className="form-label">Giới tính</label>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        id="male"
                        value="Nam"
                        checked={genderInput === "Nam"}
                        onChange={e => setGender(e.target.value)}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="male"
                    >
                        Nam
                    </label>
                </div>
                <div className="form-check">
                    <input
                        type="radio"
                        className="form-check-input"
                        id="female"
                        value="Nữ"
                        name="gender"
                        checked={genderInput === "Nữ"}
                        onChange={e => setGender(e.target.value)}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="female"
                    >
                        Nữ
                    </label>
                </div>
            </div>
            <div>
                <label for="date" className="form-label">Ngày sinh</label>
                <input
                    type="date"
                    className="form-control"
                    id="date"
                    placeholder="Ngày sinh"
                    value={dateInput}
                    onChange={e => setDate(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="phone" className="form-label">Số điện thoại</label>
                <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="Số điện thoại"
                    value={phoneInput}
                    onChange={e => setPhone(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="address" className="form-label">Địa chỉ</label>
                <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Địa chỉ"
                    value={addressInput}
                    onChange={e => setAddress(e.target.value)}
                />
            </div>
            {showModalError && (
                <ModalError onCloseClick={() => setShowModalError(false)}>
                    {"//"}
                </ModalError>
            )}
            {showModalSuccess && (
                <ModalSuccess
                    onCloseClick={() => {
                        setShowModalSuccess(false)
                        onCloseClick()
                    }}
                />
            )}
        </Modal>
    );
}
export default ModalEditUser;