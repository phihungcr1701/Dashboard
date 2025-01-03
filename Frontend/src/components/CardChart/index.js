import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import { getNewUser, getUserAccept, getUserNoAction, getUserAge } from "./Event";
import { useState, useEffect } from "react";

function CardChart({ content, icon, type }) {
    const [chartData, setChartData] = useState(null);
    const [chartType, setChartType] = useState("newUser");

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

    useEffect(() => {
        const fetchData = async () => {
            let data = null;
            if (chartType === "newUser") {
                data = (await getNewUser()).data;
            }
            else if (chartType === "userAccept") {
                data = (await getUserAccept()).data;
            }
            else if (chartType === "userNoAction") {
                data = (await getUserNoAction()).data;
            }
            else {
                data = (await getUserAge()).data;
            }
            setChartData(data);
        };
        fetchData();
        renderChart();
    }, [chartType]);

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
                <label
                    className="small text-muted"
                >
                    Chọn thông tin muốn thống kê (12 tháng gần đây)
                    <select
                        className="form-select mt-2"
                        name="chart"
                        onChange={e => setChartType(e.target.value)}
                    >
                        <option value="newUser">Người dùng mới mỗi tháng</option>
                        <option value="userAccept">Lượt truy cập mỗi tháng</option>
                        <option value="userNoAction">Người dùng không hoạt động mỗi tháng</option>
                        <option value="userAge">Phân bố độ tuổi hoạt động</option>
                    </select>
                </label>
            </div>
        </div>
    );
}
export default CardChart;