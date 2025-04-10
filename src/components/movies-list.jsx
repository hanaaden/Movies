import React from 'react';
import scifi from '../assets/images/scifi-arrival.avif';
import scifi1 from '../assets/images/scifi1.jpg';
import action1 from '../assets/images/action1.jpeg';
import action from '../assets/images/action.jpeg';
import drama from '../assets/images/drama.jpeg';
import drama1 from '../assets/images/drama1.jpeg';
import horror from '../assets/images/horror.jpeg';
import horror1 from '../assets/images/horror1.jpeg';
import Comedy from '../assets/images/comedy.jpg';
import comedy1 from '../assets/images/comedy1.jpeg';

function MovieList() {
    return (
        <div className='w-full h-full border-4 border-gray-800 mt-12'>
            <div className='text-4xl text-gray-600 font-bold p-4 text-center'>Trending now</div>
            <div className='flex flex-wrap justify-center'>
                {[
                    { src: scifi1, title: "Occupation (2020)" },
                    { src: drama, title: "Four of hearts (2013)" },
                    { src: comedy1, title: "Brides maid (2010)" },
                    { src: action1, title: "Hunter Killer (2018)" },
                    { src: horror, title: "Home (2022)" },
                    { src: drama1, title: "Drama Drama (2021)" },
                    { src: Comedy, title: "Lose a guy in 10 days (2003)" },
                    { src: action, title: "R.I.P.D (2016)" },
                    { src: horror1, title: "Horror una sega (2022)" },
                    { src: scifi, title: "Arrival (2016)" }
                ].map((movie, index) => (
                    <div key={index} className="img1 border-4 border-gray-800 w-64 m-4 flex flex-col items-center p-4">
                        <img className='w-48 h-64' src={movie.src} alt={movie.title} />
                        <p className='text-2xl text-gray-600 font-bold text-center'>{movie.title}</p>
                        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                            <button className='bg-gray-500 p-2 text-white rounded hover:bg-gray-600 transition duration-200 mt-2'>WATCH NOW</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;