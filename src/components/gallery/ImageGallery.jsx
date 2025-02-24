import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiArrowLeft, FiArrowRight, FiMaximize2, FiImage } from 'react-icons/fi';
import styles from './ImageGallery.module.css';
import Hero1 from "../../assets/images/hero/Hero1.jpg";
import Assembly from "../../assets/images/gallery/Assembly.jpg"
import Achievement from "../../assets/images/gallery/Achievement.jpg"
import GroupPhoto from "../../assets/images/gallery/GroupPhoto.jpg"
import GroupPhoto2 from "../../assets/images/gallery/GroupPhoto2.jpg"
import GroupPhoto3 from "../../assets/images/gallery/GroupPhoto3.jpg"
import ClassSession from "../../assets/images/gallery/ClassSession.jpg"
import Discussion from "../../assets/images/gallery/Discussion.jpg"
import Gathering from "../../assets/images/gallery/Gathering.jpg"
import Empowerment2 from "../../assets/images/gallery/Empowerment2.jpg"
import Empowerment3 from "../../assets/images/gallery/Empowerment3.jpg"
import Empowerment6 from "../../assets/images/gallery/Empowerment6.jpg"
import FemaleEmpowerment from "../../assets/images/gallery/FemaleEmpowerment.jpg"
import Empowerment1 from "../../assets/images/gallery/Empowerment1.jpg"




const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  // Sample images array - replace with your actual images
  const images = [
    { src: Hero1, title: "Learning Session", category: "Academics" },
    { src: Assembly, title: "Assembly Session", category: "School Life" },
    { src: Achievement, title: "School Event", category: "School Event" },
    { src: GroupPhoto, title: "Group Photo", category: "Community" },
    { src: GroupPhoto2, title: "Group Photo", category: "Memories" },
    { src: GroupPhoto3, title: "Group Photo", category: "Memories" },
    { src: ClassSession, title: "Class Session", category: "Academics" },
    { src: Discussion, title: "Class Discussion", category: "Academics" },
    { src: Gathering, title: "Engagement", category: "Community" },
    { src: Empowerment2, title: "Empowerment", category: "Wellness & Support" },
    { src: Empowerment3, title: "Empowerment", category: "Wellness & Support" },
    { src: Empowerment6, title: "Empowerment", category: "Wellness & Support" },
    { src: FemaleEmpowerment, title: "Empowerment", category: "Wellness & Support" },
    { src: Empowerment1, title: "Empowerment", category: "Wellness & Support" },
    
  ];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className={styles.gallerySection}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.galleryHeader}
        >
          <h1>Our Gallery</h1>
          <div className={styles.divider}></div>
          <p>Capturing moments that shape futures</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.galleryGrid}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={styles.imageWrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredImage(index)}
              onHoverEnd={() => setHoveredImage(null)}
              onClick={() => handleImageClick(index)}
            >
              <img src={image.src} alt={image.title} />
              <div className={`${styles.imageOverlay} ${hoveredImage === index ? styles.active : ''}`}>
                <FiMaximize2 className={styles.expandIcon} />
                <div className={styles.imageInfo}>
                  <h3>{image.title}</h3>
                  <span>{image.category}</span>
                </div>
              </div>
              <div className={styles.imageBadge}>
                <FiImage />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={handleClose}>
                <FiX />
              </button>
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className={styles.lightboxImage}
              />
              <div className={styles.lightboxInfo}>
                <h3>{images[selectedImage].title}</h3>
                <span>{images[selectedImage].category}</span>
              </div>
              <button className={styles.navButton} onClick={handlePrevious} style={{ left: 20 }}>
                <FiArrowLeft />
              </button>
              <button className={styles.navButton} onClick={handleNext} style={{ right: 20 }}>
                <FiArrowRight />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;