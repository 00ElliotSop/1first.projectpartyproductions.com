import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Props = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: '/20250804_192508408.jpg', description: 'Fun wedding props with elegant backdrop and lighting' },
    { src: '/DSC_0161.JPG', description: 'Family reunion props with multi-generational fun' },
    { src: '/main.JPG', description: 'Birthday party props with colorful celebration items' },
    { src: '/DSC_0125.JPG', description: 'Corporate event props with professional accessories' },
    { src: '/DSC_0381 2.JPG', description: 'Wedding ceremony props with romantic elements' },
    { src: '/DSC_1148.JPG', description: 'Anniversary props with gold and elegant accessories' },
    { src: '/360.jpg', description: 'Graduation props with fun celebration items' },
    { src: '/360-1.jpg', description: 'Holiday party props with seasonal decorations' },
    { src: '/20250804_182858278 (2).jpg', description: 'Baby shower props with pastel accessories' },
    { src: '/20250804_204800341.jpg', description: 'Corporate team building props' },
    { src: '/20250804_204445724.jpg', description: 'Sweet 16 props with vibrant accessories' },
    { src: '/DSC_0376 2.JPG', description: 'Wedding reception props with red carpet theme' }
  ];

  const propCategories = [
    {
      title: "Wedding Props",
      image: "/DSC_1148.JPG",
      items: ["Bride & Groom Signs", "Wedding Rings", "Just Married Signs", "Love Letters", "Wedding Bells", "Romantic Frames"]
    },
    {
      title: "Birthday Props", 
      image: "/main.JPG",
      items: ["Birthday Crowns", "Age Numbers", "Party Hats", "Balloons", "Birthday Signs", "Cake Props"]
    },
    {
      title: "Corporate Props",
      image: "/DSC_0125.JPG", 
      items: ["Company Logos", "Professional Signs", "Achievement Awards", "Business Cards", "Success Props", "Team Building Items"]
    },
    {
      title: "Holiday Props",
      image: "/360-1.jpg",
      items: ["Christmas Props", "Halloween Masks", "New Year Items", "Easter Decorations", "Valentine's Day", "Thanksgiving Props"]
    },
    {
      title: "Fun & Quirky Props",
      image: "/DSC_0161.JPG",
      items: ["Funny Glasses", "Mustaches", "Wigs", "Speech Bubbles", "Silly Signs", "Character Masks"]
    },
    {
      title: "Custom Props",
      image: "/20250804_192508408.jpg",
      items: ["Personalized Signs", "Custom Logos", "Event Specific", "Brand Elements", "Special Messages", "Unique Designs"]
    }
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
          src="/DSC_0161.JPG"
          alt="Props Collection"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">PROPS</h1>
            <p className="text-xl md:text-2xl">
              Fun, creative, and memorable props for every occasion
            </p>
          </div>
        </div>
      </section>

      {/* Props Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Props Collection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our extensive collection of props or let us create custom pieces for your special event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Props in Action</h2>
            <p className="text-xl text-gray-600">
              See how our props bring fun and personality to every event
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
                    alt={`Props ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Add Some Fun?</h2>
          <p className="text-xl mb-8">
            Let our creative props make your event unforgettable
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Book Your Props Package
          </button>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-screen p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all z-10"
            >
              <X size={24} />
            </button>
            
            <img
              src={galleryImages[selectedImage].src}
              alt={`Gallery ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
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

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-6 py-4 rounded-lg max-w-md text-center">
              <p className="text-sm mb-2">{galleryImages[selectedImage].description}</p>
              <p className="text-xs opacity-75">{selectedImage + 1} / {galleryImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Props;