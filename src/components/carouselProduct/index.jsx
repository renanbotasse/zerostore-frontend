import { useState } from 'react';
import './styles.css';

export default function CarouselProduct() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://www.dominioinf.com.br/sites/online/1320/000369-g.jpg',
        'https://howlongtobeat.com/games/CastlevaniaDraculaX.JPG',
        'https://www.dominioinf.com.br/sites/online/1320/000368-g.jpg'
    ];

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carouselproduct">
            <div className="carouselproduct-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="carouselproduct-slide">
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="carouselproduct-thumbnails">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`productthumbnail-button ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    >
                        <img src={image} alt={`Thumbnail ${index}`} />
                    </button>
                ))}
            </div>
        </div>
    );
}
