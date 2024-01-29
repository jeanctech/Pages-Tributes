import Logotipo from "../Assets/Logotipo.svg";
import '../Styles/App.css';

function App_Footer() {
  return (
    <>
      <footer id="footer" className="m-0 p-1 bg-black text-slate-300 flex flex-col justify-center items-center ">
        <img src={Logotipo} alt="Logotipo-Jc" width={50} />
        <br />
        <span>
          <strong>©2024</strong> - <small>
            <strong>JeanCarlos Jimenez</strong>
            </small>{" "} - <small>@jeanctech</small> - <strong>Todos los derechos reservados.</strong>
        </span>
      </footer>
    </>
  );
}

export default App_Footer;
