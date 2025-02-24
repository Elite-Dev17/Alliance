
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaHeadset, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import styles from './ContactInfo.module.css'; // Importing CSS module

const ContactInfo = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={styles.contactSection}>
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className={styles.sectionTitle}
        >
          <p className={styles.getInTouch}>Get in Touch</p>
          <h2 className={styles.mainTitle}>Send Your Message</h2>
          <div className={styles.underline} />
        </motion.div>

        <Row className="justify-content-center">
          <Col md={4} className="mb-8 md:mb-0">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeIn}
              className={styles.contactCard}
            >
              <div className="flex justify-center mb-6">
                <FaHeadset className={styles.orangeIcon} />
              </div>
              <h3 className={styles.cardTitle}>Phone Number</h3>
              <p className={styles.contactInfo}>0710 128 781</p>
              <p className={styles.contactInfo}>0710 128 781</p>
            </motion.div>
          </Col>

          <Col md={4} className="mb-8 md:mb-0">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeIn}
              className={`${styles.contactCard} ${styles.orangeCard}`}
            >
              <div className="flex justify-center mb-6">
                <FaMapMarkerAlt className={styles.whiteIcon} />
              </div>
              <h3 className={`${styles.cardTitle} ${styles.whiteText}`}>Our Location</h3>
              <p className={styles.whiteText}>
              Dandora, Nairobi, Kenya
              </p>
            </motion.div>
          </Col>

          <Col md={4}>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.6 }}
              variants={fadeIn}
              className={styles.contactCard}
            >
              <div className="flex justify-center mb-6">
                <FaEnvelope className={styles.orangeIcon} />
              </div>
              <h3 className={styles.cardTitle}>Email Address</h3>
              <p className={styles.contactInfo}>info@alliance.com</p>
              
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInfo;
