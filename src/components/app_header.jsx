import Favicon from "../assets/favicon.svg";
import "../styles/app.css";

function App_Header() {
  return (
    <>
      <div
        id="app_header"
        className="m-0 p-1 bg-[#1f1e1e] text-[#e0dcdc]  flex flex-row justify-between items-center">
        <div
          id="header_container"
          className="m-1 p-1 flex flex-row justify-center items-center">
          <h1 id="header_title" className="m-1 p-1 text-3xl font-bold">
            <a
              href=""
              id="header_a">
              Pages-Tributes
            </a>
          </h1>
          <img src={Favicon} alt="Favicon" width={42} className="m-0 p-0"></img>
        </div>
        <div
          id="header_nav"
          className="m-1 p-1 flex flex-row justify-between items-center">
          <ul id="nav_ul" className="m-1 p-1 flex flex-row text-[17px]">
            <li id="nav_li" className="m-1 p-1">
              <a href="" id="nav_a" className="m-1 p-1 font-semibold">
                Inicio
              </a>
            </li>
            <li id="nav_li" className="m-1 p-1">
              <a href="" id="nav_a" className="m-1 p-1 font-semibold">
                Origen
              </a>
            </li>
            <li id="nav_li" className="m-1 p-1">
              <a href="" id="nav_a" className="m-1 p-1 font-semibold">
                Historia
              </a>
            </li>
            <li id="nav_li" className="m-1 p-1">
              <a href="" id="nav_a" className="m-1 p-1 font-semibold">
                Acerca
              </a>
            </li>
            <li id="nav_li" className="m-1 p-1">
              <a href="" id="nav_a" className="m-1 p-1 font-semibold">
                Conoce
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App_Header;