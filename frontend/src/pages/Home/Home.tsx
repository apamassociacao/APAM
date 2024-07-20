import HelpUs from '@/components/HelpUs/HelpUs.tsx';
import Sidebar from '@/components/Sidebar/Sidebar.tsx';
import AboutUs from '@/components/AboutUs/AboutUs.tsx';
import { SidebarProvider } from '@/hooks/SidebarProvider.tsx';
import Campaign from '@/components/Campaign/Campaign';
import Transparency from '@/components/Transparency/Transparency';
import Footer from '@/components/Footer/Footer';

const Home = () => {
  return (
    <main className="home-container">
      <SidebarProvider>
        <Sidebar />
        <HelpUs />
        <AboutUs />
        <Campaign />
        <Transparency />
        <Footer />
      </SidebarProvider>
    </main>
  );
};

export default Home;
