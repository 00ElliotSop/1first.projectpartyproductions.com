import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Battery, Zap, Power } from 'lucide-react';

const PowerStation = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: '/20250804_192508408.jpg', description: 'Professional power station setup at outdoor event' },
    { src: '/DSC_0161.JPG', description: 'Portable power solution for wedding ceremony' },
    { src: '/DSC_1148.JPG', description: 'Power station supporting professional lighting setup' },
    { src: '/main.JPG', description: 'Birthday party with wireless power solution' },
    { src: '/DSC_0376 2.JPG', description: 'Corporate event with reliable power backup' },
    { src: '/DSC_0125.JPG', description: 'Anniversary celebration with uninterrupted power' },
    { src: '/360.jpg', description: 'Graduation party with portable power station' },
    { src: '/360-1.jpg', description: 'Holiday event with backup power solution' },
    { src: '/20250804_182858278 (2).jpg', description: 'Baby shower with quiet power generation' },
    { src: '/20250804_204800341.jpg', description: 'Corporate team building with mobile power' },
    { src: '/20250804_204445724.jpg', description: 'Sweet 16 party with reliable electricity' },
    { src: '/DSC_0381 2.JPG', description: 'Wedding reception with professional power setup' }
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
          src="/DSC_0381 2.JPG"
          alt="Professional Power Station Setup"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">POWER STATION</h1>
            <p className="text-xl md:text-2xl">
              Reliable, portable power solutions for any event location
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Portable Power Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Never worry about power limitations again. Our professional-grade power stations ensure your event runs smoothly anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-[#F7E7CE] to-[#B5A99A] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Battery className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">High-Capacity Batteries</h3>
              <p className="text-gray-600 mb-6">
                Long-lasting power stations with high-capacity lithium batteries that can run your equipment for hours.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• 1000W+ continuous power</li>
                <li>• 8-12 hour runtime</li>
                <li>• Multiple AC outlets</li>
                <li>• Fast charging capability</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-[#F7E7CE] to-[#B5A99A] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Silent Operation</h3>
              <p className="text-gray-600 mb-6">
                Quiet, battery-powered solutions that won't interfere with your event's atmosphere or audio quality.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Whisper-quiet operation</li>
                <li>• No fuel emissions</li>
                <li>• Indoor/outdoor safe</li>
                <li>• Temperature controlled</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-[#F7E7CE] to-[#B5A99A] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Power className="h-8 w-8 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Grade</h3>
              <p className="text-gray-600 mb-6">
                Commercial-quality power stations designed to handle professional equipment and lighting systems.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Pure sine wave output</li>
                <li>• Surge protection</li>
                <li>• Multiple device charging</li>
                <li>• Real-time monitoring</li>
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
              Power Solutions in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our power stations enable events in any location, from remote outdoor venues to indoor spaces without adequate power access.
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
                    alt={`Power Station ${index + 1}`}
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
              alt={`Power Station ${selectedImage + 1}`}
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
            Power Your Event Anywhere
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Don't let power limitations restrict your event location. Our portable power stations provide reliable electricity anywhere you need it.
          </p>
          <button className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors shadow-lg">
            Get Power Solution
          </button>
        </div>
      </section>
    </div>
  );
};

export default PowerStation;