import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
