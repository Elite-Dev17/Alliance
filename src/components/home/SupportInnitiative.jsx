import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaHandsHelping, FaHeart, FaShareAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import styles from "./SupportInitiative.module.css";
import FemaleEmpowerment from "../../assets/images/gallery/FemaleEmpowerment.jpg";


const SupportInitiative = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className={styles.support} ref={ref}>
      <Container>
        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6} className={styles.imageContainer}>
            <motion.img
              src={FemaleEmpowerment}
              alt="Alliance Initiative"
              className={styles.mainImage}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            />
          </Col>

          {/* Text Section */}
          <Col md={6} className={styles.textContent}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <h2>Join Us in Making a Difference</h2>
              <p>
                At Alliance, we believe in empowering communities through education,
                mentorship, and outreach programs. Every effort counts towards shaping
                a future filled with opportunities and growth.
              </p>

              <p>
                Your support can help us expand our impact, reach more individuals,
                and foster a culture of knowledge and collaboration. A donation of just <strong>$50 </strong>
                can provide essential learning materials, essential items such as sanitary pads and education for a student in need.
                Together, we can inspire change and create lasting transformations.
              </p>

              {/* Support Options */}
              <div className={styles.supportOptions}>
                <motion.div whileHover={{ scale: 1.1 }} className={styles.optionBox}>
                  <FaHandsHelping className={styles.icon} />
                  <p>Volunteer with Us</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} className={styles.optionBox}>
                  <FaHeart className={styles.icon} />
                  <p>Contribute Today</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.1 }} className={styles.optionBox}>
                  <FaShareAlt className={styles.icon} />
                  <p>Share Our Vision</p>
                </motion.div>
              </div>

              {/* Call to Actions */}
              <div className={styles.buttons}>
                <a href="donate.html" className={styles.btnPrimary}>
                  Donate Now
                </a>
                <a href="volunteer.html" className={styles.btnSecondary}>
                  Get Involved
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SupportInitiative;
