import React from 'react';
import PageTransition from '../components/PageTransition';
import styles from './Contact.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from '../components/SEO';


const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.agnoz.in/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to connect to the server. Please check your internet.");
    }
  };

  const handleCloseModal = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <PageTransition>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Agnoz for your next digital project. Our team is ready to collaborate and build your standout web presence."
        keywords="contact Agnoz, digital project inquiry, hire developers, web design contact"
      />
      <div className={styles.contactPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Get In <span className={styles.highlight}>Touch</span></h1>
            <p>Let’s collaborate to create a standout web presence that propels your business forward.</p>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <Mail size={24} className={styles.icon} />
                <div>
                  <h4>Email</h4>
                  <p>hello@agnoz.in</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Phone size={24} className={styles.icon} />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 89890 65870</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <MapPin size={24} className={styles.icon} />
                <div>
                  <h4>Location</h4>
                  <p>Indore, MP, India</p>
                </div>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <select 
                  className={styles.select} 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Service</option>
                  <option value="web">Web Design & Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="branding">Brand & Graphic Design</option>
                  <option value="cloud">Domain & Cloud Hosting</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="marketing">Digital Marketing & SEO</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {submitted && (
            <div className={styles.modalOverlay}>
              <motion.div 
                className={styles.modal}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
              >
                <div className={styles.modalIcon}>
                  <Send size={40} />
                </div>
                <h2>Message Sent!</h2>
                <p>Thank you for reaching out. Our team will be reaching within 48 hours to discuss your project.</p>
                <button 
                  className={styles.closeBtn}
                  onClick={handleCloseModal}
                >
                  Got it
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Contact;
