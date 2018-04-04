/*
 *
 * TambahKuisPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as constant from './constants';

const initialState = fromJS({
  coverImage: "http://via.placeholder.com/1200x700",
  listJawaban: [],
  judul: "",
  profileX: "",
  profileY: "",
  profileWidth: "",
  isSaving: false,
  isSaveFailed: false,
  failedMessage: ""
});

function tambahKuisPageReducer(state = initialState, action) {
  switch (action.type) {
    case constant.COVER_IMAGE_ADD:
      return state.set("coverImage", action.data);
    case constant.JAWABAN_ADD:
      return state.set("listJawaban", state.get("listJawaban").push(action.data))
    case constant.JUDUL_CHANGE:
      return state.set("judul", action.value);
    case constant.PROFILE_X_CHANGE:
      return state.set("profileX", action.value);
    case constant.PROFILE_Y_CHANGE:
      return state.set("profileY", action.value);
    case constant.PROFILE_WIDTH_CHANGE:
      return state.set("profileWidth", action.value);
    case constant.PROFILE_HEIGHT_CHANGE:
      return state.set("profileHeight", action.value);
    case constant.SIMPAN_KUIS_CLICK:
      return state.set("isSaving", true).set("isSaveFailed", false);
    case constant.SIMPAN_KUIS_FAILED:
      return state.set("isSaveFailed", true).set("isSaving", false);
    case constant.SIMPAN_KUIS_SAVED:
      return initialState;
    default:
      return state;
  }
}

export default tambahKuisPageReducer;
