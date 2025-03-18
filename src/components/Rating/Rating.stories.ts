import {Meta, StoryObj} from '@storybook/react';
import Rating from './Rating';

const meta: Meta<typeof Rating> = {
  title: 'компоненты/RATING',
  component: Rating,
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Rating0: Story = {
  args: {
    rating: 0,
  },
};

export const Rating1: Story = {
  args: {
    rating: 1,
  },
};

export const Rating2: Story = {
  args: {
    rating: 2,
  },
};

export const Rating3: Story = {
  args: {
    rating: 3,
  },
};

export const Rating4: Story = {
  args: {
    rating: 4,
  },
};

export const Rating5: Story = {
  args: {
    rating: 5,
  },
};
