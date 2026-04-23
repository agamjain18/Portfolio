import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import styles from './Portfolio.module.css';

const projects = [
  { 
    title: 'Jain Computers', 
    category: 'Education Ecosystem', 
    image: '/image/jaincomputersproject.png',
    tags: ['Mobile Application', 'Web Application', 'Learning Management']
  },
  { 
    title: 'SGU Trade', 
    category: 'Product Showcase', 
    image: '/image/sgutradeproject.png',
    tags: ['E-Commerce', 'Product Catalog', 'Digital Presence']
  }
];

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="section-title">Selected <span className="accent">works</span></h2>
          <p className="section-sub">
            A glimpse into the digital transformations we've spearheaded for our global partners.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={styles.projectCard}
            >
              <div className={styles.imageBox}>
                <img src={p.image} alt={p.title} className={styles.thumb} />
                <div className={styles.overlay}>
                  <div className={styles.viewBtn}>
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              
              <div className={styles.details}>
                <span className={styles.category}>{p.category}</span>
                <h3 className={styles.pTitle}>{p.title}</h3>
                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
