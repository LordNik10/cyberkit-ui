import type { StoryObj } from '@storybook/react-vite'

import { MenuItem, Select } from './Select'
import { useState } from 'react';

const Template = () =>{

    const [value, setValue] = useState('1');
    return (
    <Select value={value} onChange={(e) => setValue(e.target.value)}>
        <MenuItem value="1" label="Option 1" />
        <MenuItem value="2" label="Option 2" />
        <MenuItem value="3" label="Option 3" />
    </Select>
);
} 

export default {
  title: 'Components/Select',
  component: Template,
  tags: ['autodocs'],
}

export const Default: StoryObj<typeof Template> = {
  render: () => <Template  />,
  args: {
    value: '1',
  },
} satisfies StoryObj<typeof Template>