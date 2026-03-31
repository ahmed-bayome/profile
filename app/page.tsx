import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Blogs } from '@/components/Blogs';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollToHash } from '@/components/ScrollToHash';

const Home = () => {

  return (
    <main>
      <ScrollToHash />
      <Hero />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
