import Link from 'next/link';

const routes = [
  {
    from: 'Delhi',
    to: 'Jaipur',
    distance: '281 km',
    price: '₹4,500',
    image: '/images/delhi-jaipur.jpg',
  },
  {
    from: 'Mumbai',
    to: 'Pune',
    distance: '148 km',
    price: '₹2,800',
    image: '/images/mumbai-pune.jpg',
  },
  {
    from: 'Bangalore',
    to: 'Mysore',
    distance: '143 km',
    price: '₹2,700',
    image: '/images/bangalore-mysore.jpg',
  },
  {
    from: 'Chennai',
    to: 'Pondicherry',
    distance: '170 km',
    price: '₹3,100',
    image: '/images/chennai-pondicherry.jpg',
  },
];

const PopularRoutes = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Routes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {routes.map((route, index) => (
            <Link href={`/cars?pickup=${route.from}&dropoff=${route.to}`} key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-48 bg-gray-300">
                  {/* Replace with actual images in production */}
                  <div className="w-full h-full flex items-center justify-center bg-blue-100">
                    {route.from} to {route.to}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">
                    {route.from} to {route.to}
                  </h3>
                  <p className="text-gray-600">{route.distance}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-blue-600">{route.price}</span>
                    <span className="text-sm text-gray-500">Starting price</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularRoutes;