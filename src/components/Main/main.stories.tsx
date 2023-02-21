import { Meta, Story } from '@storybook/react'
import Main, { Props } from './main'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: {
      name: 'Título',
      defaultValue: 'React Avançado',
      description:
        'Este campo é opcional e serve como um título para o componente',
      table: {
        type: {
          summary: 'something short',
          detail: 'something really really long'
        }
      },
      control: {
        type: 'text'
      }
    },
    description: {
      name: 'Descrição',
      defaultValue: 'TypeScript, ReactJs, NextJs e Styled Components',
      description: 'Descrição do componente',
      control: {
        type: 'text'
      }
    }
  }
} as Meta<Props>

export const Basic: Story<Props> = (args) => <Main {...args} />

export const Secondary: Story<Props> = (args) => <Main {...args} />

Secondary.args = {
  title: 'React Avançado Secondary',
  description: 'TypeScript, ReactJs, NextJs e Styled Components Secondary'
} satisfies Props
