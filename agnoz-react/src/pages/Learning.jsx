import React from 'react';
import PageTransition from '../components/PageTransition';
import styles from './Learning.module.css';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  BookOpen, Code, GraduationCap, Laptop, 
  Sparkles, CheckCircle, Users, Award,
  Terminal, BarChart, Cpu, BrainCircuit,
  ArrowRight, Zap, Target, Rocket, Layers
} from 'lucide-react';

const tracks = [
  { 
    title: 'AI Foundations', 
    icon: <BrainCircuit size={28} />, 
    level: 'Beginner',
    tag: 'Trending',
    desc: 'Deep dive into Neural Networks, LLMs, and prompt engineering for modern software.',
    modules: ['Machine Learning Basics', 'OpenAI API Integration', 'Vector Databases']
  },
  { 
    title: 'Full-Stack Mastery', 
    icon: <Terminal size={28} />, 
    level: 'Intermediate',
    tag: 'Core Skill',
    desc: 'Mastering the React ecosystem, Node.js, and high-performance database design.',
    modules: ['Vite & React 19', 'Advanced SSR with Next.js', 'PostgreSQL Optimization']
  },
  { 
    title: 'Product Design', 
    icon: <Laptop size={28} />, 
    level: 'All Levels',
    tag: 'Creative',
    desc: 'Creating "wow" experiences with Framer Motion, GSAP, and advanced Figma prototyping.',
    modules: ['Motion Design Systems', 'Interactive UI Labs', 'User Psychology']
  },
  { 
    title: 'Enterprise Ops', 
    icon: <Cpu size={28} />, 
    level: 'Advanced',
    tag: 'High Salary',
    desc: 'Scaling products to millions of users with Docker, Kubernetes, and AWS.',
    modules: ['CI/CD Pipelines', 'Distributed Systems', 'Cloud Security']
  },
];

const learningSteps = [
  {
    icon: <Target className={styles.stepIcon} />,
    title: "1. Skill Discovery",
    desc: "We identify your natural strengths and align them with high-demand industry tracks."
  },
  {
    icon: <Layers className={styles.stepIcon} />,
    title: "2. Intensive Build",
    desc: "You don't just 'learn'; you build. 100% project-based curriculum mirroring real client work."
  },
  {
    icon: <Rocket className={styles.stepIcon} />,
    title: "3. Market Entry",
    desc: "Personal branding, portfolio reviews, and direct placement into our startup network."
  }
];

const studentBenefits = [
  { 
    title: 'Flexible Schedules', 
    desc: 'Sessions are designed to complement university timetables, with recorded labs and weekend intensives.' 
  },
  { 
    title: 'Internship Pipeline', 
    desc: 'Top students are fast-tracked into paid internships at Agnoz or our network of partner startups.' 
  },
  { 
    title: 'Real-World Stack', 
    desc: 'Stop practicing with "todo-lists". Build production tools using the exact stack we use for clients.' 
  }
];

const Learning = () => {
  return (
    <PageTransition>
      <SEO 
        title="Learning Academy" 
        description="Agnoz Academy offers industrial-grade specialization programs in AI, Full-Stack Mastery, Product Design, and Enterprise Ops to bridge the gap between graduation and industry."
        keywords="Agnoz Academy, learning software development, AI courses, full stack training, design systems"
      />
      <div className={styles.learningPage}>
        <div className={styles.container}>
          {/* ── Hero Section ── */}
          <section className={styles.hero}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="section-label">Education for the Future</div>
              <h1 className={styles.title}>
                Bridge the Gap Between <br />
                <span className={styles.highlight}>Graduation & Industry.</span>
              </h1>
              <p className={styles.lead}>
                Agnoz Academy is not a school. It's a technical refinery where ambition 
                meets application. We arm the next generation with high-impact skills 
                decoded from professional realities.
              </p>
              
              <div className={styles.heroActions}>
                <button className="cta-button primary">Explore Tracks</button>
                <div className={styles.statsRow}>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>15+</span>
                    <span className={styles.statLabel}>Active Projects</span>
                  </div>
                  <div className={styles.statDivider} />
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>500+</span>
                    <span className={styles.statLabel}>Hours Mentored</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ── Process Section ── */}
          <section className={styles.processSection}>
            <div className={styles.processGrid}>
              {learningSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={styles.processCard}
                >
                  <div className={styles.stepIconWrapper}>{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Special Tracks Section ── */}
          <section className={styles.tracksSection}>
            <div className={styles.sectionHeader}>
              <h2 className="section-title">Specialization <span className="accent">Programs</span></h2>
              <p className={styles.sectionLead}>Industrial-grade curriculums designed to make you a specialist, not a generalist.</p>
            </div>

            <div className={styles.grid}>
              {tracks.map((track, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={styles.card}
                >
                  {track.tag && <span className={styles.trackTag}>{track.tag}</span>}
                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox}>{track.icon}</div>
                    <span className={styles.levelBadge}>{track.level}</span>
                  </div>
                  <h3>{track.title}</h3>
                  <p className={styles.trackDesc}>{track.desc}</p>
                  <div className={styles.moduleList}>
                    {track.modules.map((mod, i) => (
                      <div key={i} className={styles.moduleItem}>
                        <ArrowRight size={14} className={styles.arrowIcon} />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Gen-Z Initiative Section ── */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.genZSection}
          >
            <div className={styles.genZContent}>
              <div className="section-label">Student Catalyst</div>
              <h2 className={styles.genZTitle}>
                The <span className="accent">Gen-Z</span> Fast-Track
              </h2>
              <p className={styles.mainPara}>
                Traditional degrees provide the foundation, but Agnoz provides the fire. 
                Our dedicated program for college students ensures you enter the workforce 
                not just as a graduate, but as a seasoned specialist.
              </p>
              
              <div className={styles.benefitGrid}>
                {studentBenefits.map((b, i) => (
                  <div key={i} className={styles.benefitCard}>
                    <div className={styles.checkIcon}><CheckCircle size={18} /></div>
                    <div>
                      <h5>{b.title}</h5>
                      <p>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={styles.ctaBox}>
                <button className="cta-button primary">Launch Your Career</button>
                <p className={styles.smallNote}>Cohort 04 Admissions Open • Limited Seats</p>
              </div>
            </div>

            <div className={styles.imageArea}>
              <div className={styles.blob} />
              <div className={styles.imageOverlay} />
              <div className={styles.glassInfo}>
                <Sparkles size={40} className={styles.sparkleIcon} />
                <h3>100% Career Success</h3>
                <p>95% of our fellows land premium roles before graduation.</p>
                <div className={styles.logoCloud}>
                   <div className={styles.miniLogo}>F</div>
                   <div className={styles.miniLogo}>A</div>
                   <div className={styles.miniLogo}>G</div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── Offline Learning Partnership ── */}
          <section className={styles.partnershipSection}>
            <div className={styles.partnershipCard}>
              <div className={styles.partnershipContent}>
                <div className="section-label">High-Impact Presence</div>
                <h2>Exclusive <span className="accent">Offline Hub</span></h2>
                <p>
                  We are proud to partner with <strong>Jain Computers</strong>. 
                  This collaboration brings high-end digital infrastructure to a localized 
                  hands-on environment, providing students with full hardware support 
                  and 1-on-1 on-site mentorship.
                </p>
                <div className={styles.hubDetails}>
                  <div className={styles.partnerBadge}>Official Hub: Jain Computers</div>
                  <div className={styles.partnerAddress}>
                     Usha Nagar Ext., Indore, MP
                  </div>
                </div>
              </div>
              <div className={styles.partnershipVisual}>
                 <div className={styles.pulseContainer}>
                   <Users size={48} className={styles.partnerIcon} />
                   <div className={styles.pulse} />
                   <div className={`${styles.pulse} ${styles.pulseDelay}`} />
                 </div>
              </div>
            </div>
          </section>

          {/* ── Certification Section ── */}
          <section className={styles.certSection}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.certContent}
            >
              <div className={styles.certIcon}><Award size={64} /></div>
              <h2>Verified Industrial Badge</h2>
              <p>
                The Agnoz Digital Badge is more than a certificate. It is a proof-of-work 
                attestation representing dozens of verified code reviews, production 
                deployments, and real-world project contributions.
              </p>
              <div className={styles.badgePreview}>
                <div className={styles.badgeLine} />
                <span>Authorized Skill Token</span>
                <div className={styles.badgeLine} />
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Learning;

