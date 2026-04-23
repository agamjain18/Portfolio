import React from 'react';
import PageTransition from '../components/PageTransition';
import Services from '../components/Services';
import SEO from '../components/SEO';

const ServicesPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Our Services" 
        description="Explore the range of high-end digital services offered by Agnoz, including web design, mobile development, branding, and cloud hosting."
        keywords="web design services, mobile development, branding agency, cloud hosting, SEO services"
      />
      <div style={{ padding: '100px 0' }}>
        <Services />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
