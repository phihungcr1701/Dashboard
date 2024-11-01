import { Link } from "react-router-dom";

function BreadCrumb({ namePage, isDisplayNone = false }) {
    return (
        <>
            <h1 className="mt-4">{namePage}</h1>
            <ol className="breadcrumb mb-4">
                <li className={`breadcrumb-item ${isDisplayNone ? "d-none" : "d-inline"}`}>
                    <Link to="/">Trang chủ</Link>
                </li>
                <li className="breadcrumb-item active">{namePage}</li>
            </ol>
        </>
    );
}
export default BreadCrumb;