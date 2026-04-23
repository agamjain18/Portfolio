import React from 'react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import styles from './Blogs.module.css';

const Blogs = () => {
  const blogs = []; // Empty for now

  return (
    <PageTransition>
      <SEO 
        title="Blogs" 
        description="Stay updated with the latest insights on tech, design, and innovation from the Agnoz team."
      />
      <div className={styles.blogsPage}>
        {blogs.length === 0 ? (
          <div className={styles.emptyState}>
            <h1>Coming Soon</h1>
            <p>Our team is currently crafting insightful content on tech, design, and innovation. Stay tuned for our first release.</p>
          </div>
        ) : (
          <div className={styles.container}>
            {/* Blog list would go here */}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Blogs;
