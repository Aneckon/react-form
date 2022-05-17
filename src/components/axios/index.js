import axios from 'axios';

export const registerUser = async ({ data, navigate }) => {
  try {
    await axios.post('http://localhost:3000/register', {
      name: data.name,
      username: data.username,
      tel: data.tel,
      email: data.email,
      password: data.password,
    });
    navigate('/registerend');
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async ({ data, navigate }) => {
  try {
    await axios.post('http://localhost:3000/login', {
      email: data.email,
      password: data.password,
    });
    navigate('/loginend');
  } catch (error) {
    console.log(error);
  }
};
