import React, { useState, useEffect } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   QuerySnapshot,
// } from "firebase/firestore/lite";
// import { doc, getDoc } from "firebase/firestore";
import { app } from "./firebase";

// const db = getFirestore(app);
const db = app.firestore();

const Gallery = (props) => {
  const [images, setImages] = useState([]);
  const [galleryName, setGalleryName] = useState("");

  const match = useRouteMatch("/:gallery");
  const { gallery } = match.params;
  // const params = useParams();
  // console.log(params.id);

  // useEffect(() => {
  //   getGalleryImg();
  // }, [images]);

  // async function getGalleryImg() {
  //   const gallery = collection(db, "galleries");
  //   const galleryDoc = await getDocs(gallery);
  //   galleryDoc.docs.map((doc) => {
  //     setImages(doc.data().images || []);
  //     setGalleryName(doc.data().title);
  //   });

  //   return galleryDoc;
  // }

  useEffect(() => {
    const unmount = db
      .collection("galleries")
      .doc(gallery)
      .onSnapshot((doc) => {
        setImages(doc.data().images || []);
        setGalleryName(doc.data().title);
      });
    return unmount;
  }, [gallery]);

  return (
    <>
      <section>
        <header>
          <h1>{gallery.galleryName}</h1>

          <p>
            Go to the <Link to="/">Home page</Link>
          </p>
        </header>
        {images &&
          images.map((image) => (
            <aside key={image.id}>
              <img src={image.url} alt="Gallery" />
              <p>{image.name}</p>
            </aside>
          ))}
      </section>
      {/* <footer>
        <NewPhoto currentGallery={gallery} />
      </footer> */}
    </>
  );
};

export default Gallery;
