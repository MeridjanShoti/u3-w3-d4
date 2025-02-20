import { BrowserRouter, Link, Route, Routes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import HomePage from "./components/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<h1>DETAILS</h1>} />
          <Route
            path="*"
            element={
              <div>
                <h1>PAGINA NON ESISTENTE</h1> <Link to="/"></Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
