import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <header className="header">
            <div className="logocontainer">
                <img 
                    className="logo" 
                    src={LOGO_URL} 
                    alt="Logo" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </header>
    );
};

export default Header