import {Meta, StoryObj} from '@storybook/react';
import UncontrolledRating from './UncontrolledRating';

const meta: Meta<typeof UncontrolledRating> = {
  title: 'компоненты/RATING',
  component: UncontrolledRating,
};

export default meta;

type Story = StoryObj<typeof UncontrolledRating>;

export const RatingMode: Story = {
  args: {
    onChangeOnOff: (i) => i,
  },
};
