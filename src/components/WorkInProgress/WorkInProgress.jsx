
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaTools, FaHome, FaClock } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import styles from "./WorkInProgress.module.css";

const WorkInProgress = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className={styles.pageWrapper}>
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className={styles.contentWrapper}
        >
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <motion.div variants={itemVariants} className={styles.iconWrapper}>
                <FaTools className={styles.toolIcon} />
              </motion.div>

              <motion.h1 variants={itemVariants} className={styles.title}>
                Work in Progress
              </motion.h1>

              <motion.div variants={itemVariants} className={styles.divider}></motion.div>

              <motion.p variants={itemVariants} className={styles.description}>
                We are currently updating this page. Our team is working hard to bring
                you an exceptional experience that aligns with our commitment to excellence.
              </motion.p>

              <Row className="justify-content-center mt-5">
                <Col xs={12} md={6} lg={4} className={styles.cardColumn}>
                  <motion.div variants={itemVariants} className={styles.infoCard}>
                    <FaClock className={styles.cardIcon} />
                    <h3>Coming Soon</h3>
                    <p>Check back for updates</p>
                  </motion.div>
                </Col>
                <Col xs={12} md={6} lg={4} className={styles.cardColumn}>
                  <motion.a 
                    href="/"
                    variants={itemVariants} 
                    className={styles.infoCard}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaHome className={styles.cardIcon} />
                    <h3>Return Home</h3>
                    <p>Explore other sections</p>
                  </motion.a>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default WorkInProgress;