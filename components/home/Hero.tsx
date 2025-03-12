const Hero = () => {
    return (
      <div className="relative">
        <div className="h-[500px] bg-gradient-to-r from-blue-800 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Your Journey, Your Car
              </h1>
              <p className="text-xl text-white mb-8">
                Book your perfect car rental online for any destination. Best prices guaranteed.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Explore Cars
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;