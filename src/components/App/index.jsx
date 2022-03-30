import "./../../assets/styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/index";
import Register from "../Register/index";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/cadastro" element={<Register />}/>
                {/* <Route path="/" element={}/>
                <Route path="/" element={}/> */}
            </Routes>
        </BrowserRouter>
    );
}