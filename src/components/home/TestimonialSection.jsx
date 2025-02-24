import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import styles from './TestimonialSection.module.css';
import Hero1 from '../../assets/images/hero/Hero1.jpg';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials = [
    {
      text: "Attending Alliance Senior Academy was a turning point in my life. Coming from a background where things were not always easy at home, the opportunity to study there meant everything. The school provided me with not just an education but a strong foundation of resilience, discipline, and ambition. Those years shaped my mindset, pushing me to strive for excellence despite challenges.",
      name: "Hassan Faruq",
      position: "Software Developer"
    },
    {
      text: "At Alliance Senior Academy, we strive to create an environment where students discover their potential, build confidence, and develop the skills to navigate life's challenges. Seeing them grow into impactful individuals is the greatest reward of all.",
      name: "Edwin Nyamwega",
      position: "Principal"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonialSection} ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={styles.testimonialContent}
        >
          <Row className="align-items-center">
            <Col lg={6}>
              <div className={styles.imageSection}>
                <img 
                  src={Hero1}
                  alt="Volunteers working together"
                  className={styles.mainImage}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.testimonialWrapper}>
                <div className={styles.headerSection}>
                  <span className={styles.subtitle}>Our Community</span>
                  <h2 className={styles.title}>Impact Stories</h2>
                </div>
                
                <motion.div 
                  className={styles.testimonialCard}
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaQuoteRight className={styles.quoteIcon} />
                  <p className={styles.testimonialText}>
                    {testimonials[currentIndex].text}
                  </p>
                  
                  <div className={styles.author}>
                    <div className={styles.authorInfo}>
                      <h4>{testimonials[currentIndex].name}</h4>
                      <p>{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </motion.div>
                
                <div className={styles.navigation}>
                  <button 
                    onClick={prevTestimonial}
                    className={styles.navButton}
                    aria-label="Previous testimonial"
                  >
                    <FaChevronLeft />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className={styles.navButton}
                    aria-label="Next testimonial"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
