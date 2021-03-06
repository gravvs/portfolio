import React, {useRef}from 'react';
import Header from '../../components/Header';
import MainElement from '../../components/MainElement';
import AboutSection from '../../components/AboutSection';
import ProjectSection from '../../components/ProjectSection';
import ContactSection from '../../components/ContactSection';
import Hamburgermenu from '../../components/Hamburgermenu';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1200 });



const Homepage = () => {

  const refHeader = useRef(null);
  const refProject = useRef(null);
  const refAbout = useRef(null);
  const refContact = useRef(null);

      return(
          <div>
            <Hamburgermenu {...{refProject, refAbout, refContact}}/>
            <span ref={refHeader}/>
            <Header {...{refProject, refAbout, refContact}}/>
            <MainElement {...{refProject, refAbout}}/>
            <span ref={refAbout}/>
            <AboutSection />
            <span ref={refProject} />
            <ProjectSection />
            <span ref={refContact}/>
            <ContactSection {...{refHeader}}/>
          </div>
      );
    }
    
    export default Homepage;