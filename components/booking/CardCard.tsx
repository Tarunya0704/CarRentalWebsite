import { Car } from '../../types';

interface CarCardProps {
  car: Car;
  onSelect: (car: Car) => void;
}

const CarCard = ({ car, onSelect }: CarCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={car.images[0] || '/images/car-placeholder.jpg'}
        alt={car.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{car.name}</h2>
        <p className="text-gray-600">{car.model} {car.year}</p>
        
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Seats:</span>
            <span>{car.seats}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Type:</span>
            <span>{car.type}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Transmission:</span>
            <span>{car.transmission}</span>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold">${car.pricePerDay}/day</span>
          <button
            onClick={() => onSelect(car)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;