import React, { useState, useEffect } from 'react';
import Products from './Products';
import img from '../assets/HarteNuss_700_Front_D.webp';
import img2 from '../assets/PralleKirsche_700_Front_UK.jpg';
import Nav from './Nav';

import { useTranslation } from 'react-i18next';
import LanguageContext from './LanguageContext';
import { createClient } from 'pexels';

import LanguageProvider from './LanguageProvider';

export default function Home() {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          'https://api.pexels.com/v1/search?query=nature&per_page=10',
          {
            headers: {
              Authorization:
                '563492ad6f917000010000016412b7dbda5b4185a4747528041d2205',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.photos.length);
        const randomImage = data.photos[randomIndex];

        setImageSrc(randomImage.src.large);
      } catch (error) {
        console.error('There was a problem fetching the image:', error);
      }
    };

    fetchImage();
  }, []);
  const { t, i18n } = useTranslation();

  let products = [
    {
      id: 1,
      name: t('name1'),
      description: t('desc1'),
      rating: 4,
      image: img,
      price: 26.9,
    },
    {
      id: 2,
      name: t('name2'),
      description: t('desc2'),
      rating: 5,
      image: img2,
      price: 28.5,
    },
  ];

  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };
  return (
    <div>
      <LanguageProvider>
        <Nav count={count} />
        <Products products={products} onAddToCart={handleAddToCart} />
      </LanguageProvider>
    </div>
  );
}
