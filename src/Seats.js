import { useState } from "react";
import styled from "styled-components";

export default function Seats({seats, chosenID, setChosenID}) {

    function Seat({id, name, isAvailable}) {
        const inputBgc = (isAvailable)? '#C3CFD9': '#FBE192';
        const [bgcState, setBgcState] = useState(inputBgc);
        let backgroundColor = bgcState;

        function Select(clickedID, available) {
            if (available) {
                setBgcState('#1AAE9E');
                setChosenID([...chosenID, clickedID]);
            } else {
                alert('Esse assento não está disponível');
            }
        }

        if (name.length === 1) {
            name = '0' + name;
        }

        return (
            <Li onClick={() => Select(id, isAvailable)}
                        backgroundColor={backgroundColor}
                        key={id}>
                {name}
            </Li>
        );
    }

    return (
        <Ul>
            {seats.map(Seat)}
        </Ul>
    );
}

const Ul = styled.ul`
    width: 334px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Li = styled.li`
    margin: 0 3.5px 18px 3.5px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${props => props.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04px;
    color: #000000;
`;