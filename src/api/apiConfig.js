const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '94f7bec1b91c0b7133e5fa7be293f498',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;