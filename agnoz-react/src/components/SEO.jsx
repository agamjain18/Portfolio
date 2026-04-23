import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = 'Agnoz | Modern Digital Agency';
  const fullTitle = title ? `${title} | Agnoz` : siteTitle;
  const siteDescription = description || 'Agnoz is a high-end digital agency specializing in premium web design, mobile apps, and brand identities.';
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={siteDescription} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
