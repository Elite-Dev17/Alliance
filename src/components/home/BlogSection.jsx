import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import styles from './BlogSection.module.css';

const BlogSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const blogPosts = [
    {
      title: "Beyond the Classroom: How Education Transforms Lives",
      date: "FEBRUARY 24, 2025",
      image: "https://media.gettyimages.com/id/1770690435/photo/schoolgirl-with-raised-hand-celebrating-finishing-a-task-on-computer.jpg?s=612x612&w=0&k=20&c=YJKGkyTRgiDMiEuU5Fu49--gJVEKjPUU1tjWfLTQeS0="
    },
    {
      title: "Empowering the Next Generation",
      date: "FEBRUARY 25, 2025",
      image: "https://media.gettyimages.com/id/2176396483/photo/student-education-and-thinking-with-woman-and-walking-for-learning-future-and-knowledge.jpg?s=612x612&w=0&k=20&c=7xZFBlI_Aq-IyIwbX2f-zJuNkNBWZKU_Ton7IfPJ-Ps="
    },
    {
      title: "Success Habits: What Achievers Do Differently",
      date: "FEBRUARY 25, 2025",
      image: "https://madeyousmileback.com/wp-content/uploads/2024/11/6-Daily-Habits-for-Success-Essential-Routines-for-High-Achievers.webp"
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

  return (
    <section className={styles.blogSection} ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className={styles.headerSection}>
            <span className={styles.subtitle}>Our Blog</span>
            <h2 className={styles.title}>Latest Posts</h2>
            <div className={styles.underline}></div>
          </div>

          <Row className="g-4">
            {blogPosts.map((post, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div 
                  className={styles.blogCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={styles.imageWrapper}>
                    <img 
                      src={post.image}
                      alt={post.title}
                      className={styles.blogImage}
                    />
                  </div>
                  <div className={styles.contentWrapper}>
                    <span className={styles.date}>{post.date}</span>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <a href="#" className={styles.readMore}>
                      Read More <FiArrowRight />
                    </a>
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

export default BlogSection;
