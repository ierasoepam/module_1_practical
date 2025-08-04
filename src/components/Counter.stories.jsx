import { Counter } from './Counter';

const meta = {
  title: 'Components/Counter', 
  component: Counter,
  parameters: {    
    layout: 'centered',
  },
  argTypes: {
    initialValue: {
      control: { type: 'number' }, 
      description: 'The initial value of the counter',
      defaultValue: 0,
    },
  },
  tags: ['autodocs'], 
};

export default meta;

export const Default = {
  args: {
    
  },
};

export const StartingAtTen = {
  args: {
    initialValue: 10, 
  },
};

export const StartingAtNegativeFive = {
  args: {
    initialValue: -5,
  },
};