import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import ApplyModal from '../components/ApplyModal';
import styles from './Hiring.module.css';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Briefcase, Zap, Globe, Users, 
  MapPin, Clock, ArrowRight, Star,
  CheckCircle2, Coffee, ShieldCheck, Heart
} from 'lucide-react';

const jobs = [
  { 
    title: 'Frontend Architect', 
    type: 'Full-time', 
    location: 'Remote / Indore',
    category: 'Engineering',
    tags: ['React', 'Next.js', 'Framer Motion']
  },
  { 
    title: 'AI Solutions Lead', 
    type: 'Contract', 
    location: 'Remote',
    category: 'AI/ML',
    tags: ['Python', 'OpenAI', 'PyTorch']
  },
  { 
    title: 'Senior Product Designer', 
    type: 'Full-time', 
    location: 'Indore, MP',
    category: 'Design',
    tags: ['Figma', 'Prototyping', 'UX Research']
  },
  { 
    title: 'Growth Operations Manager', 
    type: 'Full-time', 
    location: 'Indore, MP',
    category: 'Operations',
    tags: ['Strategy', 'Automation', 'CRM']
  },
];

const perks = [
  { icon: <Zap size={24} />, title: 'Fast Evolution', desc: 'Work with the latest AI stacks and modern frameworks from day one.' },
  { icon: <Globe size={24} />, title: 'Global Impact', desc: 'Our products serve clients across Europe, US, and Southeast Asia.' },
  { icon: <Heart size={24} />, title: 'Health & Wellness', desc: 'Comprehensive medical insurance and mental health support for all.' },
  { icon: <Coffee size={24} />, title: 'Modern Workspace', desc: 'High-end tech equipment and a creative environment that inspires.' },
];

const Hiring = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const openApply = (title) => {
    setSelectedJob(title);
    setModalOpen(true);
  };

  return (
    <PageTransition>
      <SEO 
        title="Careers" 
        description="Join the Agnoz collective. We are looking for builders, thinkers, and AI enthusiasts to help us shape the future of technology."
        keywords="careers at Agnoz, tech jobs, frontend architect, AI solutions lead, product designer jobs"
      />
      <div className={styles.hiringPage}>
        <div className={styles.container}>
          {/* ── Hero Section ── */}
          <section className={styles.hero}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="section-label">Careers at Agnoz</div>
              <h1 className={styles.title}>
                Build the <span className={styles.highlight}>Future of Tech.</span>
              </h1>
              <p className={styles.lead}>
                We are a collective of builders, thinkers, and AI enthusiasts. 
                At Agnoz, we don't just ship code—we craft digital experiences that 
                shape how humans interact with technology.
              </p>
            </motion.div>
          </section>

          {/* ── Perks Section ── */}
          <section className={styles.perksSection}>
            <div className={styles.perksGrid}>
              {perks.map((perk, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.perkCard}
                >
                  <div className={styles.perkIcon}>{perk.icon}</div>
                  <h3>{perk.title}</h3>
                  <p>{perk.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Open Positions ── */}
          <section className={styles.jobsSection}>
            <div className={styles.sectionHeader}>
              <h2 className="section-title">Open <span className="accent">Positions</span></h2>
              <p className={styles.sectionLead}>Find the role that matches your ambition and expertise.</p>
            </div>

            <div className={styles.jobsList}>
              {jobs.map((job, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.jobRow}
                >
                  <div className={styles.jobInfo}>
                    <div className={styles.jobHeader}>
                      <span className={styles.categoryBadge}>{job.category}</span>
                    </div>
                    <h3>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span className={styles.metaItem}><MapPin size={14} /> {job.location}</span>
                      <span className={styles.metaItem}><Clock size={14} /> {job.type}</span>
                    </div>
                    <div className={styles.techStack}>
                      {job.tags.map((tag, i) => (
                        <span key={i} className={styles.techTag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.jobAction}>
                    <button 
                      className={styles.applyBtn}
                      onClick={() => openApply(job.title)}
                    >
                       Apply Now <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Hiring Process ── */}
          <section className={styles.processSection}>
            <div className={styles.processCard}>
              <div className={styles.processContent}>
                <div className="section-label">The Workflow</div>
                <h2>Our <span className="accent">Hiring Process</span></h2>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepNum}>01</div>
                    <div className={styles.stepText}>
                      <h4>Initial Screen</h4>
                      <p>A short intro call to align on values and vision.</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNum}>02</div>
                    <div className={styles.stepText}>
                      <h4>Technical Lab</h4>
                      <p>A hands-on challenge to showcase your craft.</p>
                    </div>
                  </div>
                  <div className={styles.step}>
                    <div className={styles.stepNum}>03</div>
                    <div className={styles.stepText}>
                      <h4>Deep Dive</h4>
                      <p>Meet the core team and explore project depth.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.processVisual}>
                 <div className={styles.floatingBadges}>
                    <div className={styles.floatBadge}><ShieldCheck size={20} /> Integrity</div>
                    <div className={styles.floatBadge}><Star size={20} /> Excellence</div>
                    <div className={styles.floatBadge}><Users size={20} /> Empathy</div>
                 </div>
              </div>
            </div>
          </section>

          {/* ── Bottom CTA ── */}
          <section className={styles.bottomSection}>
            <div className={styles.ctaBox}>
               <Users size={64} className={styles.ctaIcon} />
               <h2>Don't see a perfect match?</h2>
               <p>
                 We are always on the lookout for exceptional talent. 
                 Send us your portfolio anyway, and let's start a conversation.
               </p>
               <button 
                 className="cta-button primary"
                 onClick={() => openApply('General Application')}
               >
                 Drop Your CV
               </button>
            </div>
          </section>
        </div>
        
        <ApplyModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          jobTitle={selectedJob} 
        />
      </div>
    </PageTransition>
  );
};

export default Hiring;
