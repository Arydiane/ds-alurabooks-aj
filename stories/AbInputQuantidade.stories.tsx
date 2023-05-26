import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react"; 
import { AbInputQuantidade, AbInputQuantidadeProps } from "../src/componentes/AbInputQuantidade"

export default {
    title: "Componentes/AbInputQuantidade", 
    component: AbInputQuantidade,
    parameters: { action: { argTypesRegex: '^on.*'}},
} as ComponentMeta<typeof AbInputQuantidade>

const Template: ComponentStory<typeof AbInputQuantidade> = (args) => <AbInputQuantidade {...args} />

export const AbInputQuantidadeComponent = Template.bind({})
AbInputQuantidadeComponent.args = {
   label: "Label de quantidade"
} as AbInputQuantidadeProps