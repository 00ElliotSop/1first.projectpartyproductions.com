import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const OtherRentals = () => {
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const rentals = [
    {
      name: 'Speakers',
      image: '/360.jpg',
      description: 'Professional sound systems for any event size',
      link: '/speakers',
      gallery: ['/360.jpg', '/360-1.jpg', '/360.jpg', '/360-1.jpg']
    },
    {
      name: 'Stanchions + Red Carpet',
      image: '/360-1.jpg', 
      description: 'Create a VIP entrance with our elegant stanchions and red carpet',
      link: '/stanchions',
      gallery: ['/360-1.jpg', '/360.jpg', '/360-1.jpg', '/360.jpg']
    },
    {
      name: 'Power Station',
      image: '/360.jpg',
      description: 'Portable power solutions for outdoor events',
      link: '/power-station',
      gallery: ['/360.jpg', '/360-1.jpg', '/360.jpg', '/360-1.jpg']
    },
    {
      name: 'Props',
      image: '/360-1.jpg',
      description: 'Fun and creative props to enhance your photobooth experience',
      link: '/props',
      gallery: ['/360-1.jpg', '/360.jpg', '/360-1.jpg', '/360.jpg']
    },
    {
      name: 'Lighting',
      image: '/360.jpg',
      description: 'Professional lighting equipment to set the perfect mood',
      link: '/lighting',
      gallery: ['/360.jpg', '/360-1.jpg', '/360.jpg', '/360-1.jpg']
    }
  ];

  const allGalleryImages = rentals.flatMap(rental => rental.gallery);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allGalleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + allGalleryImages.length) % allGalleryImages.length);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#F7E7CE] to-[#B5A99A] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">OTHER RENTALS</h1>
          <p className="text-xl">Complete your event with our additional rental services</p>
        </div>
      </section>

      {/* Rentals Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentals.map((rental, rentalIndex) => (
              <div
                key={rentalIndex}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <div className="grid grid-cols-2 gap-1">
                      {rental.gallery.slice(0, 4).map((image, imageIndex) => {
                        const globalIndex = rentalIndex * 4 + imageIndex;
                        return (
                          <img
                            key={imageIndex}
                            src={image}
                            alt={`${rental.name} ${imageIndex + 1}`}
                            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                            onClick={() => openModal(globalIndex)}
                          />
                        );
                      })}
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{rental.name}</h3>
                    <p className="text-gray-600 mb-4">{rental.description}</p>
                    <Link
                      to={rental.link}
                      className="text-[#B5A99A] font-semibold hover:text-[#F7E7CE] transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={allGalleryImages[selectedImage]}
              alt={`Rental Gallery ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-all border-2 border-white shadow-lg"
            >
              <X size={28} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              {selectedImage + 1} / {allGalleryImages.length}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Ready to Book?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your rental needs and create the perfect event experience.
          </p>
          <Link
            to="/book-now"
            className="bg-[#F7E7CE] text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#B5A99A] hover:text-white transition-all duration-300 inline-block"
          >
            BOOK NOW
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OtherRentals;