import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <PageTransition>
      <SEO 
        title="Home" 
        description="Agnoz is a high-end digital agency specializing in premium web design, mobile apps, and brand identities. Build your digital future with us."
        keywords="digital agency, web design, mobile apps, branding, Agnoz, development"
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        <Hero />
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Services />
        </div>

        <div style={{ background: 'rgba(255, 255, 255, 0.01)', borderY: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <Portfolio />
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
