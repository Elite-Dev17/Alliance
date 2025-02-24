import Hero from '../components/About/Hero'
import Intro from '../components/About/MissionStatement';
import MissionVisionSection from '../components/About/Us'
import CTASection from '../components/About/CTASection'
import ImpactSection from '../components/About/ImpactSection'

const About = () => {
  return (
    <main>
     <Hero /> 
     <Intro />
     <MissionVisionSection />
     <CTASection />
     <ImpactSection />
    </main>
  );
  
}

export default About