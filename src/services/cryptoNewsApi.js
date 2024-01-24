import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeader = {

    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '62fa7e8e17msh444128a976fe934p1c36f1jsn51e7c9759ac5',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'

}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

const createRequest = (url) => ({ url, headers: cryptoNewsHeader });

const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews: builder.query({
            query:({newsCategory , count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })

})

export const { useGetCryptoNewsQuery, } = cryptoNewsApi;

export default cryptoNewsApi;

export const { middleware } = cryptoNewsApi;
// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {
//         safeSearch: 'Off',
//         textFormat: 'Raw'
//     },
//     headers: {
//         'X-BingApis-SDK': 'true',
//         'X-RapidAPI-Key': '62fa7e8e17msh444128a976fe934p1c36f1jsn51e7c9759ac5',
//         'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
// };