import { useState } from "react";
import styled from "styled-components";

export default function Seats({seats, chosenID, setChosenID}) {

    function Seat({id, name, isAvailable}) {
        let color;

        if (isAvailable) {
            color = {borderColor: '#808F9D', backgroundColor: '#C3CFD9'};
        } else {
            color = {borderColor: '#F7C52B', backgroundColor: '#FBE192'};
        }

        const [newColor, setNewColor] = useState(color);

        function Select(clickedID, available) {
            if (available) {
                if (!chosenID.includes(clickedID)) {
                    setNewColor({borderColor: '#0E7D71', backgroundColor: '#1AAE9E'});
                    setChosenID([...chosenID, clickedID]);
                } else {
                    setNewColor({borderColor: '#808F9D', backgroundColor: '#C3CFD9'});
                    const previouslyChosen = chosenID.filter(item => item !== clickedID);
                    setChosenID(previouslyChosen);
                }
            } else {
                alert('Esse assento não está disponível');
            }
        }

        if (name.length === 1) {
            name = '0' + name;
        }

        return (
            <Li onClick={() => Select(id, isAvailable)}
                        newColor={newColor}
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
    border: 1px solid;
    border-color: ${({newColor}) => newColor.borderColor};
    border-radius: 50%;
    background-color: ${({newColor}) => newColor.backgroundColor};
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