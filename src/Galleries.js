import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import { app } from "./firebase";
import { NewAlbumForm } from "./NewAlbumForm";
import GalleryItem from "./GalleryItem";

// const db = getFirestore(app);
const db = app.firestore();

const Galleries = (props) => {
  const [galleries, setGalleries] = useState([]);

  // useEffect(() => {
  //   getGalleries(db);
  // }, []);

  // async function getGalleries(db) {
  //   const galleriesList = collection(db, "galleries");
  //   const gallerySnapshot = await getDocs(galleriesList);
  //   const tempGallery = [];

  //   gallerySnapshot.docs.map((doc) => {
  //     tempGallery.push({ ...doc.data(), id: doc.id });
  //   });
  //   setGalleries(tempGallery);
  //   return galleriesList;
  // }

  useEffect(() => {
    const unmount = db.collection("galleries").onSnapshot((snapshot) => {
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
          // <Link to={`/${gallery.id}`}>
          //   <aside key={gallery.id}>
          //     <img
          //       src={gallery.images ? gallery.images[0].url : "no images"}
          //       alt="gallery"
          //     />
          //     <h3>{gallery.title}</h3>
          //     <p>{gallery.description}</p>
          //   </aside>
          // </Link>
          <GalleryItem gallery={gallery} />
        ))}
      </section>
      {/* <footer>
        <NewAlbumForm />
      </footer> */}
    </Fragment>
  );
};

export default Galleries;
