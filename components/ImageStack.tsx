"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import heroImage4 from './photos/image4.jpg';
import heroImage5 from './photos/image5.jpg';

const ImageStack: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images: StaticImageData[] = [heroImage4, heroImage5];

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return(
        <div className="relative">
            <div className="flex overflow-x-hidden">
                {images.map((image, index) => (
                <div key={index} className={`w-full ${index === currentIndex ? 'block' : 'hidden'}`}>
                    <Image src={image.src} alt={`Image ${index + 1}`} width={600} height={400} />
                </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
                onClick={prevImage}
            >
                &#10094;
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
                onClick={nextImage}
            >
                &#10095;
            </button>
        </div>
    );

};

export default ImageStack;