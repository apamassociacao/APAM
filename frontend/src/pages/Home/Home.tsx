import { useEffect, useState } from 'react';
import HelpUs from '@/components/HelpUs/HelpUs.tsx';
import Sidebar from '@/components/Sidebar/Sidebar.tsx';
import AboutUs from '@/components/AboutUs/AboutUs.tsx';
import { SidebarProvider } from '@/hooks/SidebarProvider.tsx';
import Campaign from '@/components/Campaign/Campaign';
import Transparency from '@/components/Transparency/Transparency';
import Footer from '@/components/Footer/Footer';

import './_home.scss';
import iconArrowTop from '/images/ep_arrow-up-bold.svg';

const Home = () => {
  const [showButton, setShowButton] = useState<boolean>();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleScrollBtnVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollBtnVisibility);
    };
  }, []);

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
      {showButton && (
        <button className="home-container--btn" onClick={handleScrollToTop}>
          Voltar ao topo
          <img src={iconArrowTop} alt="Icone de Seta para cima" />
        </button>
      )}
    </main>
  );
};

export default Home;
