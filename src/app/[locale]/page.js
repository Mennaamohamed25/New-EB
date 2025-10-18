
import HeroSection from '../../components/home/HeroSection.jsx';
import TrustedSlider from '../../components/home/TrustedSlider.jsx'
import AboutSection from '../../components/home/AboutSection.jsx'
import Breif from '../../components/home/Breif.jsx'
import EmpowerSection from '../../components/home/EmpowerSection.jsx'
import Ask from '../../components/home/Ask.jsx'
import Menna from '../../components/home/CTASection.jsx'



export default function Home() {
  return (
   <div>
   
    <HeroSection/>
 
     {/* <ServicesSlider/> */}
    <AboutSection/>
    <Breif/>
     <EmpowerSection/>
        <TrustedSlider/>
        <Ask/>
        <Menna/>
   
   
   
       
    
   </div>
  );
}
