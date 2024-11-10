import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import { getNewUser, getUserAccept, getUserNoAction, getUserAge } from "./Event";
import { useState, useEffect } from "react";

function CardChart({ content, icon, type }) {
    const [chartData, setChartData] = useState(null);

    const fetchData = async (e = null) => {
        let data = null;
        if (e == null || e.target.value === "newUser") {
            data = (await getNewUser()).data;
        }
        else if (e.target.value === "userAccept"){
            data = (await getUserAccept()).data;
        }
        else if ( e.target.value === "userNoAction") {
            data = (await getUserNoAction()).data;
        }
        else {
            data = (await getUserAge()).data;
        }
        setChartData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderChart = () => {
        switch (type) {
            case 'AreaChart':
                return <AreaChart data={chartData} />;
            case 'BarChart':
                return <BarChart data={chartData} />;
            case 'PieChart':
                return <PieChart data={chartData} />;
            default:
                throw new Error("Không có loại biểu đồ");
        }
    };

    const handleSelectChange = async (e) => {
        await fetchData(e); 
        renderChart();
    };

    return (
        <div className="card mb-4">
            <div className="card-header">
                <FontAwesomeIcon icon={icon} className="me-1"></FontAwesomeIcon>
                {content}
            </div>
            <div className="card-body">
                {chartData ? renderChart() : <div className="spinner-border text-primary"></div>}
            </div>
            <div className="card-footer">
                <label className="small text-muted">Chọn thông tin muốn thống kê (12 tháng gần đây)</label>
                <select className="form-select mt-2" onChange={e => handleSelectChange(e)}>
                    <option value="newUser">Lượt đăng kí tài khoản</option>
                    <option value="userAccept">Lượt truy cập lần cuối mỗi tháng</option>
                    <option value="userNoAction">Số người không hoạt động mỗi tháng</option>
                    <option value="userAge">Phân bố độ tuổi hoạt động</option>
                </select>
            </div>
        </div>
    );
}
export default CardChart;