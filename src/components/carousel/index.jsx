import { useState } from 'react';
import './styles.css';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://www.dominioinf.com.br/sites/online/1320/002142-g.jpg',
        'https://www.dominioinf.com.br/sites/online/1320/002363-1g.jpg',
        'https://www.dominioinf.com.br/sites/online/1320/001652-g.jpg',
        'https://www.dominioinf.com.br/sites/online/1320/001432-g.jpg',
        'https://www.dominioinf.com.br/sites/online/1320/001348-g.jpg'
    ];

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-prev" onClick={goToPrevSlide}>Anterior</button>
            <button className="carousel-next" onClick={goToNextSlide}>Próximo</button>
        </div>
    );
}
