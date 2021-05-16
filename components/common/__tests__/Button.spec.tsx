import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('<Button />', () => {
  it('should allow a button to render with no props', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should allow a button with text', () => {
    render(<Button>Neat</Button>);
    expect(screen.getByRole('button', { name: /neat/i })).toBeInTheDocument();
  });

  it('should allow a button with an accessibility label', () => {
    render(<Button accessibilityLabel="Description">Neat</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Description');
  });

  it('should allow a button with a popup', () => {
    render(<Button accessibilityHasPopup={true} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-haspopup', 'true');
  });

  it('should allow a button to be disabled', () => {
    render(<Button disabled={true} />);
    userEvent.tab();
    expect(document.activeElement).not.toBe(screen.getByRole('button'));
    userEvent.tab();
    expect(document.activeElement).not.toBe(screen.getByRole('button'));
  });

  it('should allow an onClick function to be called on click', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should allow a submit button', () => {
    render(<Button type="submit" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('should allow an onClick function to be called on submit click', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} type="submit" />);
    userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
