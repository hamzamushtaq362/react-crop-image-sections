import React, { useState } from "react";
import ImageCropper from "./ImageCropper";

const App = () => {
  const [croppedImage, setCroppedImage] = useState(null);

  const handleCropComplete = (croppedImg) => {
    setCroppedImage(croppedImg);
  };

  return (
    <div>
      <h1>Image Cropper</h1>
      <ImageCropper
        imageSrc="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
        onCropComplete={handleCropComplete}
      />
      {croppedImage && (
        <div>
          <h2>Cropped Image</h2>
          <img src={croppedImage} alt="Cropped" />
        </div>
      )}
    </div>
  );
};

export default App;
