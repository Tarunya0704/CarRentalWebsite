const testimonials = [
    {
      id: 1,
      content: "The car was in excellent condition and the booking process was seamless. Highly recommended!",
      author: "John Smith",
      location: "Delhi",
      rating: 5,
    },
    {
      id: 2,
      content: "Great service and very responsive customer support. Will definitely use again on my next trip.",
      author: "Sarah Johnson",
      location: "Mumbai",
      rating: 4,
    },
    {
      id: 3,
      content: "The best car rental experience I've had. The car was delivered on time and was exactly as advertised.",
      author: "Michael Brown",
      location: "Bangalore",
      rating: 5,
    },
  ];
  
  const Testimonials = () => {
    return (
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-${i < testimonial.rating ? 'yellow' : 'gray'}-400`}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;