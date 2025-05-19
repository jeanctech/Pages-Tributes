import Images from "../assets/img.svg";
import "../styles/app.css";

function App_Aside() {
  return (
    <>
      <div
        id="app_aside"
        className="m-1 p-1 bg-[#1f1e1e] text-[#e0dcdc] rounded-lg rounded-bg-[#4E4E4B] flex flex-col justify-center items-center">
        <div
          id="div_container"
          className="m-0.5 p-0.5 rounded-lg bg-[#252424]">
          <img
            src={Images}
            width={355}
            id="aside_img">
          </img>
          <h2
            id="aside_title"
            className="m-1 p-1 text-[#c9bb3d] text-2xl font-bold flex flex-col justify-center items-center"
          >
            Tim Berners-Lee
          </h2>
        </div>
        <div
          id="aside_container"
          className="m-1.5 p-1.5 flex flex-col justify-start items-start"
        >
          <br />
          <p className="m-1 p-1 text-pretty">
            Timothy Tim John Berners-Lee (Londres, Inglaterra; 8 de junio de
            1955) es un científico de la computación británico, conocido por ser
            el padre de la World Wide Web. Estableció la primera comunicación
            entre un cliente y un servidor usando el protocolo Http en diciembre
            de 1990. En octubre de 1994 fundó el Consorcio de la World Wide Web
            (W3C) con sede en el Mit, para supervisar y estandarizar el
            desarrollo de las tecnologías sobre las que se fundamenta la Web y
            que permiten el funcionamiento de Internet.
          </p>
          <h3
            id="aside_title"
            className="m-1 p-1 text-[#c9bb3d] text-2xl font-bold"
          >
            - Inicio
          </h3>
          <p className="m-1 p-1 text-pretty">
            Comenzó en la escuela primaria Sheen Mont y luego pasó al Emanuel
            School, ambas en Londres, de 1969 a 1973. Estudió en Queens College,
            de la Universidad de Oxford, de 1973 a 1976, donde recibió un título
            de primera clase de Física. Conoció a su primera esposa en este
            tiempo. En 1978, trabajó en D.G. Nash Limited (también en Poole)
            donde escribió un sistema operativo.
          </p>
          <p className="m-1 p-1 text-pretty">
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
