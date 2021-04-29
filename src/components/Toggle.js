import { useEffect, useState } from "react";
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform,
    AnimatePresence
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


export const Toggle = () => {


    return (
        <ToggleContainer>
                Place holder
        </ToggleContainer>
    )
}
