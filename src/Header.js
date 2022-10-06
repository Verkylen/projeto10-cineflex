import styled from "styled-components";

export default function Header() {
    return (
        <Head>
            <h1>CINEFLEX</h1>
        </Head>
    );
}

const Head = styled.header`
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
    }
`;