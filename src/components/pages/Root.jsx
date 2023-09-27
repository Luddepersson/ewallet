import { Outlet } from "react-router-dom";
import { Header } from "../Header";

const Root = () => {
    return(
        <div className="site-wrapper">
            <Header />
            <main className="main">
                <Outlet />
            </main>
        </div>
    )
}

export default Root;