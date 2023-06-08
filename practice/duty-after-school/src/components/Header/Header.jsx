import Button from "../Button/Button";

// Header CSS
import './Header.css'

const Header = () => {
    return (
        <header>
            <div>
                <h1 className="logo">DUTY AFTER SCHOOL</h1>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Cast</li>
                    <li>About</li>
                    <li>
                        <Button title="LOG IN" />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header
