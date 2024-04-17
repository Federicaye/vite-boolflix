import { reactive } from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    apiUrlMulti: 'https://api.themoviedb.org/3/search/multi',
    endPoints: {
        movie: 'search/movie',
        tv: 'search/tv',
        all: 'search/multi'
    },
    options: {
        params: {
            query: '',
            api_key: '21799a6b0925c3f753aa0f6bbb689d8c',
            
        }
    },
    endPoint: '',
    tvShow: [],
    movies: [],
    allMedia: []
})