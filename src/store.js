import { reactive } from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    apiUrlMulti: 'https://api.themoviedb.org/3/search/multi',
    endPoints: {
        movie: 'search/movie',
        tv: 'search/tv',
        all: 'search/multi',
        discoverMovie: 'discover/movie',
        discovertv: 'discover/tv'
    },
    options: {
        params: {
            query: '',
            api_key: '21799a6b0925c3f753aa0f6bbb689d8c',
            
        }
    },
    optionsFilter: {
        params: {
            with_genres: 28,
            api_key: '21799a6b0925c3f753aa0f6bbb689d8c',
        }
    },
    endPoint: '',
    tvShow: [],
    movies: [],
    genre: [],
    genreId: [28, 12, 80, 27, 53], /* OGNI NUMERO CORRISPONDE A UN GENERE */
    findMedia: [] /* RICERCA DELL'UTENTE */
})