import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchingGallery } from "./GalleryActions";

import { SectionGallery, StyledImage } from "shared/StyledGallery";

export default function Gallery() {
  const gallery = useSelector(state => state.gallery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingGallery);
  }, [dispatch]);
  console.log(gallery);
  return (
    <SectionGallery>
      {!gallery.isFetching ? (
        gallery.gallery.data.results.map(img => (
          <StyledImage key={img.login.uuid}>
            <img src={img.picture.large} alt="img from gallery"></img>
          </StyledImage>
        ))
      ) : (
        <p>Fetching Gallery...</p>
      )}
    </SectionGallery>
  );
}
