import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Car } from '../../types';
import Layout from '../../components/layout/Layout';

export default function CarsPage() {
  const router = useRouter();
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchCars = async () => {
      try {
        const queryParams = new URLSearchParams(router.query as Record<string, string>);
        const response = await fetch(`/api/cars?${queryParams.toString()}`);
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [router.isReady, router.query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Available Cars</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={car.images[0]}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{car.name}</h2>
                <p className="text-gray-600">{car.model} {car.year}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold">${car.pricePerDay}/day</span>
                  <button
                    onClick={() => router.push(`/booking/${car.id}`)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}