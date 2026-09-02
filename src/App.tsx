import { CustomCursor } from '@/components/CustomCursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { BrandIntro } from '@/components/sections/BrandIntro';
import { SignatureMenu } from '@/components/sections/SignatureMenu';
import { CoffeeExperience } from '@/components/sections/CoffeeExperience';
import { Atmosphere } from '@/components/sections/Atmosphere';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { Location } from '@/components/sections/Location';
import { ContactCTA, Footer } from '@/components/sections/ContactFooter';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <SignatureMenu />
        <CoffeeExperience />
        <Atmosphere />
        <Gallery />
        <Reviews />
        <Location />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
