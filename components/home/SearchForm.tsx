import { useState } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const SearchForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      pickup: formData.pickup,
      dropoff: formData.dropoff,
      startDate: formData.startDate.toISOString(),
      endDate: formData.endDate.toISOString(),
    });
    router.push(`/cars?${queryParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Pickup Location</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={formData.pickup}
            onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Drop-off Location</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={formData.dropoff}
            onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <DatePicker
            selected={formData.startDate}
            onChange={(date: Date) => setFormData({ ...formData, startDate: date })}
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            minDate={new Date()}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <DatePicker
            selected={formData.endDate}
            onChange={(date: Date) => setFormData({ ...formData, endDate: date })}
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            minDate={formData.startDate}
            required
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Search Available Cars
        </button>
      </div>
    </form>
  );
};

export default SearchForm;