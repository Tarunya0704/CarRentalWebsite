import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import BookingForm from '../../components/booking/BookingForm';
import { Car } from '../../types';
import { PrismaClient } from '@prisma/client';
import Image from 'next/image';

// Create prisma client instance
const prisma = new PrismaClient();

interface BookingPageProps {
  car: Car;
}

export default function BookingPage({ car }: BookingPageProps) {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Book {car.name} {car.model}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {car.images && car.images.length > 0 ? (
              <Image 
                src={car.images[0]} 
                alt={`${car.name} ${car.model}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            ) : (
              <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center">
                <span>No image available</span>
              </div>
            )}
            <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Car Details</h2>
              <p><span className="font-medium">Make:</span> {car.name}</p>
              <p><span className="font-medium">Model:</span> {car.model}</p>
              <p><span className="font-medium">Year:</span> {car.year}</p>
              <p><span className="font-medium">Type:</span> {car.type}</p>
              <p><span className="font-medium">Seats:</span> {car.seats}</p>
              <p><span className="font-medium">Transmission:</span> {car.transmission}</p>
              <p><span className="font-medium">Price per day:</span> ${car.pricePerDay}</p>
            </div>
          </div>
          <div>
            <BookingForm 
              car={car} 
              initialPickup={router.query.pickup as string || ''}
              initialDropoff={router.query.dropoff as string || ''}
              initialStartDate={router.query.startDate ? new Date(router.query.startDate as string) : undefined}
              initialEndDate={router.query.endDate ? new Date(router.query.endDate as string) : undefined}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  
  try {
    const car = await prisma.car.findUnique({
      where: { id },
    });

    if (!car) {
      return {
        notFound: true,
      };
    }

    // Need to serialize dates and other non-serializable values
    return {
      props: {
        car: JSON.parse(JSON.stringify(car)),
      },
    };
  } catch (error) {
    console.error('Error fetching car:', error);
    return {
      notFound: true,
    };
  } finally {
    // Important: Close the Prisma client to avoid memory leaks
    await prisma.$disconnect();
  }
}