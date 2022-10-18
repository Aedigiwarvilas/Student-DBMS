import Home from "./components/Home";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:Id" element={<EditStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
