import GlobalStyle from "./Themes/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Schedules from "./Schedules";
import Session from "./Session";
import Sucess from "./Sucess";
import { useState } from "react";

export default function App() {
    let [movieName, setMovieName] = useState('');
    let [movieDate, setMovieDate] = useState('');
    let [time, setTime] = useState('');
    const [chosenID, setChosenID] = useState([]);
    const [inputName, setInputName] = useState('');
    const [inputCPF, setInputCPF] = useState('');

    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Menu setMovieName={setMovieName}/>}/>
                    <Route path='/filme/:movieID' element={<Schedules setMovieDate={setMovieDate} setTime={setTime}/>}/>
                    <Route path='/sessao/:sessionID' element={<Session chosenID={chosenID} setChosenID={setChosenID} inputName={inputName} setInputName={setInputName} inputCPF={inputCPF} setInputCPF={setInputCPF}/>}/>
                    <Route path='/sucesso' element={<Sucess movieName={movieName} movieDate={movieDate} time={time} chosenID={chosenID} setChosenID={setChosenID} inputName={inputName} inputCPF={inputCPF}/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}