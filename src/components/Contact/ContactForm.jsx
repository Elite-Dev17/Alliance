import  { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.contentContainer}>
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={styles.input}
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={styles.input}
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className={styles.input}
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className={styles.textarea}
                required
              />
              <button type="submit" className={styles.submitButton}>
                Send Now
              </button>
            </form>
          </div>
          <div className={styles.mapSection}>
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7899!2d36.904861!3d-1.247039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLTEmMTQ3MDM5LCAzNiw5MDQ4NjE!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"

              className={styles.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;