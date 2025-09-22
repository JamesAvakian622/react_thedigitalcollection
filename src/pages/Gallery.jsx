import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://res.cloudinary.com/yourCloudName/image/list/corvettes.json')
      .then(res => res.json())
      .then(data => setImages(data.resources));
  }, []);

  return (
    <div>
      <h2>Corvette Gallery</h2>
      {images.map(img => (
        <img key={img.public_id} src={`https://res.cloudinary.com/yourCloudName/image/upload/${img.public_id}.jpg`} alt="Corvette" />
      ))}
    </div>
  );
};
export default Gallery;