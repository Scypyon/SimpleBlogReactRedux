import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchingGallery } from "./GalleryActions";

import { SectionGallery, StyledImage } from "shared/StyledGallery";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function Gallery() {
  const gallery = useSelector(state => state.gallery);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState();
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchingGallery);
  }, [dispatch]);
  console.log(gallery);

  useEffect(() => {
    if (!gallery.isFetching) {
      setImages(gallery.gallery.data.results.map(img => img.picture.large));
    }
  }, [gallery]);
  return (
    <>
      <SectionGallery>
        {!gallery.isFetching ? (
          gallery.gallery.data.results.map((img, i) => (
            <StyledImage
              key={img.login.uuid}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(i);
              }}
            >
              <img src={img.picture.large} alt="img from gallery"></img>
            </StyledImage>
          ))
        ) : (
          <p>Fetching Gallery...</p>
        )}
      </SectionGallery>
      {images && isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
}
