import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaHandshake, FaHeart, FaShare, FaSchool } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import styles from './Support.module.css';

const SupportSection = () => {
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

  const cardVariants = {
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

  const supportPoints = [
    {
      icon: FaHandshake,
      title: "Paying Teachers",
      description: "Ensures quality education continues."
    },
    {
      icon: FaHeart,
      title: "Providing Meals",
      description: "No child learns on an empty stomach."
    },
    {
      icon: FaShare,
      title: "Supplying Learning Materials",
      description: "Books and essentials for effective learning."
    },
    {
      icon: FaSchool,
      title: "Building a Permanent School",
      description: "A safe, stable learning environment."
    }
  ];

  return (
    <section className={styles.supportSection} ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={styles.supportContent}
        >
          <motion.div variants={cardVariants} className={styles.headingWrapper}>
            <motion.h2 className={styles.mainHeading}>
              Why Your Support Matters
            </motion.h2>
            <motion.p className={styles.mainDescription}>
              Many children in our community lack access to quality education, food, and basic
              learning materials. Your support can make a real difference in their lives by
              addressing these critical needs.
            </motion.p>
          </motion.div>
          
          <Row className={styles.cardsContainer}>
            {supportPoints.map((point, index) => (
              <Col xs={12} sm={6} lg={3} key={index} className={styles.cardCol}>
                <motion.div
                  variants={cardVariants}
                  className={styles.supportCard}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <motion.div
                    className={styles.iconWrapper}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <point.icon className={styles.icon} />
                  </motion.div>
                  <h3 className={styles.cardTitle}>
                    {point.title}
                  </h3>
                  <p className={styles.cardDescription}>
                    {point.description}
                  </p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default SupportSection;