import {Meta, StoryObj} from '@storybook/react';
import Rating from './Rating';

const meta: Meta<typeof Rating> = {
  component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Rating0: Story = {
  args: {
    rating: 0,
    changeRating: (a) => a
  },
};

export const Rating1: Story = {
  args: {
    rating: 1,
    changeRating: (a) => a
  },
};

export const Rating2: Story = {
  args: {
    rating: 2,
    changeRating: (a) => a
  },
};

export const Rating3: Story = {
  args: {
    rating: 3,
    changeRating: (a) => a
  },
};

export const Rating4: Story = {
  args: {
    rating: 4,
    changeRating: (a) => a
  },
};

export const Rating5: Story = {
  args: {
    rating: 5,
    changeRating: (a) => a
  },
};
