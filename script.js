const movies = [
    { title: "Movie 1", thumbnail: "thumbnails/movie1.jpg", link: "movies/movie1.html" },
    { title: "Movie 2", thumbnail: "thumbnails/movie2.jpg", link: "movies/movie2.html" },
    { title: "Movie 3", thumbnail: "thumbnails/movie3.jpg", link: "movies/movie3.html" },
];

const movieGrid = document.querySelector('.movie-grid');
movies.forEach(movie => {
    const movieElement = `
        <a href="${movie.link}">
            <img src="${movie.thumbnail}" alt="${movie.title} Thumbnail">
            <h2>${movie.title}</h2>
        </a>
    `;
    movieGrid.innerHTML += movieElement;
});
