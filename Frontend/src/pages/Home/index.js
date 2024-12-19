import { faUsers, faUserPlus, faExclamationTriangle, faChartLine, faChartArea, faChartBar, faTable }
    from "@fortawesome/free-solid-svg-icons";
import Card from "../../components/Card";
import CardChart from "../../components/CardChart";
import Table from "../Table";
import BreadCrumb from "../../components/BreadCrumb";
import { useEffect, useState } from "react";
import { getCount } from "../../services/userService";

function Home() {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchCount = async () => {
            const res = await getCount();
            if (res && res.data) {
                setData(res.data);
            }
        };
        fetchCount();
    }, [])
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
                    count={data?.totalUsers}
                />

                <Card
                    background={"warning"}
                    icon={faUserPlus}
                    content={"Người dùng mới trong tháng"}
                    count={data?.newUsersMonth}
                />

                <Card
                    background={"danger"}
                    icon={faExclamationTriangle}
                    content={"Người dùng không hoạt động"}
                    count={30}
                />

                <Card
                    background={"success"}
                    icon={faChartLine}
                    content={"Lượt truy cập trong tháng"}
                    count={data?.monthlyVisits}
                />
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
            <Table
                icon={faTable}
                showBreadCrumb={false}
            // title={"Danh sách người dùng"}
            />
        </>
    );
}
export default Home;