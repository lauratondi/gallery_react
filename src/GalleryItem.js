import React from 'react';
import { Link, useParams } from 'react-router-dom';

const GalleryItem = ({ gallery }) => {
  const params = useParams();
  return (
    <div>
      <aside>
        <Link to={`${gallery.id}`}>
          <img
            src={gallery.images ? gallery.images[0].url : 'no images'}
            alt="gallery"
          />
          <h3>{gallery.title}</h3>
          <p>{gallery.description}</p>
        </Link>
      </aside>
    </div>
  );
};

export default GalleryItem;
