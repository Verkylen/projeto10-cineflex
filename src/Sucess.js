import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sucess({movieName, movieDate, time, chosenID, setChosenID, inputName, inputCPF}) {

    function showSeat(id) {
        if ((Number(id)%50).toString().length !== 1) {
            return (Number(id)%50).toString();
        } else {
            return '0' + (Number(id)%50).toString();
        }
    }

    return (
        <SucessStyle>
            <h2>
                Pedido feito<br/>
                com sucesso!
            </h2>
            <div>
                <h3>Filme e sessão</h3>
                <p data-identifier="movie-session-infos-reserve-finished">{movieName}</p>
                <p data-identifier="movie-session-infos-reserve-finished">{movieDate} {time}</p>
            </div>
            <div>
                <h3>Ingressos</h3>
                {chosenID.map(id => <p key={id} data-identifier="seat-infos-reserve-finished">Assento {showSeat(id)}</p>)}
            </div>
            <div>
                <h3>Comprador</h3>
                <p data-identifier="buyer-infos-reserve-finished">Nome: {inputName}</p>
                <p data-identifier="buyer-infos-reserve-finished">CPF: {inputCPF}</p>
            </div>
            <Link to='/'>
                <button onClick={() => setChosenID([])} data-identifier="back-to-home-btn">Voltar pra Home</button>
            </Link>
        </SucessStyle>
    );
}

const SucessStyle = styled.div`
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin: 50px 0;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04px;
        color: #247A6B;
    }

    div {
        width: 317px;

        h3 {
            margin-bottom: 10px;
            font-family: 'Roboto';
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            letter-spacing: 0.04px;
            color: #293845;
        }

        p {
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 22px;
            line-height: 26px;
            letter-spacing: 0.04px;
            color: #293845;
        }

        p:last-of-type {
            margin-bottom: 25px;
        }
    }

    button {
        width: 225px;
        height: 42px;
        border: none;
        border-radius: 3px;
        background: #E8833A;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04px;
        color: #FFFFFF;
    }
`;