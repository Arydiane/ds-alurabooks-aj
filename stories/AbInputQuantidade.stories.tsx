import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react"; 
import { AbInputQuantidade, AbInputQuantidadeProps } from "../src/componentes/AbInputQuantidade"

export default {
    title: "Componentes/AbInputQuantidade", 
    component: AbInputQuantidade,
    parameters: { action: { argTypesRegex: '^on.*'}},
} as ComponentMeta<typeof AbInputQuantidade>

const Template: ComponentStory<typeof AbInputQuantidade> = () => {
    const [value, setValue] = useState(3)
    return <AbInputQuantidade value={value}  onChange={setValue} />
}

export const Padrao = Template.bind({})