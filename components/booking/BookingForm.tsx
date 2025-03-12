import { useState } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import { Car } from '../../types';

interface BookingFormProps {
  car: Car;
  initialPickup?: string;
  initialDropoff?: string;
  initialStartDate?: Date;
  initialEndDate?: Date;
}

const BookingForm = ({
  car,
  initialPickup = '',
  initialDropoff = '',
  initialStartDate = new Date(),
  initialEndDate = new Date(new Date().setDate(new Date().getDate() + 1)),
}: BookingFormProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    pickup: initialPickup,
    dropoff: initialDropoff,
    startDate: initialStartDate,
    endDate: initialEndDate,
    driverName: '',
    driverEmail: '',
    driverPhone: '',
  });

  const calculateDays = () => {
    const diffTime = formData.endDate.getTime() - formData.startDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const totalPrice = car.pricePerDay * calculateDays();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          carId: car.id,
          startDate: formData.startDate,
          endDate: formData.endDate,
          pickupLocation: formData.pickup,
          dropoffLocation: formData.dropoff,
          driverName: formData.driverName,
          driverEmail: formData.driverEmail,
          driverPhone: formData.driverPhone,
          totalPrice,
        }),
      });
      
      if (response.ok) {
        const { bookingId } = await response.json();
        router.push(`/booking/payment?bookingId=${bookingId}`);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Failed to create booking.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold mb-2">Trip Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              value={formData.pickup}
              onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Location</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              value={formData.dropoff}
              onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
            <DatePicker
              selected={formData.startDate}
              onChange={(date: Date) => setFormData({ ...formData, startDate: date })}
              className="w-full px-4 py-2 border rounded-md"
              minDate={new Date()}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
            <DatePicker
              selected={formData.endDate}
              onChange={(date: Date) => setFormData({ ...formData, endDate: date })}
              className="w-full px-4 py-2 border rounded-md"
              minDate={formData.startDate}
              required
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold mb-2">Driver Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              value={formData.driverName}
              onChange={(e) => setFormData({ ...formData, driverName: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md"
              value={formData.driverEmail}
              onChange={(e) => setFormData({ ...formData, driverEmail: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-md"
              value={formData.driverPhone}
              onChange={(e) => setFormData({ ...formData, driverPhone: e.target.value })}
              required
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Price Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Base rate ({calculateDays()} days × ${car.pricePerDay}/day)</span>
            <span>${car.pricePerDay * calculateDays()}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
      >
        Continue to Payment
      </button>
    </form>
  );
};

export default BookingForm;