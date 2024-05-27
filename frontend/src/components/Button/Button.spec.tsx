import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button component', () => {
  it('renders correctly with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('button-container');
  });

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByText('Click me');
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('spreads rest props to button element', () => {
    render(<Button data-testid="custom-button">Click me</Button>);
    const button = screen.getByTestId('custom-button');
    expect(button).toBeInTheDocument();
  });
});
