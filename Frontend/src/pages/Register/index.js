import { Link } from "react-router-dom";
import CenterLayout from '../../components/Layouts/CenterLayout'

function Register() {
    const accountItems = {
        type: ["email", "password", "password"],
        id: ["email", "password", "passwordConfirm"],
        name: ["Email address", "Password", "Confirm password"]
    }

    const informationItems = {
        type: ["text", "text"],
        id: ["firstName", "lastName"],
        name: ["First name", "Last name"]
    }

    return (
        <>
            <CenterLayout
                title={"SIGN UP"}
                accountItems={accountItems}
                informationItems={informationItems}
            >
                <Link to="/login">Return login!</Link>
            </CenterLayout>
        </>
    );
}

export default Register;