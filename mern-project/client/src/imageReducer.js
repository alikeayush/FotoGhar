// client/src/reducers/imageReducer.js
const initialState = {
    // Initial state for image-related data
    uploadedImages: [], // An array to store uploaded images
    // Add other image-related state properties as needed
  };
  
  const imageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPLOAD_IMAGE':
        // Handle the action for uploading an image
        return {
          ...state,
          uploadedImages: [...state.uploadedImages, action.payload],
        };
  
      // Add other cases for different image-related actions if needed
  
      default:
        return state;
    }
  };
  
  export default imageReducer;
  