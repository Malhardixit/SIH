import "./App.css";
// import styled from "styled-components";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Operator from "./components/Operator";
import PendingAppointments from "./components/PendingAppointments";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="operator" element={<Operator />} />
          <Route path="pendingAppointments" element={<PendingAppointments />} />
        </Routes>

        {/* <Banner>
          <span>&#169; Govt. Of India, New Delhi, India</span>
        </Banner> */}
      </div>
    </Router>
  );
}

// const Banner = styled.div`
//   text-align: center;
//   width: 100%;
//   padding: 10px 0;
//   position: fixed;
//   bottom: 0;
//   background-color: #1976d2;
//   color: #ffffff;
// `;

export default App;
