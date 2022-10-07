import styled from "styled-components";
import filme1 from "./Images/A-Menina-Que-Roubava-Livros-capa-filme-1.jpg";

export default function Schedules() {
    return (
        <SchedulesContainer>
            <h3>Selecione o horário</h3>

            <div>
                <h4>Quinta-feira - 24/06/2021</h4>
                <div>
                    <button>15:00</button>
                    <button>19:00</button>
                </div>
            </div>
            
            <div>
                <h4>Sexta-feira - 25/06/2021</h4>
                <div>
                    <button>15:00</button>
                    <button>19:00</button>
                </div>
            </div>

            <footer>
                <div>
                    <div>
                        <img src={filme1} alt="A menina que roubava livros"/>
                    </div>
                    <h2>A menina que roubava livros</h2>
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