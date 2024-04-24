import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('<Header />', () => {
    test('should render correctly', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(screen.getByText('APAM')).toBeInTheDocument();
        expect(
            screen.getByText('Associação Mato-grossense Protetora dos Animais')
        ).toBeInTheDocument();

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
        // @TODO Adicionar teste garantido href dos outros links
    });
});
