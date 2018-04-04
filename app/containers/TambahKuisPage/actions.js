/*
 *
 * TambahKuisPage actions
 *
 */

import * as constant from "./constants";

export function setCoverImage(data){return {
  type: constant.COVER_IMAGE_ADD,
  data: data
}}

export function addJawaban(data){return {
  type: constant.JAWABAN_ADD,
  data: data
}}

export function onJudulChange(value){return {
  type: constant.JUDUL_CHANGE,
  value: value
}}

export function onProfileXChange(value){return {
  type: constant.PROFILE_X_CHANGE,
  value: value
}}

export function onProfileYChange(value){return {
  type: constant.PROFILE_Y_CHANGE,
  value: value
}}

export function onProfileWidthChange(value){return {
  type: constant.PROFILE_WIDTH_CHANGE,
  value: value
}}

export function onProfileHeightChange(value){return {
  type: constant.PROFILE_HEIGHT_CHANGE,
  value: value
}}

export function onSimpanKuisClick(){return {
  type: constant.SIMPAN_KUIS_CLICK
}}

export function kuisSaved(){return {
  type: constant.SIMPAN_KUIS_SAVED
}}

export function kuisSaveFailed(){return {
  type: constant.SIMPAN_KUIS_FAILED
}}