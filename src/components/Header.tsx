    { src: '/20250804_192508408.jpg', description: 'Prom night setup with glamorous backdrop and elegant lighting' },
    { src: '/DSC_0161.JPG', description: 'Family reunion with multi-generational fun and classic props' }
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openModal(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={image.src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
    { src: '/20250804_204800341.jpg', description: '360 Photobooth in action at a wedding reception with guests enjoying the experience' },
                    fetchpriority={index < 6 ? "high" : "auto"}
    { src: '/20250804_204445724.jpg', description: 'Mobile photobooth setup with professional lighting and backdrop at corporate event' },
            </button>
    { src: '/main.JPG', description: 'Birthday party celebration with colorful props and happy guests' },
            <button
    { src: '/20250804_1829240671-ezgif.com-speed.gif', description: 'Elegant wedding setup with white flower wall backdrop and professional lighting' },
              onClick={nextImage}
    { src: '/DSC_0125.JPG', description: 'Corporate gala event featuring our premium photobooth package' },
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
    { src: '/DSC_0381 2.JPG', description: 'Outdoor wedding ceremony with portable power station and wireless setup' },
            >
    { src: '/DSC_1148.JPG', description: 'Anniversary celebration with gold sequin backdrop and romantic lighting' },
              <ChevronRight size={24} />
    { src: '/360.jpg', description: 'Graduation party with fun props and instant photo printing' },
            </button>
    { src: '/360-1.jpg', description: 'Holiday party setup with seasonal decorations and themed props' },

    { src: '/20250804_182858278 (2).jpg', description: 'Baby shower event with pastel backdrop and delicate lighting' },
            {/* Image Description */}
    { src: '/20250804_192508408.jpg', description: 'Corporate team building event with interactive photobooth experience' },
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-6 py-4 rounded-lg max-w-md text-center">
    { src: '/DSC_0161.JPG', description: 'Sweet 16 party with vibrant lighting and trendy backdrop' },
              <p className="text-sm mb-2">{galleryImages[selectedImage].description}</p>
    { src: '/DSC_0376 2.JPG', description: 'Wedding reception with red carpet entrance and stanchions' },
              <p className="text-xs opacity-75">{selectedImage + 1} / {galleryImages.length}</p>
    { src: '/main.JPG', description: 'Charity gala featuring our premium lighting package' },
            </div>
    { src: '/20250804_204800341.jpg', description: 'Engagement party with romantic floral backdrop and soft lighting' },
          </div>
    { src: '/20250804_204445724.jpg', description: 'Corporate product launch with branded backdrop and professional setup' },
        </div>
    { src: '/DSC_0125.JPG', description: 'Quinceañera celebration with elegant gold and pink theme' },
      )}
    { src: '/DSC_0381 2.JPG', description: 'Retirement party with classic backdrop and timeless props' },
    </div>
    { src: '/DSC_1148.JPG', description: 'New Year\'s Eve party with glittery backdrop and festive props' },
  );
    { src: '/360.jpg', description: 'Bridal shower with white and gold theme and delicate flowers' },
};
    { src: '/360-1.jpg', description: 'Bar Mitzvah celebration with traditional and modern elements' },

    { src: '/20250804_182858278 (2).jpg', description: 'Company anniversary event with professional branding and setup' },
export default Gallery;