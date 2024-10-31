import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function ButtonNav({ path, icon, content }) {
    return (
        <Link className="nav-link" to={`/${path}`}>
            <div className="sb-nav-link-icon">
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </div>
            {content}
        </Link>
    );
}
export default ButtonNav;