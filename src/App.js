import GlobalStyle from "./Themes/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Schedules from "./Schedules";
import Session from "./Session";
import Sucess from "./Sucess";

export default function App() {
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Menu/>}/>
                    <Route path='/filme/:movieID' element={<Schedules/>}/>
                    <Route path='/sessao/:sessionID' element={<Session/>}/>
                    <Route path='sucesso' element={<Sucess/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}