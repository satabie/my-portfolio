import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MyWorks from "./components/MyWorks";
import Links from "./components/Links";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/my-portfolio" element={<HomePage />} />
          <Route path="/my-portfolio/works" element={<MyWorks />} />
          <Route path="/my-portfolio/links" element={<Links />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
