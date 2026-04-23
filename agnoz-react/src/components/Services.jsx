import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { servicesData as services } from '../data/servicesData';
import styles from './Services.module.css';

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className="section-label">What we do</div>
          <h2 className={styles.title}>
            Services built for<br />
            <span className={styles.accent}>real results</span>
          </h2>
        </div>

        {/* Main layout: list + preview */}
        <div className={styles.body}>

          {/* Left: accordion-style list */}
          <div className={styles.list}>
            {services.map((s, i) => (
              <motion.div
                key={i}
                className={`${styles.item} ${active === i ? styles.itemActive : ''}`}
                style={{ '--accent': s.color }}
                onClick={() => setActive(i)}
              >
                <div className={styles.itemTop}>
                  <span className={styles.num}>{s.num}</span>
                  <div className={styles.itemIcon} style={{ color: s.color }}>
                    {s.icon}
                  </div>
                  <span className={styles.itemTitle}>{s.title}</span>
                  <ArrowUpRight size={18} className={styles.arrow} />
                </div>

                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className={styles.itemBody}
                    >
                      <p className={styles.desc}>{s.desc}</p>
                      <div className={styles.itemFooter}>
                        <div className={styles.tags}>
                          {s.tags.map(t => (
                            <span key={t} className={styles.tag} style={{ borderColor: s.color + '55', color: s.color }}>
                              {t}
                            </span>
                          ))}
                        </div>
                        <Link to={`/services/${s.id}`} className={styles.detailsBtn}>
                          See more details <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right: image preview */}
          <div className={styles.preview}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.4 }}
                className={styles.previewCard}
                style={{ '--accent': services[active].color }}
              >
                <img
                  src={services[active].image}
                  alt={services[active].title}
                  className={styles.previewImg}
                />
                <div className={styles.previewOverlay} />
                
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
