import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import styles from './Hero.module.css';

const stats = [
  { value: '120+', label: 'Projects delivered' },
  { value: '4.9★', label: 'Client rating' },
  { value: '3×', label: 'Faster with AI' },
];

const marqueeItems = [
  'Web Design', 'App Development', 'AI Integration', 'Brand Identity',
  'Cloud Hosting', 'Digital Marketing', 'UI/UX Design', 'SEO & Growth',
];

const Hero = () => (
  <section className={styles.hero}>
    {/* ── Ambient blobs ── */}
    <div className={styles.blobGreen} />
    <div className={styles.blobCyan} />

    {/* ── Grid lines overlay ── */}
    <div className={styles.gridLines} />

    <div className={styles.inner}>
      {/* ─ BADGE ─ */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.badge}
      >
        <Sparkles size={14} />
        AI-powered · Faster · Smarter
      </motion.div>

      {/* ─ HEADLINE ─ */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={styles.headline}
      >
        We Build&nbsp;
        <span className={styles.gradientText}>Digital&nbsp;Products</span>
        <br />
        the World&nbsp;
        <span className={styles.outlineText}>Remembers.</span>
      </motion.h1>

      {/* ─ SUBTEXT ─ */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={styles.sub}
      >
        Agnoz blends human creativity with advanced AI to craft web apps,
        mobile experiences, and brand identities — at startup speed.
      </motion.p>

      {/* ─ CTA ROW ─ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={styles.ctas}
      >
        <NavLink to="/contact" className={styles.primaryCta}>
          Start a Project
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </NavLink>
        <NavLink to="/portfolio" className={styles.ghostCta}>
          View Our Work
        </NavLink>
      </motion.div>

      {/* ─ STAT ROW ─ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={styles.stats}
      >
        {stats.map((s, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.statVal}>{s.value}</span>
            <span className={styles.statLbl}>{s.label}</span>
          </div>
        ))}
      </motion.div>
    </div>

    {/* ── MARQUEE TICKER ── */}
    <div className={styles.ticker}>
      <div className={styles.tickerTrack}>
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className={styles.tickerItem}>
            {item} <span className={styles.tickerDot}>✦</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
