import Logotipo from "../assets/logotipo.svg";
import "../styles/app.css";

function App_Footer() {
  return (
    <>
      <footer id="app_footer" className="m-0 p-0 bg-[#151515] text-[#fff] ">
        <img src={Logotipo} alt="Logotipo-Jc" width={50} className="m-0.3 p-0.3 rounded-lg"/>
        <br />
        <span>
          <strong>©2024</strong> -{" "}
          <small>
            <strong>JeanCarlos Jimenez</strong>
          </small>{" "}
          - <small>@jeanctech</small> -{" "}
          <strong>Todos los derechos reservados.</strong>
        </span>
      </footer>
    </>
  );
}

export default App_Footer;
