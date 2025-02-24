import { Link } from 'react-router-dom'; // Import Link
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import styles from './HeroSection.module.css';
import Hero1 from '../../assets/images/hero/Hero1.jpg';
import GroupPhoto from '../../assets/images/gallery/GroupPhoto.jpg'
import Empowerment2 from "../../assets/images/gallery/Empowerment2.jpg"

const HeroSection = () => {
  const carouselItems = [
    {
      image: Hero1,
      smallText: 'Mentorship & Growth',
      title: 'RISING ABOVE CHALLENGES.',
      description: 'Helping students rise above challenges through knowledge and mentorship'
    },
    {
      image: GroupPhoto,
      smallText: 'Opportunity Through Learning',
      title: 'KNOWLEDGE MEETS OPPORTUNITY.',
      description: 'Where knowledge meets opportunity—changing lives through learning'
    },
    {
      image: Empowerment2,
      smallText: 'Unlocking Potential',
      title: 'INSPIRE, EMPOWER, ACHIEVE.',
      description: 'Shaping future leaders with knowledge, confidence, and purpose'
    }
    
  ];

  const fadeInUpVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <section className={styles.heroSection}>
      <Carousel 
        fade 
        interval={3000} 
        className={styles.carousel}
        prevIcon={<BsArrowLeft className={styles.carouselControl} />}
        nextIcon={<BsArrowRight className={styles.carouselControl} />}
      >
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index} className={styles.carouselItem}>
            <div className={styles.carouselImageContainer}>
              <img className={styles.carouselImage} src={item.image} alt={item.title} />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.carouselContent}>
              <motion.div
                className={styles.contentWrapper}
                variants={fadeInUpVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.p 
                  className={styles.smallText}
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.6 }}
                >
                  {item.smallText}
                </motion.p>
                <motion.h1 
                  className={styles.mainTitle}
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {item.title}
                </motion.h1>
                <motion.p 
                  className={styles.description}
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {item.description}
                </motion.p>
                <motion.div 
                  className={styles.buttonContainer}
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Link to="/contact">
                    <motion.button 
                      className={styles.donateButton}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      DONATE NOW <span>❤️</span>
                    </motion.button>
                  </Link>
                  <Link to="/contact">
                    <motion.button 
                      className={styles.contactButton}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      CONTACT US <span>→</span>
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
