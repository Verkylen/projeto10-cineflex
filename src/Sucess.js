import styled from "styled-components";

export default function Sucess() {
    return (
        <SucessStyle>
            <h2>Pedido feito com sucesso!</h2>
            <div>
                <h3>Filme e sessão</h3>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>
            <div>
                <h3>Ingressos</h3>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>
            <div>
                <h3>Comprador</h3>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </div>
            <button>Voltar pra Home</button>
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

        p:nth-of-type(2) {
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