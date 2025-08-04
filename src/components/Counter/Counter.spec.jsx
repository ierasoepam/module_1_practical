import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter component', () => {

  test('should render the initial value provided in props', () => {
    const initialValue = 100;
    render(<Counter initialValue={initialValue} />);
    const counterElement = screen.getByText(initialValue);
    expect(counterElement).toBeInTheDocument();
  });

  test('should decrement the displayed value when the "Decrement" button is clicked', () => {
    const initialValue = 5;
    render(<Counter initialValue={initialValue} />);
    const counterElement = screen.getByText(initialValue);
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    fireEvent.click(decrementButton);
    expect(counterElement).toHaveTextContent('4');
  });

  test('should increment the displayed value when the "Increment" button is clicked', () => {
    const initialValue = 0;
    render(<Counter initialValue={initialValue} />);
    const counterElement = screen.getByText(initialValue);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    fireEvent.click(incrementButton);
    expect(counterElement).toHaveTextContent('1');
  });

});