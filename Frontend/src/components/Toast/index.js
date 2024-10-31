function Toast({ time, content }) {
    return (
        <div className="toast">
            <div className="toast-header">
                <strong class="mr-auto">Thông báo hệ thống</strong>
                <small class="text-muted">{time}</small>
            </div>
            <div className="toast-body">
                {content}
            </div>
        </div>
    );
}
export default Toast;