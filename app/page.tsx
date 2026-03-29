import { Hero } from '@/components/Hero';
// import { Skills } from '@/components/Skills';
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
      {/* <Skills /> */}
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
