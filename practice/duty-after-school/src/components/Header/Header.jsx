import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

// Header CSS
import './Header.css'

const Header = () => {
    
    const navigate = useNavigate();

    return (
        <header>
            <div>
                <h1 className="logo">DUTY AFTER SCHOOL</h1>
            </div>
            <div>
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/cast')}>Cast</li>
                    <li onClick={() => navigate('/about')}>About</li>
                    <li>
                        <Button title="LOG IN" />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header
