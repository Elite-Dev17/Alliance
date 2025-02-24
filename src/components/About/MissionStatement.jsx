import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './MissionStatement.module.css';

const Intro = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.missionSection} ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={styles.missionContent}
        >
          <motion.div variants={titleVariants} className={styles.headingWrapper}>
            <motion.span className={styles.subheading}>
              ABOUT US
            </motion.span>
            <motion.h2 className={styles.mainHeading}>
            A community-driven institution shaping the future of learners
            </motion.h2>
            <motion.div 
              className={styles.separator}
              animate={inView ? { width: "80px" } : { width: "0px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <motion.p variants={titleVariants} className={styles.missionText}>
              Alliance Senior Academy is a community-based school in Dandora, Kenya, committed to empowering learners from underprivileged backgrounds. <br /> <br /> We strive to provide quality education, nourishment, and emotional support to ensure their holistic development. Beyond academics, we offer mentorship, counseling, and guidance to help young people navigate challenges such as social hardships.
              </motion.p>
            </Col>
          </Row>

          
        
        </motion.div>
      </Container>
    </section>
  );
};

export default Intro;
