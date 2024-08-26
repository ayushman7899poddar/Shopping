import "./Footer.scss";
import logo from "../../../assets/elogo4.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
    
      <div className="footer">
        <div className="footer-left">
          <a href="/">
            <img src={logo} alt="" />
          </a>
          <p>We Provide Best Deals & Products</p>
        </div>

        <div className="footer-center">
          <h2>Important Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/policy">Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-right">
        <h2>Important Links</h2>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
           
            <li>
            <Link to="https://myaccount.google.com/">Email</Link>
            </li>
            <li>
              <Link to="https://github.com/ayushman7899poddar">Github</Link>
            </li>
            <li>
              <Link to="https://in.linkedin.com/">Linkedin</Link>
            </li>
          </ul>
         
        </div>
      </div>
      <div className="copyright">
        <p> &copy; Copyright Protected 2024, Made By Ayushman Poddar</p>
      </div>
    </div>
  );
};

export default Footer;
