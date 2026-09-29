import logo from "../img/frame 85.svg";
import log_in from "../img/log_in.png";
import search from "../img/Search.png";
export default function Header() {
  return (
    <>
      <header className="header_cont container">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <li>Продукция</li>
          <li>Материалы</li>
          <li>О нас</li>
          <li>Контакты</li>
          <div className="nav_images">
            <img src={search} alt="search" />
            <img src={log_in} alt="search" />
          </div>
        </nav>
      </header>
    </>
  );
}
