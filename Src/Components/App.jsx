import App_Header from "./App_Header";
import App_Aside from "./App_Aside";
import App_Row from "./App-Row";
import App_Footer from "./App_Footer";
import "../Styles/App.css";

function App() {
  return (
    <>
      <App_Header></App_Header>
      <div id="app-container">
        <App_Aside></App_Aside>
        <App_Row></App_Row>
      </div>
      <App_Footer></App_Footer>
    </>
  );
}

export default App;
