import '../styles/Navbar.css'
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <div className="navbar-left">
                        <img src="minimal_body_logo.png" alt="Company Logo" className="logo" />
                    </div>

                    {/* Desktop nav */}
                    <div className="navbar-center desktop-menu">
                        <ul>
                            <li><a href="#homepage">דף הבית</a></li>
                            <li><a href="#about">מי אני?</a></li>
                            <li><a href="#projects">העבודות שלי</a></li>
                            <li className="contact-button"><a href="#contact">צרו קשר</a></li>
                        </ul>
                    </div>

                    {/* Mobile menu button */}
                    <div className="hamburger-menu" onClick={toggleSidebar}>
                        ☰
                    </div>
                </div>
            </nav>

            {/* Sidebar menu */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#homepage">דף הבית</a></li>
                    <li><a href="#about" onClick={toggleSidebar}>מי אני?</a></li>
                    <li><a href="#projects" onClick={toggleSidebar}>העבודות שלי</a></li>
                    <li><a href="#contact" onClick={toggleSidebar}>צרו קשר</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
