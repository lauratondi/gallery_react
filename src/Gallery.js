import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { app } from './firebase';

const db = app.firestore();

const Gallery = ({ setSelectedImg }) => {
  const [images, setImages] = useState([]);
  const [galleryName, setGalleryName] = useState('');

  const match = useRouteMatch('/:gallery');
  // @ts-ignore
  const { gallery } = match.params;

  useEffect(() => {
    const unmount = db
      .collection('galleries')
      .doc(gallery)
      .onSnapshot((doc) => {
        setImages(doc.data().images || []);
        setGalleryName(doc.data().title);
      });
    return unmount;
  }, []);

  return (
    <>
      <section>
        <header>
          <h1>{galleryName}</h1>
        </header>
        {images &&
          images.map((image) => (
            <aside
              key={image.id}
              onClick={() => setSelectedImg(image.url)}
              className="clickImg"
            >
              <img src={image.url} alt="Gallery" />
              <p>{image.name}</p>
            </aside>
          ))}
      </section>
    </>
  );
};

export default Gallery;
