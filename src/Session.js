import styled from "styled-components";
import filme1 from "./Images/A-Menina-Que-Roubava-Livros-capa-filme-1.jpg";

export default function Session() {
    return (
        <SessionStyle>
            <h3>Selecione o(s) assento(s)</h3>
            <ul>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>04</li>
                <li>05</li>
                <li>06</li>
                <li>07</li>
                <li>08</li>
                <li>09</li>
                <li>10</li>
            </ul>
            <ul>
                <li>01</li>
                <li>02</li>
                <li>03</li>
                <li>04</li>
                <li>05</li>
                <li>06</li>
                <li>07</li>
                <li>08</li>
                <li>09</li>
                <li>10</li>
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
                        <img src={filme1} alt="A menina que roubava livros"/>
                    </div>
                    <div>
                        <h2>Enola Holmes</h2>
                        <h2>Quinta-feira - 15:00</h2>
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
        width: 327px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
            margin-bottom: 18px;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background-color: #C3CFD9;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            letter-spacing: 0.04px;
            color: #000000;
        }
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
                border: 1px solid #0E7D71;
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
                border: 1px solid #0E7D71;
                background-color: #1AAE9E;
            }
        }

        &>div:nth-of-type(2) {
            div {
                border: 1px solid #7B8B99;
                background-color: #C3CFD9;
            }
        }

        &>div:nth-of-type(3) {
            div {
                border: 1px solid #F7C52B;
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