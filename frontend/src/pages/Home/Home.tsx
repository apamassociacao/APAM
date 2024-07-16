import HelpUs from '@/components/HelpUs/HelpUs.tsx';
import Sidebar from '@/components/Sidebar/Sidebar.tsx';
import AboutUs from '@/components/AboutUs/AboutUs.tsx';
import { SidebarProvider } from '@/hooks/SidebarProvider.tsx';

const Home = () => {
  return (
    <main className="home-container">
      <SidebarProvider>
        <Sidebar />
        <HelpUs />
        <AboutUs />
      </SidebarProvider>
    </main>
  );
};

export default Home;
