import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUsers, FiBookOpen, FiHeart, FiAward } from 'react-icons/fi';
import styles from './ImpactSection.module.css';

const ImpactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const impactMetrics = [
    {
      icon: <FiUsers className={styles.icon} />,
      title: "500+",
      label: "Students Supported",
      description: "Providing education to learners from underprivileged backgrounds."
    },
    {
      icon: <FiBookOpen className={styles.icon} />,
      title: "Essential Resources",
      label: "Learning Materials",
      description: "Equipping students with books and study guides for success."
    },
    {
      icon: <FiHeart className={styles.icon} />,
      title: "Daily Meal",
      label: "Nutrition Support",
      description: "Ensuring students receive a healthy meal to aid concentration."
    },
    {
      icon: <FiAward className={styles.icon} />,
      title: "Future Ready",
      label: "Opportunities Created",
      description: "Empowering students with knowledge for a brighter future."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.impactSection}>
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className={styles.sectionHeader}>
            <motion.h2 variants={itemVariants}>Our Impact</motion.h2>
            <motion.p variants={itemVariants} className={styles.subtitle}>
              Breaking barriers to education through meaningful support.
            </motion.p>
          </div>
          
          <Row className="g-4">
            {impactMetrics.map((metric, index) => (
              <Col key={index} md={6} lg={3}>
                <motion.div
                  className={`${styles.impactCard} ${metric.number ? styles.numericCard : ''}`}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className={styles.iconWrapper}>{metric.icon}</div>
                  <div className={styles.metricContent}>
                    {metric.number ? (
                      <>
                        <h3 className={styles.metricNumber}>{metric.title}</h3>
                        <h4 className={styles.metricLabel}>{metric.label}</h4>
                      </>
                    ) : (
                      <>
                        <h3 className={styles.metricTitle}>{metric.title}</h3>
                        <h4 className={styles.metricLabel}>{metric.label}</h4>
                      </>
                    )}
                    <p className={styles.metricDescription}>{metric.description}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default ImpactSection;