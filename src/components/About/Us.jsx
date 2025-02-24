
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';
import styles from './Us.module.css';

const MissionVisionSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const coreValues = [
    'Discipline',
    'Professionalism',
    'Confidentiality',
    'Integrity',
    'Courtesy',
    'Teamwork',
    'Fidelity to law',
    'Efficiency'
  ];

  return (
    <section className={styles.section}>
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className={styles.container}
        >
          <div className={styles.sectionHeader}>
            <h2>Our Mission, Vision & Core Values</h2>
            <div className={styles.underline}></div>
          </div>
          
          <Row className="g-4 mt-4">
            <Col lg={4}>
              <motion.div variants={itemVariants} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <FiTarget />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To provide quality education that meets the spiritual, academic, physical and
                  social economic needs of learners and enable them to attain their highest academic
                  potential.
                </p>
              </motion.div>
            </Col>

            <Col lg={4}>
              <motion.div variants={itemVariants} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <FiEye />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be an honest, holistic development center for learners.
                </p>
                <div className={styles.motto}>
                  <span>Labour for Success</span>
                  
                </div>
              </motion.div>
            </Col>

            <Col lg={4}>
              <motion.div variants={itemVariants} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <FiHeart />
                </div>
                <h3>Core Values</h3>
                <div className={styles.valuesGrid}>
                  {coreValues.map((value, index) => (
                    <motion.span
                      key={index}
                      variants={itemVariants}
                      className={styles.valueTag}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {value}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default MissionVisionSection;