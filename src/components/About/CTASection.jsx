import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiCalendar, FiMapPin } from 'react-icons/fi';
import styles from './CTASection.module.css';
import ClassSession from "../../assets/images/gallery/ClassSession.jpg";

const CTASection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className={styles.ctaSection}>
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className={styles.ctaWrapper}
        >
          <div className={styles.contentColumn}>
            <h2>Join Our Learning Community</h2>
            <p>Experience quality education that nurtures both academic excellence and personal growth. Visit us to learn more about our programs and community.</p>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <FiCalendar className={styles.infoIcon} />
                <div>
                  <h4>Visit Our School</h4>
                  <p>Monday - Friday, 8:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <FiMapPin className={styles.infoIcon} />
                <div>
                  <h4>Location</h4>
                  <p>Dandora, Kenya</p>
                </div>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <motion.a 
                href="/contact"
                className={styles.primaryButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Visit
                <FiArrowRight className={styles.buttonIcon} />
              </motion.a>
              
              <motion.a 
                href="/programs"
                className={styles.secondaryButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Programs
              </motion.a>
            </div>
          </div>

          <div className={styles.imageColumn}>
            <img 
              src= {ClassSession}
              alt="Students in classroom" 
              className={styles.ctaImage}
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;