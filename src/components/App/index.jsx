import "./../../assets/style/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/index";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                {/* <Route path="/" element={}/>
                <Route path="/" element={}/>
                <Route path="/" element={}/> */}
            </Routes>
        </BrowserRouter>
    );
}