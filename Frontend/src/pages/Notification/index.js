import BreadCrumb from "../../components/BreadCrumb";
import Toast from "../../components/Toast";

function Notification() {
    return (
        <>
            <BreadCrumb
                namePage={"Thông báo"}
            />
            <Toast
                time={"11 phút trước"}
                content={"abvdfasdweqtds dfasdf"}
            />
        </>
    );
}
export default Notification;