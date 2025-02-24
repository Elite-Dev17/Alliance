import styles from "./LoadingSpinner.module.css"; // Ensure correct path

const LoadingSpinner = () => {
  console.log("LoadingSpinner is rendering");
  
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingSpinner;
