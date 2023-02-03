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

// import React, { useState } from "react";

// const ChatAdmin = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessages([...messages, message]);
//     setMessage("");
//   };
//   console.log("Mesages", messages);
//   console.log("Message", message);

//   return (
//     <div>
//       <h2>Chat Admin</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type="submit">Send Message</button>
//       </form>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index}>
//             <p style={{ color: "white" }}>{msg}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChatAdmin;
