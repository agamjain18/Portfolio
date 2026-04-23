import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="/image/logo.png" alt="AGNOZ" height="32" className={styles.logo} />
            <p className={styles.brandDesc}>
              Shaping the next generation of digital excellence through AI-driven development.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}><Github size={20} /></a>
              <a href="#" className={styles.socialIcon}><Twitter size={20} /></a>
              <a href="#" className={styles.socialIcon}><Linkedin size={20} /></a>
              <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
            </div>
          </div>

          <div className={styles.nav}>
            <div className={styles.navCol}>
              <h4>Navigation</h4>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/services">Our Services</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </div>
            <div className={styles.navCol}>
              <h4>Resources</h4>
              <NavLink to="/learning">Academy</NavLink>
              <NavLink to="/hiring">Careers</NavLink>
              <NavLink to="/contact">Support</NavLink>
            </div>
          </div>

          <div className={styles.newsletter}>
            <h4>Newsletter</h4>
            <p>Subscribe to get the latest tech insights.</p>
            <div className={styles.inputBox}>
              <input type="email" placeholder="Email address" />
              <button className={styles.sendBtn}>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Agnoz Technologies. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
