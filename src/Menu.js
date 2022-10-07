import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Menu() {
    const [catalog, setCatalog] = useState([]);

    function request() {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promise.then(response => setCatalog(response.data));
    }

    useEffect(request, []);

    function Movie(props) {
        return (
            <li key={props.id}>
                <Link to={`/filme/${props.id}`}>
                    <img src={props.posterURL} alt={props.title}/>
                </Link>
            </li>
        );
    }

    return (
        <Movies>
            <section><h2>Selecione o filme</h2></section>
            <ul>
                {catalog.map(Movie)}
            </ul>
        </Movies>
    );
}

const Movies = styled.div`
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
        position: fixed;
        top: 67px;
        width: 100%;
        height: 124px;
        background-color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            letter-spacing: 0.04px;
            color: #293845;
        }
    }

    ul {
        margin-top: 128px;
        width: 320px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        li {
            margin-bottom: 11px;
            width: 145px;
            height: 209px;
            border-radius: 3px;
            box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            img {
                width: 129px;
                height: 193px;
            }
        }
    }
`;