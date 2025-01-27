import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import Navbaar from "./Pages/Navbaar";
import Dashboard from "./Pages/Dashboard";
import Courses from "./Pages/Courses";

function App() {
  return (
    <Router>
      <Navbaar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
