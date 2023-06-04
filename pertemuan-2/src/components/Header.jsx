/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "./Button";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    const login = () => {
        setIsLogin(true);
        console.log("login");
    }

    const logout = () => {
        setIsLogin(false);
        console.log("logout");
    }

    return (
        <header>
            <div>
                <h1>Isal-Man</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <Button title={isLogin ? "LOGOUT" : "LOGIN"} onClick={isLogin ? logout : login} />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
