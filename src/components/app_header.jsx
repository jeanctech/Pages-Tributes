import Favicon from "../assets/favicon.svg";
import "../styles/app.css";

function App_Header() {
  return (
    <>
      <div
        id="app-header"
        className="m-0 p-1 bg-[#333] text-[#c7bfbf] flex justify-between items-center" >
        <div
          id="header-container"
          className="m-1 p-1 flex flex-row justify-center items-center" >
          <h1 id="header-title" className="m-1 p-1 font-bold text-2xl" >
            <a href="" id="header-a">
              Pages-Tributes
            </a>
          </h1>
          <img src={Favicon} alt="Favicon" width={40}></img>
        </div>
        <div
          id="header-nav"
          className="m-1 p-1 flex flex-row justify-center items-center" >
          <ul
            id="nav-ul"
            className="m-1 p-1 flex flex-row justify-center items-center" >
            <li
              id="nav-li"
              className="m-1 p-1 flex flex-row justify-center items-center" >
              <a
                href=""
                id="nav-a"
                className="m-1 p-1 hover:bg-slate-500 hover:text-slate-200 hover:rounded-lg flex flex-row justify-center items-center" >
                Inicio
              </a>
            </li>
            <li
              id="nav-li"
              className="m-1 p-1 flex flex-row justify-center items-center " >
              <a
                href=""
                id="nav-a"
                className="m-1 p-1 hover:bg-slate-500 hover:text-slate-200 hover:rounded-lg flex flex-row justify-center items-center " >
                Origen
              </a>
            </li>
            <li
              id="nav-li"
              className="m-1 p-1 flex flex-row justify-center items-center" >
              <a
                href=""
                id="nav-a"
                className="m-1 p-1 hover:bg-slate-500 hover:text-slate-200 hover:rounded-lg flex flex-row justify-center items-center " >
                Historia
              </a>
            </li>
            <li
              id="nav-li"
              className="m-1 p-1 flex flex-row justify-center items-center" >
              <a
                href=""
                id="nav-a"
                className="m-1 p-1 hover:bg-slate-500 hover:text-slate-200 hover:rounded-lg flex flex-row justify-center items-center " >
                Acerca
              </a>
            </li>
            <li
              id="nav-li"
              className="m-1 p-1 flex flex-row justify-center items-center" >
              <a
                href=""
                id="nav-a"
                className="m-1 p-1 hover:bg-slate-500 hover:text-slate-200 hover:rounded-lg flex flex-row justify-center items-center" >
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
