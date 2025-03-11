import type { Meta } from '@storybook/react';
import Accordion from './Accordion';
import {useState} from 'react';
import {StoryObj} from '@storybook/react';

const meta: Meta<typeof Accordion> = {
	component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
	args: {
		collapsed: true,
		setCollapsed: () => {}
	},
};

export const CollapsedAccordion = () => {
	return <Accordion collapsed={true} setCollapsed={() => {}}/>
}

export const OpenAccordion = () => {
	return <Accordion collapsed={false} setCollapsed={() => {}}/>
}

export const AccordionDemo = () => {
	const [collapsed, setCollapsed] = useState(false);
	return <Accordion collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)}/>
}
