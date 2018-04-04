import { takeLatest, select, put, call } from "redux-saga/effects";
import makeSelectTambahKuisPage from "./selectors";

import * as constant from "./constants";
import * as action from "./actions";
import * as axios from "axios";

function* simpanKuis(){
  const tambahKuisPage = yield select(makeSelectTambahKuisPage());
  const apiUrl = `https://api.zannete.com/kuis`
  
  try{
    const res = yield call(axios.post, apiUrl, {
      judul: tambahKuisPage.judul,
      profileX: tambahKuisPage.profileX,
      profileY: tambahKuisPage.profileY,
      profileWidth: tambahKuisPage.profileWidth,
      profileHeight: tambahKuisPage.profileHeight,
      coverImage: tambahKuisPage.coverImage,
      listJawaban: tambahKuisPage.listJawaban
    })
    yield put(action.kuisSaved())
  }catch(err){
    yield put(action.kuisSaveFailed())
  }
}

export default function* defaultSaga() {
  yield takeLatest(constant.SIMPAN_KUIS_CLICK, simpanKuis)
}
