import { useState } from "react";
import Modal from "..";
import ModalSuccess from "../ModalSuccess";

function ModalExport({ onSubmitClick, onCloseClick }) {

    const [valueSelect, setValueSelect] = useState("filter");
    const [showModalSuccess, setShowModalSuccess] = useState(false);

    const handleSubmitClick = async () => {
        try {
            await onSubmitClick(valueSelect);
            setShowModalSuccess(true);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Modal
                title={"Xuất thông tin"}
                footerContent={
                    <>
                        <button type="button" className="btn btn-danger" onClick={onCloseClick}>
                            Đóng
                        </button>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>
                            Xác nhận
                        </button>
                    </>
                }
            >
                <label className="label">Lựa chọn:</label>
                <select
                    defaultValue={"filter"}
                    className="form-select p-2"
                    onChange={(e) => setValueSelect(e.target.value)}
                >
                    <option value={"filter"}>Xuất các bản ghi đã lọc</option>
                    <option value={"all"}>Xuất tất cả bản ghi</option>
                </select>
            </Modal>
            {showModalSuccess && (
                <ModalSuccess
                    onCloseClick={() => {
                        setShowModalSuccess(false)
                        onCloseClick();
                    }}
                />
            )}
        </>
    );
}
export default ModalExport;