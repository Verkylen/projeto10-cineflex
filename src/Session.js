import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Seats from "./Seats";

export default function Session() {
    const {sessionID} = useParams();
    const [data, setData] = useState({});
    const [day, setDay] = useState({});
    const [movie, setMovie] = useState({});
    const [seats, setSeats] = useState([]);

    function request() {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`;
        const promise = axios.get(URL);
        promise.then(response => {
            console.log(response.data);
            setData(response.data);
            setDay(response.data.day);
            setMovie(response.data.movie);
            setSeats(response.data.seats);
        });
    }

    useEffect(request, [sessionID]);

    return (
        <SessionStyle>
            <h3>Selecione o(s) assento(s)</h3>
            <ul>
                <Seats seats={seats}/>
            </ul>
            <div>
                <div>
                    <div></div>
                    <span>Selecionado</span>
                </div>
                <div>
                    <div></div>
                    <span>Disponível</span>
                </div>
                <div>
                    <div></div>
                    <span>Indisponível</span>
                </div>
            </div>
            <form>
                <label htmlFor='name'>Nome do comprador:</label>
                <input placeholder="Digite seu nome..." type="text" id='name'/>
                <label htmlFor='CPF'>CPF do comprador:</label>
                <input placeholder="Digite seu CPF..." type="text" id='CPF'/>
            </form>
            <button>Reservar assento(s)</button>
            <footer>
                <div>
                    <div>
                        <img src={movie.posterURL} alt={movie.title}/>
                    </div>
                    <div>
                        <h2>{movie.title}</h2>
                        <h2>{day.weekday} - {data.name}</h2>
                    </div>
                </div>
            </footer>
        </SessionStyle>
    );
}

const SessionStyle = styled.div`
    margin-top: 67px;
    margin-bottom: 142px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin-top: 50px;
        margin-bottom: 25px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04px;
        color: #293845;
    }

    ul {
        width: 334px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    &>div {
        margin-bottom: 42px;
        width: 327px;
        display: flex;
        justify-content: space-around;

        &>div {
            width: 91px;
            display: flex;
            flex-direction: column;
            align-items: center;

            div {
                margin-bottom: 5px;
                width: 25px;
                height: 25px;
                border: 1px solid;
                border-radius: 17px;
            }

            span {
                font-family: 'Roboto';
                font-weight: 400;
                font-size: 13px;
                line-height: 15px;
                letter-spacing: -0.013px;
                color: #4E5A65;
            }
        }

        &>div:nth-of-type(1) {
            div {
                border-color: #0E7D71;
                background-color: #1AAE9E;
            }
        }

        &>div:nth-of-type(2) {
            div {
                border-color: #7B8B99;
                background-color: #C3CFD9;
            }
        }

        &>div:nth-of-type(3) {
            div {
                border-color: #F7C52B;
                background-color: #FBE192;
            }
        }
    }

    form {
        width: 327px;
        display: flex;
        flex-direction: column;

        label {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color: #293845;
        }

        input {
            margin-bottom: 7px;
            width: 100%;
            height: 51px;
            border: 1px solid #D5D5D5;
            border-radius: 3px;
            padding-left: 18px;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color: #293845;

            &::placeholder {
                margin-left: 18px;
                font-family: 'Roboto';
                font-style: italic;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
                color: #AFAFAF;
            }

            &:focus {
                outline: 0;
            }
        }
    }

    button {
        margin-top: 50px;
        width: 225px;
        height: 42px;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04px;
        color: #FFFFFF;
    }

    footer {
        position: fixed;
        bottom: 0;
        z-index: 1;
        width: 100%;
        height: 117px;
        border-top: 1px solid #9EADBA;
        background-color: #DFE6ED;
        display: flex;
        justify-content: center;
        align-items: center;

        &>div {
            width: 355px;
            display: flex;
            align-items: center;

            div:nth-of-type(1) {
                margin-right: 14px;
                width: 64px;
                height: 89px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                border-radius: 2px;
                background-color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 48px;
                    height: 72px;
                }
            }

            div:nth-of-type(2) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                
                h2 {
                    font-family: 'Roboto', sans-serif;
                    font-weight: 400;
                    font-size: 26px;
                    line-height: 30px;
                    color: #293845;
                }
            }
        }
    }
`;