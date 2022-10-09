import styled from "styled-components";

export default function Submit({setInputName, setInputCPF, submitData}) {
    return (
        <Form onSubmit={submitData}>
            <label htmlFor='name'>Nome do comprador:</label>
            <input required
                   pattern="[A-Za-zàâãçéêèíóôõúü ]+$"
                   title="Apenas letras Aa~Zz são permitidas neste campo."
                   onChange={e => setInputName(e.target.value)}
                   placeholder="Digite seu nome..."
                   type="text"
                   id='name'
                   data-identifier="buyer-name-input"/>

            <label htmlFor='CPF'>CPF do comprador:</label>
            <input required
                   pattern="[0-9]{11}"
                   maxLength="11"
                   title="Por favor, insira onze dígitos numéricos."
                   onChange={e => setInputCPF(e.target.value)}
                   placeholder="Digite seu CPF..."
                   type="text"
                   id='CPF'
                   data-identifier="buyer-cpf-input"/>
                   
            <input type='submit'
                   value='Reservar assento(s)'
                   data-identifier="reservation-btn"/>
        </Form>
    );
};

const Form = styled.form`
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
        margin-bottom: 10px;
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

    input:last-of-type {
        margin: 50px auto 0 auto;
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
`;