import axios from 'axios';

const ACCESS_KEY = '3owcpSlq4PPbDAjipJBaEHKjerzzuJk7DWJr7L72Lnw'

export const getImages = async (query, page = 1, per_page = 24) => {
  try {
      const url = 'https://api.unsplash.com/search/photos'

      const params ={
        page, per_page, query
      };

      const headers = {
        Authorization: `Client-ID ${ACCESS_KEY}`        
      }

      const response = await axios.request({
        url,
        headers,
        params
      })
      return response.data
    }
  catch (error) {
      console.error(error)
  }
}