import { Link } from "react-router-dom";
import CenterLayout from '../../components/Layouts/CenterLayout'

function Login() {
    const accountItems = {
        type: ["email", "password"],
        id: ["email", "password"],
        name: ["Email address", "Password"]
    }

    const informationItems = {
        type: [],
        id: [],
        name: []
    }

    return (
        <>
            <CenterLayout
                title={"LOG IN"}
                accountItems={accountItems}
                informationItems={informationItems}
            >
                <Link to="/register">Don't have an account yet?</Link>
            </CenterLayout>
        </>
    );
}

export default Login;