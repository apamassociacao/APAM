import { SidebarProvider } from '@/hooks/SidebarProvider';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminHeader from './AdminHeader';

namespace Test {
  export function buttonsPresent() {
    expect(screen.getByText('Registro')).toBeInTheDocument();
    expect(screen.getByText('Campanhas')).toBeInTheDocument();
    expect(screen.getByText('Transparência')).toBeInTheDocument();
    expect(screen.getByText('Sair')).toBeInTheDocument();
  }
}

afterEach(() => cleanup());

describe('Normal mode', () => {
  beforeEach(() =>
    render(
      <SidebarProvider>
        <MemoryRouter>
          <AdminHeader />
        </MemoryRouter>
      </SidebarProvider>
    )
  );

  test('buttons are present', Test.buttonsPresent);
});

describe('Sidebar mode', () => {
  beforeEach(() =>
    render(
      <SidebarProvider>
        <MemoryRouter>
          <AdminHeader sidebar={true} />
        </MemoryRouter>
      </SidebarProvider>
    )
  );

  test('buttons are present', Test.buttonsPresent);
});
