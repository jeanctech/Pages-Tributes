import Favicon from "../Assets/Favicon.svg";
import '../Styles/App_Header.css';

function App_Header() {
  return (
    <>
      <div id="app-header">
        <div id="header-container">
          <h1 id="header-title">
            <a href="" id="header-a">Pages-Tributes</a>
          </h1>
          <img src={Favicon} alt="" width={40}></img>
        </div>
        <div id="header-nav">
          <ul id="nav-ul">
            <li id="nav-li">
              <a href="" id="nav-a">
                Inicio
              </a>
            </li>
            <li id="nav-li">
              <a href="" id="nav-a">
                Origen
              </a>
            </li>
            <li id="nav-li">
              <a href="" id="nav-a">
                Historia
              </a>
            </li>
            <li id="nav-li">
              <a href="" id="nav-a">
                Acerca
              </a>
            </li>
            <li id="nav-li">
              <a href="" id="nav-a">
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
