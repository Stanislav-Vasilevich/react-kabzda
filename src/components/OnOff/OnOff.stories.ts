import {Meta, StoryObj} from '@storybook/react';
import OnOff from './OnOff';

const meta: Meta<typeof OnOff> = {
  title: 'Компоненты/ONOFF',
  component: OnOff,
  tags: ['autodogs'],
}

export default meta;

type Story = StoryObj<typeof OnOff>;

export const On: Story = {
  args: {
    includedOnOff: true
  }
}

export const Off: Story = {
  args: {
    includedOnOff: false
  }
}
