
import HeroSection from '../components/home/HeroSection';
import MissionStatement from '../components/home/MissionStatement';
import Vision from '../components/home/Vision';
import SupportInitiative from '../components/home/SupportInnitiative';
import Support from '../components/home/Support';
import TestimonialSection from '../components/home/TestimonialSection';
import BlogSection from '../components/home/BlogSection';



const Home = () => {
  return (
    <main>
      <HeroSection />
      <MissionStatement />
      <Vision />
      <SupportInitiative />
      <Support />
      <TestimonialSection />
      <BlogSection />
      {/* Add more sections as needed */}
    </main>
  );
};

export default Home;