import React, { useState, useEffect, Fragment } from 'react';import { app } from './firebase';
import GalleryItem from './GalleryItem';

const db = app.firestore();

const Galleries = (props) => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const unmount = db.collection('galleries').onSnapshot((snapshot) => {
      const tempGalleries = [];
      snapshot.forEach((doc) => {
        tempGalleries.push({ ...doc.data(), id: doc.id });
      });
      setGalleries(tempGalleries);
    });
    return unmount;
  }, []);

  return (
    <Fragment>
      <section>
        <h1>Galleries</h1>
        {galleries.map((gallery) => (
          <GalleryItem gallery={gallery} key={gallery.id} />
        ))}
      </section>
    </Fragment>
  );
};

export default Galleries;
