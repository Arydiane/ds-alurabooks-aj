import React from "react";
import { ComponentMeta, ComponentStory} from "@storybook/react"
import { AbModal, AbModalProps } from '../src/componentes/AbModal'

export default {
    title: 'Componentes/AbModal', 
    component: AbModal
} as ComponentMeta<typeof AbModal>

const Template: ComponentStory<typeof AbModal> = (args) => <AbModal {...args} />

export const Primario = Template.bind({})
Primario.args = {
    aberta: true,
    titulo: 'Titulo do modal', 
    children: <h1>Conteúdo do modal</h1>
} as AbModalProps