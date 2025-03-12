import Layout from '../components/layout/Layout';

export default function About() {
  return (
    <Layout>
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">About Us</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose lg:prose-xl mx-auto">
          <h2>Our Story</h2>
          <p>
            Started in 2010, CarRental has grown to become one of the leading car rental services in the country. 
            We began with a small fleet of just 10 cars in one city, and today we operate in over 50 cities with 
            a fleet of more than 5,000 cars.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide convenient, reliable, and affordable car rental services to our customers. 
            We aim to make travel easier by offering a wide range of well-maintained vehicles and exceptional customer service.
          </p>
          
          <h2>Why Choose Us</h2>
          <ul>
            <li>Wide selection of vehicles from economy to luxury</li>
            <li>Transparent pricing with no hidden charges</li>
            <li>Well-maintained and regularly serviced fleet</li>
            <li>24/7 customer support</li>
            <li>Flexible booking options</li>
          </ul>
          
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced professionals who are passionate about providing the best car rental 
            experience to our customers. From our customer service representatives to our maintenance staff, 
            everyone at CarRental is committed to excellence.
          </p>
        </div>
      </div>
    </Layout>
  );
}