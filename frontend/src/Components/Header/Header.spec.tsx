import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, test } from 'vitest';
import Header from './Header';

describe('<Header />', () => {

  afterEach(() => {
    cleanup();
  });

  test('should render correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Como Ajudar')).toBeInTheDocument();
    expect(screen.getByText('Adoção')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
    expect(screen.getByText('Ajudar')).toBeInTheDocument();
  });

  test('should have correct navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('Como Ajudar')).toHaveAttribute('href', '/como-ajudar');
    expect(screen.getByText('Adoção')).toHaveAttribute('href', '/adocao');
    expect(screen.getByText('Contato')).toHaveAttribute('href', '/contato');
    expect(screen.getByText('Ajudar')).toHaveAttribute('href', '/ajudar');
  });
});
