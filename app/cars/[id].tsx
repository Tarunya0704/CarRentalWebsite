import { GetServerSideProps } from 'next';
import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import BookingForm from '../../components/booking/BookingForm';
import prisma from '../../lib/prisma';
import { Car } from '../../types';

interface CarDetailProps {
  car: Car;
}

export default function CarDetail({ car }: CarDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-gray-100 h-96 rounded-lg overflow-hidden">
              <img
                src={car.images[currentImageIndex] || '/images/car-placeholder.jpg'}
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>
            {car.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2 mt-2">
                {car.images.map((image, index) => (
                  <div
                    key={index}
                    className={`h-20 rounded-md overflow-hidden cursor-pointer ${
                      index === currentImageIndex ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`${car.name} - image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
            <p className="text-gray-600 mb-4">{car.model} {car.year}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Type</div>
                <div className="font-medium">{car.type}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Seats</div>
                <div className="font-medium">{car.seats}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Transmission</div>
                <div className="font-medium">{car.transmission}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <div className="text-sm text-gray-500">Rate</div>
                <div className="font-medium">${car.pricePerDay}/day</div>
              </div>
            </div>
            
            <BookingForm car={car} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const carId = params?.id as string;
  
  const car = await prisma.car.findUnique({
    where: { id: carId },
  });
  
  if (!car) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      car: JSON.parse(JSON.stringify(car)), // Serialize for next.js
    },
  };
};
