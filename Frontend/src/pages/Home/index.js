import { faUsers, faUserPlus, faExclamationTriangle, faChartLine, faChartArea, faChartBar, faTable }
    from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/Card";
import CardChart from "../../components/CardChart";
import Table from "../Table";
import BreadCrumb from "../../components/BreadCrumb";

function Home() {
    return (
        <>
            <BreadCrumb
                namePage={"Trang chủ"}
                isDisplayNone={true}
            />

            <div className="row">
                <Card
                    background={"primary"}
                    icon={faUsers}
                    content={"Tổng số người dùng"}
                >
                    <span className="h5">30</span>
                </Card>

                <Card
                    background={"warning"}
                    icon={faUserPlus}
                    content={"Người dùng mới trong tháng"}
                >
                    <span className="h5">30</span>
                </Card>

                <Card
                    background={"danger"}
                    icon={faExclamationTriangle}
                    content={"Người dùng không hoạt động"}
                >
                    <span className="h5">30</span>
                </Card>

                <Card
                    background={"success"}
                    icon={faChartLine}
                    content={"Lượt truy cập trong tháng"}
                >
                    <span className="h5">30</span>
                </Card>
            </div>

            <div className="row">
                <div className="col-xl-6">
                    <CardChart
                        content={"Biểu đồ miền"}
                        icon={faChartArea}
                        type={"AreaChart"}
                    />
                </div>
                <div className="col-xl-6">
                    <CardChart
                        content={"Biểu đồ cột"}
                        icon={faChartBar}
                        type={"BarChart"}
                    />
                </div>
            </div>
            <Table icon={faTable} showBreadCrumb={false}>
                {/* {children} */}
            </Table>
        </>
    );
}
export default Home;