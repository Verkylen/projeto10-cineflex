import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Schedules() {
    const {movieID} = useParams();
    const [data, setData] = useState({});
    const [days, setDays] = useState([]);

    function request() {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`;
        const promise = axios.get(URL);
        promise.then(response => {setData(response.data); setDays(response.data.days);});
    }

    useEffect(request, [movieID]);

    function Day({weekday, date, showtimes, id}) {
        function Time({name, id}) {
            return (
                <Link to={`/sessao/${id}`} key={id}>
                    <button>{name}</button>
                </Link>
            );
        }

        return (
            <div key={id}>
                <h4>{weekday} - {date}</h4>
                <div>
                    {showtimes.map(Time)}
                </div>
            </div>
        );
    }

    return (
        <SchedulesContainer>
            <h3>Selecione o horário</h3>

            {days.map(Day)}

            <footer>
                <div>
                    <div>
                        <img src={data.posterURL} alt={data.title}/>
                    </div>
                    <h2>{data.title}</h2>
                </div>
            </footer>
        </SchedulesContainer>
    );
}

const SchedulesContainer = styled.div`
    margin-top: 67px;
    margin-bottom: 142px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin-top: 50px;
        margin-bottom: 50px;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04px;
        color: #293845;
    }

    &>div {
        margin-bottom: 23px;
        width: 329px;
        
        h4 {
            margin-bottom: 22px;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            letter-spacing: 0.02px;
            color: #293845;
        }

        div {
            button {
                margin-right: 8px;
                width: 83px;
                height: 43px;
                border: none;
                border-radius: 3px;
                background-color: #E8833A;
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
                letter-spacing: 0.02px;
                color: #FFFFFF;
                cursor: pointer;
            }
        }
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

        div {
            width: 355px;
            display: flex;
            align-items: center;

            div {
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

            h2 {
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 26px;
                line-height: 30px;
                color: #293845;
            }
        }
    }
`;