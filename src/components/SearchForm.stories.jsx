import { SearchForm } from './SearchForm';
import { fn } from 'storybook/test'; 

const meta = {
  title: 'Components/SearchForm', 
  component: SearchForm,
  parameters: {
    layout: 'centered', 
  },  
  argTypes: {
    initialSearchQuery: {
      control: 'text', 
      description: 'The initial value of the search input.',
      defaultValue: '', 
    },
    onSearch: {
      action: 'searchExecuted', 
      description: 'Callback function triggered when a search is performed.',
    },
  },
  tags: ['autodocs'], 
  args: {
    
    initialSearchQuery: '',
    onSearch: fn(), 
  },
};

export default meta;
export const Default = {
  args: {
    
  },
};

export const WithInitialQuery = {
  args: {
    initialSearchQuery: 'react components', 
  },
};

export const LongQuery = {
  args: {
    initialSearchQuery: 'This is a very very very very long search query example to test wrapping.',
  },
};
