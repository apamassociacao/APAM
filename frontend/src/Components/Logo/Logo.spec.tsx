import Logo from '@/Components/Logo/Logo.tsx';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

describe('<Logo />', () => {

  afterEach(() => {
    cleanup();
  });

  test('Should render with correct props', () => {
    const mockedSrc = 'any/path/to/logo.png';
    const altText = 'APAM - Associação Mato-grossense Protetora dos Animais';

    const { getByAltText, getByText } = render(
      <Logo src={mockedSrc} />
    );

    const logoImg = getByAltText(altText);
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', mockedSrc);

    expect(getByText('APAM')).toBeInTheDocument();
    expect(getByText('Associação Mato-grossense Protetora dos Animais')).toBeInTheDocument();
  });
})