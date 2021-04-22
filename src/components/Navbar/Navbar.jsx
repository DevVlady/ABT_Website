import './Navbar.scss';
import { Link as LinkS } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="nav">
            <h1>ABT</h1>
            <div className="nav-links">
                <LinkS>Home</LinkS>
                <LinkS>About</LinkS>
                <LinkS>Services</LinkS>
                <LinkS>Contact</LinkS>
            </div>
        </div>
    );
}

export default Navbar;