import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import PieChart from './PieChart';

function CardChart({ content, icon, type }) {
    const ChartType = () => {
        switch (type) {
            case 'AreaChart': 
                return <AreaChart />;
            case 'BarChart':
                return <BarChart />
            case 'PieChart':
                return <PieChart />
            default:
                throw new Error("Không có loại biểu đồ");
        }
    }

    return (
        <div className="card mb-4">
            <div className="card-header">
                <FontAwesomeIcon icon={icon} className="me-1"></FontAwesomeIcon>
                {content}
            </div>
            <div className="card-body">
                {ChartType()}
            </div>
            <div className="card-footer">
                <label className="small text-muted">Chọn thông tin muốn thống kê </label>
                <select class="form-select mt-2">
                    <option value="select1">select1</option>
                    <option value="select2">select2</option>
                    <option value="select3">select3</option>
                    <option value="select4">select4</option>
                </select>
            </div>
        </div>
    );
}
export default CardChart;