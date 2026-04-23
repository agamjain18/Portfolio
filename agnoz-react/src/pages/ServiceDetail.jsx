import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import PageTransition from '../components/PageTransition';
import styles from './ServiceDetail.module.css';
import SEO from '../components/SEO';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);
  const [activeStep, setActiveStep] = useState(0);
  const [activeFeature, setActiveFeature] = useState(null);

  if (!service) {
    return (
      <PageTransition>
        <SEO title="Service Not Found" />
        <div className={styles.notFound}>
          <h1>Service not found</h1>
          <Link to="/services" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Services
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SEO 
        title={service.title} 
        description={service.desc}
        keywords={`${service.title.toLowerCase()}, Agnoz services, ${service.tags.join(', ')}`}
      />
      <div className={styles.page} style={{ '--accent': service.color }}>

        {/* Floating noise texture */}
        <div className={styles.noise} />

        {/* Ambient orbs */}
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />

        {/* ── NAVIGATION ── */}
        <nav className={styles.nav}>
          <div />
          <span className={styles.navServiceTag}>{service.num} — {service.title}</span>
        </nav>

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <motion.div
            className={styles.heroLeft}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.serviceLabel}>
              <div className={styles.dot} />
              <span>{service.num} / 06</span>
            </div>

            <h1 className={styles.heroTitle}>
              <span className={styles.heroWord}>Agnoz</span>
              <span className={styles.heroWordAccent}>{service.title}</span>
            </h1>
          </motion.div>

          <motion.div
            className={styles.heroRight}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className={styles.iconWrap}>
              <div className={styles.iconRing} />
              <div className={styles.iconInner}>{service.icon}</div>
            </div>
            <p className={styles.heroDesc}>{service.fullDesc}</p>

            {/* Quick stats */}
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statNum}>4–12</span>
                <span className={styles.statLabel}>Weeks Avg.</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Satisfaction</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>24/7</span>
                <span className={styles.statLabel}>Support</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className={styles.horizontalRule} />

        {/* ── CAPABILITIES ── */}
        <section className={styles.capSection}>
          <motion.div
            className={styles.capLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span>What we deliver</span>
          </motion.div>

          <div className={styles.capList}>
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                className={`${styles.capItem} ${activeFeature === i ? styles.capItemActive : ''}`}
                onClick={() => setActiveFeature(activeFeature === i ? null : i)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className={styles.capItemMain}>
                  <span className={styles.capNum}>0{i + 1}</span>
                  <span className={styles.capText}>{feature.title}</span>
                  <div className={styles.capArrow}><ArrowUpRight size={18} /></div>
                </div>
                
                <AnimatePresence>
                  {activeFeature === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.capDetails}
                    >
                      <p>{feature.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── PROCESS — Interactive Accordion ── */}
        <section className={styles.processSection}>
          <motion.h2
            className={styles.bigLabel}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            The Process
          </motion.h2>

          <div className={styles.processGrid}>
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                className={`${styles.processCard} ${activeStep === i ? styles.processCardActive : ''}`}
                onClick={() => setActiveStep(i)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardNum}>0{i + 1}</span>
                  <div className={`${styles.cardDot} ${activeStep === i ? styles.cardDotActive : ''}`} />
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.desc}</p>
                <div className={styles.cardGlow} />
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeStep !== null && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={styles.processDetail}
              >
                <div className={styles.detailHeader}>
                  <span className={styles.detailNum}>0{activeStep + 1}</span>
                  <h4 className={styles.detailTitle}>{service.process[activeStep].title} — Execution Flow</h4>
                </div>
                
                <div className={styles.flowGrid}>
                  {service.process[activeStep].flow.map((flowStep, idx) => (
                    <motion.div 
                      key={idx} 
                      className={styles.flowNode}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                      <div className={styles.nodeLeft}>
                        <div className={styles.nodePoint} />
                        {idx < service.process[activeStep].flow.length - 1 && (
                          <div className={styles.nodeConnector} />
                        )}
                      </div>
                      
                      <div className={styles.nodeContent}>
                        <div className={styles.nodeHeader}>
                          <span className={styles.nodeIndex}>0{idx + 1}</span>
                          <h5 className={styles.nodeTitle}>{flowStep.title}</h5>
                        </div>
                        <p className={styles.nodeText}>{flowStep.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ── TECH MARQUEE ── */}
        <section className={styles.techSection}>
          <motion.div
            className={styles.techLabel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technology Ecosystem
          </motion.div>

          <div className={styles.techMarquee}>
            <div className={styles.techTrack}>
              {[...service.technologies, ...service.technologies, ...service.technologies].map((tech, i) => (
                <span key={i} className={styles.techChip}>{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className={styles.ctaSection}>
          <motion.div
            className={styles.ctaInner}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.ctaGlow} />
            <p className={styles.ctaEyebrow}>Ready to build something remarkable?</p>
            <h2 className={styles.ctaHeading}>
              Let's make your vision<br />
              <span className={styles.ctaAccent}>a reality.</span>
            </h2>
            <div className={styles.ctaActions}>
              <Link to="/contact" className={styles.ctaBtn}>
                Start the Conversation <ArrowUpRight size={20} />
              </Link>
              <Link to="/portfolio" className={styles.ctaBtnOutline}>
                See Our Work
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
};

export default ServiceDetail;
