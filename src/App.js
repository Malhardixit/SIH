import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Operator from "./components/Operator";
import PendingAppointments from "./components/PendingAppointments";
import MakePayments from "./components/MakePayments";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/operator" element={<Operator />} />
          <Route
            path="/pendingAppointments"
            element={<PendingAppointments />}
          />
          <Route path="/makePayments" element={<MakePayments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
