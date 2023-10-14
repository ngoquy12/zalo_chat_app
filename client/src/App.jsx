import { Route, Routes } from "react-router-dom";
import "./App.css";
import List_Request from "./components/List_Request";
import Home_Chat from "./components/Home_Chat";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRouter from "./routers/PrivateRouter";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRouter />} >
          <Route path="/list-request" element={<List_Request />} />
          <Route path="/chat" element={<Home_Chat />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
