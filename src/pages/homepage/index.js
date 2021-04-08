import React from 'react';
import Header from '../../components/Header';
import MainElement from '../../components/MainElement';
import AboutSection from '../../components/AboutSection';
import ProjectSection from '../../components/ProjectSection';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import Hamburgermenu from '../../components/Hamburgermenu';


const Homepage = () => {
  
      return(
          <div>
            <Hamburgermenu />
            <Header />
            <MainElement />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
            <Footer />
          </div>
      );
    }
    
    export default Homepage;