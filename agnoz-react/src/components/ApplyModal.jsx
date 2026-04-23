import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Send, CheckCircle2 } from 'lucide-react';
import styles from './ApplyModal.module.css';

const ApplyModal = ({ isOpen, onClose, jobTitle }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.agnoz.in/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          jobTitle: jobTitle,
          resume: fileName // In a real production app, use FormData for actual file uploads
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFileName('');
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            portfolio: '',
            message: ''
          });
        }, 3000);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Apply error:", error);
      alert("Error connecting to server.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay}>
          <motion.div 
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button className={styles.closeBtn} onClick={onClose}>
              <X size={24} />
            </button>

            {isSubmitted ? (
              <div className={styles.successState}>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10 }}
                >
                  <CheckCircle2 size={80} className={styles.successIcon} />
                </motion.div>
                <h2>Application Sent!</h2>
                <p>Thanks for applying to the <strong>{jobTitle}</strong> position. Our team will review your profile and get back to you soon.</p>
              </div>
            ) : (
              <div className={styles.modalContent}>
                <div className={styles.header}>
                  <div className="section-label">Apply for Position</div>
                  <h2>{jobTitle}</h2>
                  <p>Tell us a bit about yourself and why you're a fit for Agnoz.</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required 
                      placeholder="John Doe" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required 
                        placeholder="+91 98765 43210" 
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Portfolio / LinkedIn URL</label>
                    <input 
                      type="url" 
                      name="portfolio"
                      placeholder="https://yourportfolio.com" 
                      value={formData.portfolio}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Upload Resume (PDF)</label>
                    <div className={styles.fileUpload}>
                      <input 
                        type="file" 
                        id="resume" 
                        accept=".pdf,.doc,.docx" 
                        onChange={handleFileChange}
                        className={styles.fileInput}
                        required
                      />
                      <label htmlFor="resume" className={styles.fileLabel}>
                        <Upload size={20} />
                        <span>{fileName || 'Choose a file...'}</span>
                      </label>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Message / Cover Letter</label>
                    <textarea 
                      name="message"
                      rows="4" 
                      placeholder="Briefly describe your experience..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Submit Application <Send size={18} />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;
