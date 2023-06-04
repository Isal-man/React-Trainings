import TombolLogin from "../Button/Button";
import "./Header.css";

const Header = () => {
    const isLoggedIn = true;

    const handleClick = () => {
        alert("Boo")
    }

    return (
        <header>
            <div>
                <h1>Andromeda</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            {isLoggedIn ? (
                <>
                <h1>Faisal</h1>
                <TombolLogin name="LOG OUT" onClick={handleClick}/>
                </>
            ) : (
                <TombolLogin name="LOGIN" />
            )}
        </header>
    );
};

export default Header;
