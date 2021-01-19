import "./App.css";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div>
      <img
        src={logo}
        alt="SpaceX"
        style={{ width: 300, display: "block", margin: "auto" }}
      />
    </div>
  );
}

export default App;
