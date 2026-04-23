import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const links = [
  { name: 'Home',      path: '/' },
  { name: 'About',     path: '/about' },
  { name: 'Services',  path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Learning',  path: '/learning' },
  { name: 'Blogs',     path: '/blogs' },
  { name: 'Hiring',    path: '/hiring' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.solid : ''}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <img src="/image/logo.png" alt="AGNOZ" height="28" />
        </NavLink>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.name}>
              <NavLink
                to={l.path}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
                end={l.path === '/'}
              >
                {l.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className={styles.right}>
          <NavLink to="/contact" className={styles.cta}>Get a Quote</NavLink>
          <button className={styles.burger} onClick={() => setOpen((p) => !p)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className={styles.drawer}
          >
            {[...links, { name: 'Contact', path: '/contact' }].map((l) => (
              <NavLink
                key={l.name}
                to={l.path}
                className={({ isActive }) =>
                  `${styles.dLink} ${isActive ? styles.dActive : ''}`
                }
                onClick={() => setOpen(false)}
                end={l.path === '/'}
              >
                {l.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
