import { faChartArea, faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons';
import BreadCrumb from '../../components/BreadCrumb'
import CardChart from '../../components/CardChart';
function Chart() {
    return (
        <>
            <BreadCrumb
                namePage={"Biểu đồ"}
                isDisplayNone={false}
            />
            
            <div className="row">
                <div className="col-xl-7">
                    <CardChart
                        content={"Biểu đồ miền"}
                        icon={faChartArea}
                        type={"AreaChart"}
                    />
                    <CardChart
                        content={"Biểu đồ cột"}
                        icon={faChartBar}
                        type={"BarChart"}
                    />
                </div>
                <div className="col-xl-5">
                    <CardChart
                        content={"Biểu đồ tròn"}
                        icon={faChartPie}
                        type={"PieChart"}
                    />
                </div>
            </div>
        </>
    );
}
export default Chart;