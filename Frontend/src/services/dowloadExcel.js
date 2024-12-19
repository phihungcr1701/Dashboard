import { axiosInstance } from "../utils";

const downloadExcel = async (type = "Danh sách người dùng", inputSearch = null, activeColumn = null, isSortAsc) => {
    try {
        const res = await axiosInstance.get('dowload/Excel', {
            params: {
                type: type,
                inputSearch: inputSearch,
                activeColumn: activeColumn,
                isSortAsc: isSortAsc
            },
            responseType: 'blob' //nhận phản hồi ở dạng nhị phân
        })
        const url = window.URL.createObjectURL(new Blob([res.data])); // Tạo URL 

        // Tạo liên kết ẩn để tải file
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'data.xlsx');
        document.body.appendChild(link);
        link.click();
    } catch (error) {
        throw error;
    }
}

export default downloadExcel;
