import HelpUs from '@/components/HelpUs/HelpUs.tsx';
import Sidebar from '@/components/Sidebar/Sidebar.tsx';
import { SidebarProvider } from '@/hooks/SidebarProvider.tsx';

const Home = () => {
  return (
    <main className="home-container">
      <SidebarProvider>
        <Sidebar />
        <HelpUs />
      </SidebarProvider>
    </main>
  );
};

export default Home;
