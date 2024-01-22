import Images from "../Assets/Img.svg";
import "../Styles/App_Aside.css";

function App_Aside() {
  return (
    <>
      <div id="app-aside">
        <div id="aside_container_title">
            <img src={Images} width={275} id="aside-img"></img>
            <h2 id="aside_title">Tim Berners-Lee</h2>
        </div>
        <div id="aside_container">
          <br />
          <p>
            Timothy Tim John Berners-Lee (Londres, Inglaterra; 8 de junio de
            1955) es un científico de la computación británico, conocido por ser
            el padre de la World Wide Web. Estableció la primera comunicación
            entre un cliente y un servidor usando el protocolo Http en diciembre
            de 1990. En octubre de 1994 fundó el Consorcio de la World Wide Web
            (W3C) con sede en el Mit, para supervisar y estandarizar el
            desarrollo de las tecnologías sobre las que se fundamenta la Web y
            que permiten el funcionamiento de Internet.
          </p>
          <br />
          <h3 id="aside_title">- Inicio</h3>
          <br />
          <p>
            Comenzó en la escuela primaria Sheen Mont y luego pasó al Emanuel
            School, ambas en Londres, de 1969 a 1973. Estudió en Queens College,
            de la Universidad de Oxford, de 1973 a 1976, donde recibió un título
            de primera clase de Física. Conoció a su primera esposa en este
            tiempo. En 1978, trabajó en D.G. Nash Limited (también en Poole)
            donde escribió un sistema operativo.
          </p>
          <br />
          <p>
            Berners-Lee usó esta NeXTcube en el Cern, y fue el primer servidor
            web del mundo. Berners-Lee trabajó en el Cern desde junio hasta
            diciembre de 1980. Durante ese tiempo, propuso un proyecto basado en
            el hipertexto para facilitar la forma de compartir y la puesta al
            día de la información entre investigadores. En este periodo también
            construyó un programa llamado Enrique que no llegó a ver la luz.
          </p>
        </div>
      </div>
    </>
  );
}

export default App_Aside;
