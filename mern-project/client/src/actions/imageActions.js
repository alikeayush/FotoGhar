// client/src/actions/imageActions.js
import axios from 'axios';

export const uploadImage = (image) => async (dispatch) => {
  try {
    // Make a POST request to your backend route for image upload
    const response = await axios.post('http://localhost:5001/api/auth/upload-image', image);

    // Handle the response or dispatch further actions as needed
    console.log(response.data);
  } catch (error) {
    console.error('Error uploading image:', error.message);
  }
};
