import { useState } from 'react';
import { useRouter } from 'next/router';

interface PaymentFormProps {
  bookingId: string;
  amount: number;
}

const PaymentForm = ({ bookingId, amount }: PaymentFormProps) => {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update booking status to confirmed
      const response = await fetch(`/api/bookings/${bookingId}/confirm`, {
        method: 'POST',
      });
      
      if (response.ok) {
        router.push(`/booking/confirmation?bookingId=${bookingId}`);
      } else {
        throw new Error('Failed to confirm booking');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h3 className="font-semibold mb-4">Payment Details</h3>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md"
              placeholder="123"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total Amount</span>
          <span>${amount}</span>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 flex justify-center items-center"
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;