export interface Car {
    id: string;
    name: string;
    model: string;
    year: number;
    type: string;
    seats: number;
    transmission: string;
    pricePerDay: number;
    images: string[];
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
  }
  