import '../Styles/App.css';

function App_Row() {
  return (
    <>
      <div id="app_row" className="m-0 p-1 bg-slate-300 text-slate-800 flex flex-col ">
        <div id="row_container" className="m-2 p-2 bg-slate-400 flex flex-col items-start justify-start rounded-lg">
          <p id="row_title" className="m-1 p-1 font-bold text-2xl flex flex-col items-start justify-start ">
            - Origen
          </p>
          <p className="m-1 p-1 flex flex-col items-start justify-start">
            Ante la necesidad de distribuir e intercambiar información acerca de
            sus investigaciones de una manera más efectiva, Berners-Lee
            desarrolló las ideas fundamentales que estructuran la web. Él y su
            grupo crearon lo que por sus siglas en inglés se denomina Lenguaje
            Html (HyperText Markup Language) o lenguaje de etiquetas de
            hipertexto, el protocolo Http (HyperText Transfer Protocol) y el
            sistema de localización de objetos en la web Url (Uniform Resource
            Locator). posible encontrar muchas de las ideas plasmadas por
            Berners-Lee en el proyecto Xanadú (que propuso Ted Nelson) y el
            memex (de Vannevar Bush).
          </p>
          <p id="row_title" className="m-1 p-1 font-bold text-2xl flex flex-col items-start justify-start">
            - Historia
          </p>
          <p className="m-1 p-1 flex flex-col items-start justify-start">
            Tim Berners-Lee nació en el sudoeste de Londres, Reino Unido, el 8
            de junio de 1955. Sus padres eran Conway Berners-Lee y Mary Lee
            Woods. Sus padres eran matemáticos británicos y formaron parte del
            equipo que construyó el Manchester Mark I. Por ello,
            la orientación profesional le venía de familia, ya que sus padres se
            habían conocido en el proyecto de desarrollo del Ferranti Mark I, el
            primer ordenador comercial con programa almacenado desarrollado por
            la empresa Ferranti en marzo de 1951.
          </p>
          <p id="row_title" className="m-1 p-1 font-bold text-2xl flex flex-col items-start justify-start">
            - Acerca
          </p>
          <p className="m-1 p-1 flex flex-row items-start justify-start">
            Después de dejar el Cern, en 1980, se fue a trabajar a la empresa de
            John Poole Image Computer Systems Ltd., pero regresó al Cern otra
            vez en 1984. En 1989, el Cern era el nodo de Internet más grande de
            Europa y Berners-Lee vio la oportunidad de unir Internet y el
            hipertexto (Http y Html), de lo que surgiría la World Wide Web.
            Desarrolló su primera propuesta de la Web el 12 de marzo de 1989,
            pero no tuvo mucho eco, por lo que en 1990 y con la ayuda de Robert
            Cailliau, hicieron una revisión que fue aceptada por su gerente,
            Mike Sendall. Usó ideas similares a las que había usado en el
            sistema Enquire, para crear la World Wide Web, para esto diseñó y
            construyó el primer navegador (llamado World Wide Web y desarrollado
            con Nextstep) y el primer servidor Web al que llamó httpd (HyperText
            Transfer Protocol daemon).
          </p>
          <p id="row_title" className="m-1 p-1 font-bold text-2xl flex flex-row items-start justify-start">
            - Conoce Mas
          </p>
          <p className="m-1 p-1 flex flex-row items-start justify-start">
            El primer servidor Web se encontraba en el Cern y fue puesto en
            línea el 6 de agosto de 1991. Esto proporcionó una explicación sobre
            lo que era el World Wide Web, cómo uno podría tener un navegador y
            cómo establecer un servidor Web. Este fue también el primer
            directorio Web del mundo, ya que Berners-Lee mantuvo una lista de
            otros sitios Web aparte del suyo. Debido a que tanto el software del
            servidor como del cliente fue liberado de forma gratuita desde el
            Cern, el corazón de Internet Europeo en esa época, su difusión fue
            muy rápida. El número de servidores Web pasó de veintiséis en 1992 a
            doscientos en octubre de 1995 lo que refleja cual fue la velocidad
            de la difusión de internet.
          </p>
          <br />
        </div>
      </div>
    </>
  );
}

export default App_Row;
