import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Card({ background, icon, content, count }) {

    return (
        <div className="col-xl-3 col-md-6">
            <div className={`card bg-${background} text-white mb-4`}>
                <div className="card-body d-flex align-items-start gap-3">
                    <div className="box d-flex flex-column align-items-center gap-1">
                        <FontAwesomeIcon icon={icon} className="fa-2x"></FontAwesomeIcon>
                        <span className="h5">{count}</span>
                    </div>
                    {content}
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <Link className="small text-white stretched-link" to={"/table"}>Xem chi tiết</Link >
                    <div className="small text-white">
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;