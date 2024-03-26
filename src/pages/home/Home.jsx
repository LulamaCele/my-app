import React from 'react';
import '../../App.css';
import { Nav } from '../../components/nav/Nav';
import { Main } from '../../components/main/Main';
import { ServiceCTA } from '../../components/services/ServiceCTA';
import { GalleryCTA } from '../../components/gallery/GalleryCTA';
import { TestimonialsCTA } from '../../components/testimonials/TestimonialsCTA';
import { Footer } from '../../components/footer/Footer';

 export function Home() {
    return (
        <div>
            <Nav />
            <Main />
            <ServiceCTA />
            <GalleryCTA />
            <TestimonialsCTA />
            <Footer />
        </div>
    )
}

// export default Home;

