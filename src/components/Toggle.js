import { useState } from 'react';
import {
    motion,
} from "framer-motion";
import styled from 'styled-components';


const ToggleContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #313A3A;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ToggleBackground = styled(motion.div)`

    width: 160px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    padding: 10px;
    cursor: pointer;
`;

const ToggleCircle = styled(motion.div)`
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 40px;
`;

export const Toggle = () => {
    const [toggleDirection, setToggleDirection] = useState(0)
    const toggleOn = () => {
        setToggleDirection(toggleDirection === 0 ? 80 : 0)
    }


    return (
        <ToggleContainer>
            <ToggleBackground
                onTap={toggleOn}
            >
                <ToggleCircle 
                    onTap={toggleOn}
                    animate={{
                        x: toggleDirection
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 700,
                        damping: 30
                    }}
                    style={{
                        background: toggleDirection ? "#CE4993" : "#EEAF61"
                    }}
                />
            </ToggleBackground>
        </ToggleContainer>
    )
}
