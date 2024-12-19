import { useState } from "react";
import Modal from "..";

function ModalExport({ onSubmitClick, onCloseClick }) {

    const [valueSelect, setValueSelect] = useState("filter");
    const [showModalSuccess, setShowModalSuccess] = useState(false);

    const handleSubmitClick = async () => {
        try {
            await onSubmitClick(valueSelect);
            setShowModalSuccess(true);
            onCloseClick();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Modal
                title={"Xuất thông tin"}
                onCloseClick={onCloseClick}
                onSubmitClick={handleSubmitClick}
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
            {/* {showModalSuccess && (

        )} */}
        </>
    );
}
export default ModalExport;