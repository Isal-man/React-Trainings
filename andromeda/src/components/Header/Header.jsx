import TombolLogin from "../Button/Button";

const Header = () => {
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
            <div>
                <TombolLogin name="LOGIN" />
            </div>
        </header>
    );
};

export default Header;
