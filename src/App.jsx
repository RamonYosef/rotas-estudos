import { Outlet } from "react-router-dom";
import "./app.css"
import Navbar from "./componets/NavBar";

function App() {
  return (
    <>
      <Navbar/>
      <Outlet>
        <h1>sla</h1>
      </Outlet>
    </>
  );
}

export default App;
