import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Blogs } from '@/components/Blogs';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

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
