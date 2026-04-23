import React from 'react';
import PageTransition from '../components/PageTransition';
import Portfolio from '../components/Portfolio';
import SEO from '../components/SEO';

const PortfolioPage = () => {
  return (
    <PageTransition>
      <SEO 
        title="Portfolio" 
        description="View our curated selection of digital products, brand identities, and high-performance websites built by the Agnoz team."
        keywords="portfolio, case studies, digital projects, web design showcase"
      />
      <div style={{ padding: '100px 0' }}>
        <Portfolio />
      </div>
    </PageTransition>
  );
};

export default PortfolioPage;
