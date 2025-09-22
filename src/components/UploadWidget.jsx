import { useEffect } from 'react';

const UploadWidget = () => {
  useEffect(() => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'yourCloudName',
        uploadPreset: 'yourUploadPreset',
      },
      (error, result) => {
        if (!error && result.event === 'success') {
          console.log('Uploaded:', result.info.secure_url);
        }
      }
    );
    document.getElementById('upload-btn').addEventListener('click', () => widget.open());
  }, []);

  return <button id="upload-btn">Upload Corvette Photo</button>;
};

export default UploadWidget;
