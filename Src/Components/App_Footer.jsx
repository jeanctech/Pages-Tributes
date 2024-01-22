import Logo from "../Assets/Logotipo-Jc.svg";
import '../Styles/App_Footer.css';

function App_Footer() {
  return (
    <>
      <footer id="footer">
        <img src={Logo} alt="Logotipo-Jc" width={50} />
        <br />
        <span>
          <strong>©2023</strong> - <small>
            <strong>JeanCarlos Jimenez</strong>
            </small>{" "} - <small>@jeanctech</small> - <strong>Todos los derechos reservados.</strong>
        </span>
      </footer>
    </>
  );
}

export default App_Footer;
