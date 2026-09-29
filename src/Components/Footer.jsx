import facebook from "../img/frame (1).png";
import twitter from "../img/frame (2).png";
import youtube from "../img/frame (3).png";
import instagram from "../img/frame (4).png";
import logo from "../img/logo-white.svg";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_main">
          <div className="container">
            <div className="footer_item">
              <div className="footer_logo">
                <img src={logo} alt="" />
              </div>
              <div className="footer_social">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="container footer_bottom-title">
            <p>SIMPLE <span>®</span> 2021</p>
          </div>
        </div>
      </footer>
    </>
  );
}
