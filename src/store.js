import { reactive } from 'vue';
export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoints: {
        movie: 'search/movie',
        tv: 'search/tv'
    },
    options: {
        params: {
            api_key: '21799a6b0925c3f753aa0f6bbb689d8c',
            query: ''

        }
    },
    tvShow: []
})