import { GenreSelect } from './GenreSelect';
import { fn } from 'storybook/test'; 

const sampleGenres = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller'];
const meta = {
  title: 'Components/GenreSelect', 
  component: GenreSelect,
  parameters: {
    layout: 'centered', 
  },
  
  argTypes: {
    genres: {
      control: 'object', 
      description: 'An array of available genres.',
    },
    currentGenreSelection: {
      control: 'select', 
      options: sampleGenres, 
      description: 'The currently selected genre.',
    },
    onSelect: {
      action: 'genreSelected', 
      description: 'Callback function triggered when a genre is selected.',
    },
  },
  tags: ['autodocs'], 
  args: {    
    genres: sampleGenres,
    onSelect: fn(), 
  }
};

export default meta;
export const Default = {
  args: {
    currentGenreSelection: sampleGenres[0], 
  },
};

export const SelectedHorror = {
  args: {
    currentGenreSelection: 'Horror', 
  },
};

export const NoInitialSelection = {
  args: {
    currentGenreSelection: '', 
  },
};

export const LimitedGenres = {
  args: {
    genres: ['Action', 'Comedy'], 
    currentGenreSelection: 'Action',
  },
};