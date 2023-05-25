import axios from 'axios';

export const getPhoto = async (userRequest, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '35077091-92ff1995237b3143746e74653',
      q: userRequest,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  });
  return response.data;
};
