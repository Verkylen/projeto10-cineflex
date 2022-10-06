import GlobalStyle from "./Themes/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Schedules from "./Schedules";
import Session from "./Session";

export default function App() {
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Menu/>}/>
                    <Route path='/filme' element={<Schedules/>}/>
                    <Route path='/sessao' element={<Session/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}