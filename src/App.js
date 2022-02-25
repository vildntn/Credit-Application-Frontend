import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Dashboard from "./layouts/Dashboard";
import NavBar from "./layouts/Navbar/NavBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCreditApplication from "./pages/CreditApplication/AddCreditApplication";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <div>
        <NavBar />
      </div>
      <div style={{ marginTop: "4em" }}>
      <Dashboard/>
      </div>
    </div>
  );
}

export default App;
