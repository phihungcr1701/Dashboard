import { useState } from "react";
import Modal from "..";

function ModalExport({ onSubmitClick, onCloseClick }) {

    const [valueSelect, setValueSelect] = useState("All");

    const handleSelectChange = (value) => {
        console.log(value);
        setValueSelect(value);
    }
    return (
        <Modal
            title={"Xuất User"}
            onCloseClick={onCloseClick}
            onSubmitClick={onSubmitClick}
        >
            <label className="label">Chọn quyền:</label>
            <select
                defaultValue={"All"}
                className="form-select p-2"
                onChange={(e) => handleSelectChange(e.target.value)}
            >
                <option value={"Admin"}>Admin</option>
                <option value={"User"}>User</option>
                <option value={"All"}>All</option>
            </select>
        </Modal>
    );
}
export default ModalExport;