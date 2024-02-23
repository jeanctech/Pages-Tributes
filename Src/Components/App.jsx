import App_Header from "./App_Header";
import App_Aside from "./App_Aside";
import App_Row from "./App_Row";
import App_Footer from "./App_Footer";
import "../Styles/App.css";

function App() {
  return (
    <>
      <div className="m-0 p-0 bg-slate-300 text-slate-800 ">
        <App_Header></App_Header>
        <div id='app'>
          <App_Aside></App_Aside>
          <App_Row></App_Row>
        </div>
        <App_Footer></App_Footer>
      </div>
    </>
  );
}

export default App;
