const XLSX = require('xlsx');
const informationServices = require('../services/informationService')

const formatDate = (value) => {
    const date = new Date(value);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    const formattedDate = date.toLocaleDateString("vi-VN")
    const formattedDateInForm = `${year}-${month}-${day}`;
    return { formattedDate, formattedDateInForm };
}

let getInformation = async (req, res) => {
    const { type, inputSearch, activeColumn, isSortAsc } = req.query;
    try {
        let result = await informationServices.getInformation(type, inputSearch, activeColumn, isSortAsc);
        res.status(200).json({
            mess: "Danh sách Informations",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            err: error
        });
    }
}

let getUserInformation = async (req, res) => {
    const { id } = req.query;
    try {
        let result = await informationServices.getUserInformation(id);
        res.status(200).json({
            mess: "Thông tin User",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            err: error
        });
    }
}

let editInformation = async (req, res) => {
    try {
        let result = await informationServices.editInformation(req.body);
        res.status(200).json({
            mess: "Đã cập nhập thành công",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            mess: "Cập nhật thất bại",
            err: error
        });
    }
}
let dowloadExcel = async (req, res) => {
    const { type, inputSearch, activeColumn, isSortAsc } = req.query;
    try {
        let result = await informationServices.getInformation(type, inputSearch, activeColumn, isSortAsc);
        const ws_data = result.map(item => ({
            ID: item.id,
            Name: item.name,
            Email: item.Account.email,
            Role: item.Account.role,
            Phone: item.phone,
            Address: item.address,
            DateOfBirth: formatDate(item.date).formattedDate,
            Gender: item.gender === 1 ? 'Male' : 'Female',
            CreatedAt: formatDate(item.createdAt).formattedDate
        }));
        // Tạo worksheet từ dữ liệu
        const ws = XLSX.utils.json_to_sheet(ws_data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Users Data');

        const fileName = 'data.xlsx';

        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`); // cấu hình header để gửi file
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); //chuẩn exel

        // Tạo và gửi file Excel (ở dạng nhị phân)
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
        res.send(excelBuffer);
    } catch (error) {
        res.status(500).json({
            mess: "Thất bại"
        })
    }
}

module.exports = {
    getInformation,
    editInformation,
    getUserInformation,
    dowloadExcel
}