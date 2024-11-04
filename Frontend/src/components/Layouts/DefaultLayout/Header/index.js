import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [isSidebarToggled, setIsSidebarToggled] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setIsSidebarToggled(prevState => !prevState);
        localStorage.setItem('sb|sidebar-toggle', !isSidebarToggled);
    };

    useEffect(() => {
        const sidebarToggleState = localStorage.getItem('sb|sidebar-toggle');
        if (sidebarToggleState === 'true') {
            setIsSidebarToggled(true);
        }
    }, []);

    useEffect(() => {
        if (isSidebarToggled) {
            document.body.classList.add('sb-sidenav-toggled');
        } else {
            document.body.classList.remove('sb-sidenav-toggled');
        }
    }, [isSidebarToggled]);
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand ps-3" to="/">WebClient Admin</Link>
            <button
                className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
                onClick={handleClick}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." />
                    <button className="btn btn-primary" type="button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </form>

            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <FontAwesomeIcon icon={faUser} className="fa-fw" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li>
                            <Link className="dropdown-item" to="/setting">Cài đặt tài khoản</Link>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/login">Đăng xuất</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
export default Header;