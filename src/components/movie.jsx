
import React from 'react';
import MovieSlideshow from './slideshow';
import MovieList from './movies-list';

function Movie({ title, description }) {
    return (
       <>
 <header class="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-800 text-white">
  <div class="text-lg font-bold">Cimovfi Search App</div>
  <div class="flex-grow mx-4 mt-2 md:mt-0">
    <input type="text" placeholder="Search movies..." class="w-full p-2 rounded border-white bg-gray-" />
  </div>
  <button class="bg-white text-black p-2 m-2 rounded">Search</button>
  <nav class="space-x-4 mt-2 md:mt-0">
    <a href="#" class="hover:text-gray-400">Home</a>
    <a href="#" class="hover:text-gray-400">Popular</a>
    <a href="#" class="hover:text-gray-400">Favorites</a>
    <a href="#" class="hover:text-gray-400">About</a>
  </nav>
</header>


<div class="bg-gray-700 p-4">
  <h2 class="text-lg font-semibold text-white">Categories</h2>
  <div class="flex flex-wrap space-x-4 mt-2">
    <a href="#" class="bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded mb-2">Action</a>
    <a href="#" class="bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded mb-2">Comedy</a>
    <a href="#" class="bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded mb-2">Drama</a>
    <a href="#" class="bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded mb-2">Horror</a>
    <a href="#" class="bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded mb-2">Sci-Fi</a>
  </div>
</div>
<div className='text-4xl text-gray-600 font-bold  p-4'>Trending now </div>
<MovieSlideshow></MovieSlideshow>
<MovieList></MovieList>
       </>
    );
}

export default Movie;
