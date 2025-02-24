import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandHoldingHeart, FaGraduationCap } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import styles from './MissionStatement.module.css';

const MissionSection = () => {
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

  const focusAreas = [
    {
      icon: FaLightbulb,
      title: "Expanding Opportunities",
      description: "Ensuring every learner, regardless of background, has access to quality education."
    },
    {
      icon: FaHandHoldingHeart,
      title: "Unwavering Support",
      description: "Providing mentorship, resources, and emotional support to help students thrive."
    },
    {
      icon: FaGraduationCap,
      title: "A Brighter Future",
      description: "Equipping students with knowledge and skills to excel in academics and life."
    }
  ];

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
              OUR MISSION
            </motion.span>
            <motion.h2 className={styles.mainHeading}>
              Breaking Barriers, Changing Lives
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
                At Alliance, we are committed to making education accessible to underprivileged learners. Through scholarships, mentorship, and holistic support, we empower students to achieve their full potential.
              </motion.p>
            </Col>
          </Row>

          <motion.div 
            variants={containerVariants}
            className={styles.focusAreasContainer}
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={titleVariants}
                className={styles.focusArea}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <motion.div 
                  className={styles.iconWrapper}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <area.icon className={styles.icon} />
                </motion.div>
                <motion.h3 className={styles.focusTitle}>
                  {area.title}
                </motion.h3>
                <motion.p className={styles.focusDescription}>
                  {area.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default MissionSection;
