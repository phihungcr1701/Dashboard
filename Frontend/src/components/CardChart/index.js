import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardChart({ content, icon, type }) {
    return (
        <div className="card mb-4">
            <div className="card-header">
                <FontAwesomeIcon icon={icon} className="me-1"></FontAwesomeIcon>
                {content}
            </div>
            <div className="card-body">
                <canvas id={`my${type}`} width="100%" height="40"></canvas>
            </div>
        </div>
    );
}
export default CardChart;