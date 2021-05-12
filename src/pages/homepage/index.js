import React, {useRef}from 'react';
import Header from '../../components/Header';
import MainElement from '../../components/MainElement';
import AboutSection from '../../components/AboutSection';
import ProjectSection from '../../components/ProjectSection';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import Hamburgermenu from '../../components/Hamburgermenu';


const Homepage = () => {

  const refHeader = useRef(null);
  const refProject = useRef(null);
  const refAbout = useRef(null);
  const refContact = useRef(null);

      return(
          <div>
            <Hamburgermenu/>
            <span ref={refHeader}/>
            <Header {...{refProject, refAbout, refContact}}/>
            <MainElement {...{refProject, refAbout}}/>
            <span ref={refAbout}/>
            <AboutSection />
            <span ref={refProject} />
            <ProjectSection />
            <span ref={refContact}/>
            <ContactSection />
            <Footer {...{refHeader}}/>
          </div>
      );
    }
    
    export default Homepage;