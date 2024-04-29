import App_Header from "./app_header";
import App_Aside from "./app_aside";
import App_Row from "./app_row";
import App_Footer from "./app_footer";
import "../styles/app.css";

function App() {
  return (
    <>
      <div className="m-0 p-0" >
        <App_Header></App_Header>
        <div id="app" >
          <App_Aside></App_Aside>
          <App_Row></App_Row>
        </div>
        <App_Footer></App_Footer>
      </div>
    </>
  );
}

export default App;