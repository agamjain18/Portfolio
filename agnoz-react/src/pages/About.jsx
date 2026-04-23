import React from 'react';
import PageTransition from '../components/PageTransition';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Shield, Zap, Target, Users, Code, Award } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '2+' },
  { label: 'Digital Products', value: '150+' },
  { label: 'Global Partners', value: '40+' },
  { label: 'Success Rate', value: '99%' }
];

const values = [
  { 
    icon: <Zap size={32} />, 
    title: 'Future-Proof Tech', 
    desc: 'We leverage AI and cutting-edge frameworks to ensure your product leads the market today and tomorrow.' 
  },
  { 
    icon: <Shield size={32} />, 
    title: 'Rock-Solid Security', 
    desc: 'Data integrity is our priority. We implement enterprise-grade security protocols in every line of code.' 
  },
  { 
    icon: <Target size={32} />, 
    title: 'Impact Driven', 
    desc: "We don't just build features; we build solutions that move the needle for your business metrics." 
  }
];

const About = () => {
  return (
    <PageTransition>
      <SEO 
        title="About Us" 
        description="Learn more about Agnoz, a high-performance digital collective specializing in bespoke software ecosystems and human-centric design."
        keywords="about Agnoz, digital innovation, software ecosystems, digital collective"
      />
      <div className={styles.aboutPage}>
        {/* ── Hero Section ── */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.heroContent}
            >
              <div className="section-label">Our Philosophy</div>
              <h1 className={styles.title}>
                Architecting the <span className={styles.highlight}>Next Frontier</span> of Digital Innovation.
              </h1>
              <p className={styles.lead}>
                Agnoz is a high-performance digital collective specialized in crafting bespoke software ecosystems. 
                We bridge the gap between complex engineering and human-centric design.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {stats.map((item, i) => (
                <div key={i} className={styles.statCard}>
                  <div className={styles.statValue}>{item.value}</div>
                  <div className={styles.statLabel}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Story Section ── */}
        <section className={styles.storySection}>
          <div className={styles.container}>
            <div className={styles.storyGrid}>
              <div className={styles.storyText}>
                <h2 className="section-title">The <span className="accent">Story</span></h2>
                <div className={styles.textArea}>
                  <p>
                    Founded in 2024, Agnoz emerged from a vision to revolutionize how businesses interact with technology. 
                    What started as a boutique design studio has evolved into a full-scale digital engineering powerhouse.
                  </p>
                  <p>
                    Today, we operating at the intersection of Artificial Intelligence and User Experience. 
                    Our multidisciplinary team of designers, engineers, and strategists works in radical synchronicity 
                    to solve the most complex digital challenges for industry leaders and ambitious startups alike.
                  </p>
                </div>
              </div>
              <div className={styles.storyImage}>
                <div className={styles.imagePlaceholder}>
                  {/* Decorative element or you can add an image later */}
                  <div className={styles.glow} />
                  <Code size={48} className={styles.innerIcon} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className={styles.valuesSection}>
          <div className={styles.container}>
            <h2 className="section-title text-center">Core <span className="accent">Principles</span></h2>
            <div className={styles.valuesGrid}>
              {values.map((v, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className={styles.valueCard}
                >
                  <div className={styles.valueIcon}>{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vision / Mission ── */}
        <section className={styles.missionSection}>
          <div className={styles.container}>
             <div className={styles.visionMission}>
              <div className={styles.box}>
                <h3>Our Mission</h3>
                <p>To empower visionary leaders with the technological infrastructure required to dominate their sectors and redefine user expectations.</p>
              </div>
              <div className={styles.box}>
                <h3>Our Vision</h3>
                <p>To be the world’s most influential digital architecture firm, setting global standards for efficiency, security, and aesthetic excellence.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
