const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CarRental</h3>
              <p className="text-gray-300">
                Book your perfect car rental for any occasion. We offer the best rates and service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/cars" className="text-gray-300 hover:text-white">Cars</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Locations</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Delhi</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Mumbai</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Bangalore</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Hyderabad</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@carrental.com</li>
                <li>Phone: +1 123 456 7890</li>
                <li>Address: 123 Car Street, Auto City</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-gray-300">
              &copy; {new Date().getFullYear()} CarRental. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  