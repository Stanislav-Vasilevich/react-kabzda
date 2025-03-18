import {Meta, StoryObj} from '@storybook/react';
import UncontrolledOnOff from './UncontrolledOnOff';

const meta: Meta<typeof UncontrolledOnOff> = {
  title: 'компоненты/ONOFF',
  component: UncontrolledOnOff,
};

export default meta;

type Story = StoryObj<typeof UncontrolledOnOff>;

export const UncontrolledMode: Story = {
  args: {
    onChangeOnOff: (i) => i,
  },
};
