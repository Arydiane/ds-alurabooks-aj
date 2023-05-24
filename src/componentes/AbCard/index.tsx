import React, { ReactNode } from "react";
import styled from "styled-components";

export interface CardProps {
    children: ReactNode
}

const CardEstilizado = styled.div`
    padding: 48px; 
    background: #FFF; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`

export const AbCard = ({ children }: CardProps) => {
    return (
        <CardEstilizado>
            {children}
        </CardEstilizado>
    )
}