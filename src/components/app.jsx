import App_Header from "./app_header";
import App_Aside from "./app_aside";
import App_Row from "./app_row";
import App_Footer from "./app_footer";
import "../styles/app.css";

function App() {
  return (
    <>
      <div id="app_div" className="bg-[#151515] gap-4">
        <App_Header></App_Header>
        <div id="div_app" className="m-1 p-1 bg-[#151515] gap-4">
          <App_Aside></App_Aside>
          <App_Row></App_Row>
        </div>
        <App_Footer></App_Footer>
      </div>
    </>
  );
}

export default App;
