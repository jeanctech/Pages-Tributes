import Images from "../assets/img.svg";
import "../styles/app.css";

function App_Aside() {
  return (
    <>
      <div
        id="app-aside"
        className="m-0 p-1 bg-[#404049] text-[#c7bfbf] flex flex-col rounded-lg" >
        <div
          id="aside_container"
          className="m-2.5 p-2.5 mx-10 px-10 bg-[#464653] flex flex-col items-center justify-center rounded-lg " >
          <img
            src={Images}
            width={300}
            id="aside-img"
            className="m-1 p-0 flex flex-col border-4 border-[#777796] rounded-lg items-start justify-start " >
          </img>
          <h2
            id="aside_title"
            className="m-1 p-1 font-bold text-2xl flex flex-col justify-center items-center" >
            Tim Berners-Lee
          </h2>
        </div>
        <div
          id="aside_container"
          className="m-1 p-1 border-[#777796] flex flex-col items-start justify-start rounded-lg" >
          <br />
          <p className="m-1 p-1 flex flex-col items-start justify-start ">
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
            className="m-1 p-1 text-[#c7bfbf]  font-bold text-2xl flex flex-col items-start justify-start " >
            - Inicio
          </h3>
          <p className="m-1 p-1 text-[#c7bfbf]  flex flex-col items-start justify-start " >
            Comenzó en la escuela primaria Sheen Mont y luego pasó al Emanuel
            School, ambas en Londres, de 1969 a 1973. Estudió en Queens College,
            de la Universidad de Oxford, de 1973 a 1976, donde recibió un título
            de primera clase de Física. Conoció a su primera esposa en este
            tiempo. En 1978, trabajó en D.G. Nash Limited (también en Poole)
            donde escribió un sistema operativo.
          </p>
          <p className="m-1 p-1 text-[#c7bfbf]  flex flex-col items-start justify-start " >
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