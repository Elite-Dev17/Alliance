import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBook, FaHandHoldingHeart, FaLightbulb } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import styles from './Vision.module.css';

const VisionSection = () => {
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

  const visionPoints = [
    {
      icon: FaBook,
      title: "Academic Excellence",
      description: "Providing quality education that builds a strong foundation for success."
    },
    {
      icon: FaHandHoldingHeart,
      title: "Mentorship & Support",
      description: "Guiding students through education, character development, and leadership."
    },
    {
      icon: FaLightbulb,
      title: "Innovation & Growth",
      description: "Encouraging critical thinking, creativity, and a passion for lifelong learning."
    }
  ];

  return (
    <section className={styles.visionSection} ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={styles.visionContent}
        >
          <motion.div variants={titleVariants} className={styles.headingWrapper}>
            <motion.span className={styles.subheading}>
              OUR VISION
            </motion.span>
            <motion.h2 className={styles.mainHeading}>
              Transforming Lives Through Education
            </motion.h2>
            <motion.div 
              className={styles.separator}
              animate={inView ? { width: "80px" } : { width: "0px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <motion.p variants={titleVariants} className={styles.visionText}>
                At Alliance Senior Academy, we believe that education is the key to unlocking 
                potential, shaping futures, and empowering students to rise above challenges.
              </motion.p>
            </Col>
          </Row>

          <motion.div 
            variants={containerVariants}
            className={styles.visionPointsContainer}
          >
            <Row>
              {visionPoints.map((point, index) => (
                <Col xs={12} md={4} key={index} className={styles.visionCol}>
                  <motion.div
                    variants={titleVariants}
                    className={styles.visionPoint}
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
                      <point.icon className={styles.icon} />
                    </motion.div>
                    <motion.h3 className={styles.visionTitle}>
                      {point.title}
                    </motion.h3>
                    <motion.p className={styles.visionDescription}>
                      {point.description}
                    </motion.p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default VisionSection;
