import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export const getAboutInfo = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/about`);
    if (!response.ok) {
      throw new Error('Failed to fetch about information');
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Error fetching about information:', error);
    return null;
  }
};

const Home = async () => {

  const about = await getAboutInfo();
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
