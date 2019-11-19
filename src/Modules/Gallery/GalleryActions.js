import axios from "axios";

export const IS_FETCHING = "gallery:IS_FETCHING";
export const FETCHING_SUCCEED = "gallery:FETCHING_SUCCEED";
export const FETCHING_FAILED = "gallery:FETCHING_FAILED";

const isFetching = { type: IS_FETCHING };
const fetchingSucceed = data => ({
  type: FETCHING_SUCCEED,
  data
});
const fetchingFailed = error => ({ type: FETCHING_FAILED, error });

export const fetchingGallery = async dispatch => {
  try {
    dispatch(isFetching);
    const data = await axios.get("https://randomuser.me/api/?results=9");
    dispatch(fetchingSucceed(data));
  } catch (e) {
    dispatch(fetchingFailed(e));
  }
};
