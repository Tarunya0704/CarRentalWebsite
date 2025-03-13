import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import SearchForm from '../components/home/SearchForm';
import PopularRoutes from '../components/home/PopularRoutes';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 mb-16">
        <SearchForm />
      </div>
      <PopularRoutes />
      <WhyChooseUs />
      <Testimonials />
    </Layout>
  );
}