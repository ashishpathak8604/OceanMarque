import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientMarquee from './components/ClientMarquee';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import GlobalNetwork from './components/GlobalNetwork';
import Industries from './components/Industries';
import Tracking from './components/Tracking';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientMarquee />
        <Services />
        <HowItWorks />
        <GlobalNetwork />
        <Industries />
        <Tracking />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
