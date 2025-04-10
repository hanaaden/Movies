import React, { useState, useEffect } from 'react';
import tren1 from '../assets/images/trending1.jpg'; // Ensure this path is correct
import tren2 from '../assets/images/trending2.webp'; // Ensure this path is correct
import tren3 from '../assets/images/trending5.jpg'; // Ensure this path is correct
import tren4 from '../assets/images/trending.jpeg'; // Ensure this path is correct

const movies = [
    { id: 1, title: 'Movie 1', releaseDate: '2023-01-01', img: tren2 },
    { id: 2, title: 'Movie 2', releaseDate: '2023-02-01', img: tren1 },
    { id: 3, title: 'Movie 3', releaseDate: '2023-03-01', img: tren3 },
    { id: 4, title: 'Movie 4', releaseDate: '2023-04-01', img: tren4 },
];

const MovieSlideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % movies.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    const changeSlide = (direction) => {
        setCurrentSlide((prev) => (prev + direction + movies.length) % movies.length);
    };

    return (
        <div className="relative w-full h-128 overflow-hidden rounded-lg shadow-lg"> {/* Increased height to h-128 */}
            <div className="slides flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {movies.map((movie) => (
                    <div key={movie.id} className="min-w-full h-128 relative"> {/* Increased height to h-128 */}
                        <img src={movie.img} alt={movie.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white p-3">
                            {movie.title}<br />Release Date: {movie.releaseDate}
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
                onClick={() => changeSlide(-1)}
            >
                &#10094;
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
                onClick={() => changeSlide(1)}
            >
                &#10095;
            </button>
        </div>
    );
};

export default MovieSlideshow;