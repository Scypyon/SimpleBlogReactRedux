import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { galleryReducer } from "Modules/Gallery/GalleryReducer";

const reducers = combineReducers({
  gallery: galleryReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
