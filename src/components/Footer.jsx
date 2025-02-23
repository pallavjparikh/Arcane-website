import React from 'react';

// CSS
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='Block'>
            <footer>
                <div className="footerFlex">
                    <div>
                        <a href="#" style={{ display: "flex", width: "fit-content" }}>
                            <img src="/logo.svg" alt="logo" style={{ width: 92 }} />
                        </a>
                        <span>Build custom AI solutions and protect your network from threats – no coding required. Arcane AI puts the power of data intelligence and AI-driven security in your hands.</span>
                    </div>
                    <div className='footerLinks'>
                        <ul>
                            <li>Product</li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#solutions">Solutions</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="https://www.gitbook.com/" target='_blank'>Docs</a></li>
                        </ul>
                        <ul>
                            <li>Socials</li>
                            <li><a href="https://www.linkedin.com/company/thearcaneai">LinkedIn</a></li>
                            <li><a href="#">X</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footerFlexTwo">
                    <p className='copyright'>© 2025 <span>Arcane AI</span>. All Rights Reserved.</p>
                    <div>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer