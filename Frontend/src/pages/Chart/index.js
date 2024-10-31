import { faChartArea, faChartBar } from '@fortawesome/free-solid-svg-icons';
import BreadCrumb from '../../components/BreadCrumb'
import CardChart from '../../components/CardChart';
function Chart() {
    return (
        <>
            <BreadCrumb
                namePage={"Biểu đồ"}
                isDisplayNone={false}
            />
            <CardChart
                content={"Biểu đồ miền"}
                icon={faChartArea}
                type={"AreaChart"}
            />
            <div className="row">

                <div className="col-xl-6">
                    <CardChart
                        content={"Biểu đồ cột"}
                        icon={faChartBar}
                        type={"BarChart"}
                    />
                </div>
                <div className="col-xl-6">
                    <CardChart
                        content={"Biểu đồ cột"}
                        icon={faChartArea}
                        type={"BarChart"}
                    />
                </div>
            </div>
        </>
    );
}
export default Chart;