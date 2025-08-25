import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Lightbulb, Zap, Sun } from 'lucide-react';

const Lighting = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: '/20250804_192508408.jpg', description: 'Prom night setup with glamorous backdrop and elegant lighting' },
    { src: '/DSC_0161.JPG', description: 'Family reunion with multi-generational fun and classic props' },
    { src: '/DSC_1148.JPG', description: 'Wedding reception with professional lighting setup' },
    { src: '/main.JPG', description: 'Birthday party with colorful ambient lighting' },
    { src: '/DSC_0376 2.JPG', description: 'Corporate event with sophisticated lighting design' },
    { src: '/DSC_0125.JPG', description: 'Anniversary celebration with romantic lighting' }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src="/20250804_192508408.jpg"
          alt="Professional Lighting Setup"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">LIGHTING</h1>
            <p className="text-xl md:text-2xl">
              Professional lighting solutions to enhance your event atmosphere
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Professional Lighting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your event with our comprehensive lighting solutions that create the perfect ambiance for any occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-[#F7E7CE] to-[#B5A99A] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ambient Lighting</h3>
              <p className="text-gray-600 mb-6">
                Create the perfect mood with our professional ambient lighting systems that enhance the overall atmosphere of your event.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Color-changing LED systems</li>
                <li>• Warm and cool tone options</li>
                <li>• Wireless control systems</li>
                <li>• Energy-efficient solutions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-[#F7E7CE] to-[#B5A99A] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Spotlight Systems</h3>
              <p className="text-gray-600 mb-6">
                Professional spotlight systems to highlight key areas and create focal points throughout your venue.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Adjustable beam angles</li>
                <li>• Multiple color options</li>
                <li>• Remote positioning</li>
                <li>• Professional-grade equipment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-[#F7E7CE] to-[#B5A99A] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Sun className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Photobooth Lighting</h3>
              <p className="text-gray-600 mb-6">
                Specialized lighting designed to complement our photobooth services for the best possible photo quality.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Studio-quality lighting</li>
                <li>• Flattering portrait illumination</li>
                <li>• Consistent color temperature</li>
                <li>• Shadow-free setup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Lighting in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our professional lighting transforms events and creates unforgettable atmospheres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openModal(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={image.src}
                    alt={`Lighting ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
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

            {/* Image */}
            <img
              src={galleryImages[selectedImage].src}
              alt={`Lighting ${selectedImage + 1}`}
              className="w-full h-auto max-h-screen object-contain"
            />

            {/* Image Description */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-6 py-4 rounded-lg max-w-md text-center">
              <p className="text-sm mb-2">{galleryImages[selectedImage].description}</p>
              <p className="text-xs opacity-75">{selectedImage + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F7E7CE] to-[#B5A99A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready to Light Up Your Event?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact us today to discuss your lighting needs and create the perfect atmosphere for your special occasion.
          </p>
          <button className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors shadow-lg">
            Get Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Lighting;