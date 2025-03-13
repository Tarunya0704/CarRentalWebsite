export interface Car {
    id: string;
    make: string;
    name: string;
    model: string;
    year: number;
    type: string;
    seats: number;
    transmission: string;
    pricePerDay: number;
    images: string[];
    imageUrl?: string; 
    features?: string[];
  }
  
  export interface Booking {
    id: string;
    userId: string;
    carId: string;
    startDate: Date;
    endDate: Date;
    pickupLocation: string;
    dropoffLocation: string;
    status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';
    totalPrice: number;
    createdAt?: string | Date;
    updatedAt?: string | Date;
  }
  
  export interface BookingFormProps {
    car: Car;
    onSubmit: (bookingData: Booking) => Promise<void>;
  }