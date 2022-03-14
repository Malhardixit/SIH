import "./App.css";
import styled from "styled-components";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />

      <Banner>
        <span>&#169; Govt. Of India, New Delhi, India</span>
      </Banner>
    </div>
  );
}

const Banner = styled.div`
  text-align: center;
  width: 100%;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  background-color: #ff5733;
  color: #ffffff;
`;

export default App;
