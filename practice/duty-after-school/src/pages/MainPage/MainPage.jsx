import { Outlet } from "react-router-dom";
import { Header } from "../../components";

import "./MainPage.css";

const MainPage = () => {
    return (
        <div className="mainpage-wrapper">
            <div className="header-wrapper">
                <Header />
            </div>
            <div className="content-wrapper">
                <Outlet />
            </div>
        </div>
    );
};

export default MainPage;
