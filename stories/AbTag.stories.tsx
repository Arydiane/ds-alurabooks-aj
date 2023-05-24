import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AbTag, AbTagProps } from '../src/componentes/AbTag'

export default {
    title: 'Componentes/AbTag', 
    component: AbTag
} as ComponentMeta<typeof AbTag>

const Template: ComponentStory<typeof AbTag> = (args) => <AbTag  {...args} />

export const Primario = Template.bind({})
Primario.args = {
    texto: 'Tag'
} as AbTagProps