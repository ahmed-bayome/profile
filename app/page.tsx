import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Blogs } from '@/components/sections/Blogs';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/common/Footer';

const Home = () => (
  <main>
    <Hero />
    <Projects />
    <Blogs />
    <Contact />
    <Footer />
  </main>
);

export default Home;
