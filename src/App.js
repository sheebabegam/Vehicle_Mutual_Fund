import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRouter from "./auth/Protected";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRouter />}>
          <Route path="/home" element={<Home />} exact />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
