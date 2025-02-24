import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <footer className={styles.footer} ref={ref}>
      <Container>
        <Row className="gy-4">
          <Col lg={3} md={6}>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h4 className={styles.title}>Alliance Senior Academy</h4>
              <p className={styles.motto}>"Labour for Success"</p>
              <div className={styles.social}>
                <a href="#" className={styles.socialLink}><FiFacebook /></a>
                <a href="#" className={styles.socialLink}><FiInstagram /></a>
                <a href="#" className={styles.socialLink}><FiTwitter /></a>
              </div>
            </motion.div>
          </Col>

          <Col lg={3} md={6}>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h5 className={styles.subtitle}>Programs</h5>
              <ul className={styles.linksList}>
                <li><Link to="/programs">Academic Excellence</Link></li>
                <li><Link to="/programs">Sports Development</Link></li>
                <li><Link to="/programs">Creative Arts</Link></li>
                <li><Link to="/programs">Leadership Training</Link></li>
              </ul>
            </motion.div>
          </Col>

          <Col lg={3} md={6}>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h5 className={styles.subtitle}>Quick Links</h5>
              <ul className={styles.linksList}>
                <li><Link to="/gallery">Photo Gallery</Link></li>
                <li><Link to="/contact">Support Us</Link></li>
                <li><Link to="/programs">Upcoming Events</Link></li>
                <li><Link to="/contact">Admissions</Link></li>
              </ul>
            </motion.div>
          </Col>

          <Col lg={3} md={6}>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h5 className={styles.subtitle}>Newsletter</h5>
              <p className={styles.newsletterText}>Stay updated with our latest news and events</p>
              <Form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.newsletterInput}
                />
                <Button type="submit" className={styles.newsletterButton}>
                  <FiArrowRight />
                </Button>
              </Form>
              <div className={styles.contactInfo}>
                <p><FiPhone className={styles.icon} /> +254 710128781</p>
                <p><FiMapPin className={styles.icon} /> Dandora, Nairobi, Kenya</p>
              </div>
            </motion.div>
          </Col>
        </Row>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Alliance Senior Academy. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;