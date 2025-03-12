import {Meta, StoryObj} from '@storybook/react';
import OnOff from './OnOff';

const meta: Meta<typeof OnOff> = {
  component: OnOff,
}

export default meta;
type Story = StoryObj<typeof OnOff>

export const On: Story = {
  args: {
    changeOnOff: a => a,
    includedOnOff: true
  }
}

export const Off: Story = {
  args: {
    changeOnOff: a => a,
    includedOnOff: false
  }
}
