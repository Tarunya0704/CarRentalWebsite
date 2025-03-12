const features = [
    {
      title: 'Best Price Guarantee',
      description: 'We offer the best rates with no hidden charges',
      icon: '💰',
    },
    {
      title: 'Flexible Booking',
      description: 'Free cancellations and modifications up to 24 hours before pickup',
      icon: '📅',
    },
    {
      title: '24/7 Customer Support',
      description: 'Our support team is always available to help you',
      icon: '🛎️',
    },
    {
      title: 'Quality Assured Vehicles',
      description: 'All cars are regularly maintained and sanitized',
      icon: '🚗',
    },
  ];
  
  const WhyChooseUs = () => {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We provide the best car rental service with transparent pricing and
            excellent customer support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default WhyChooseUs;