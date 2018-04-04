import { createSelector } from 'reselect';

/**
 * Direct selector to the tambahKuisPage state domain
 */
const selectTambahKuisPageDomain = (state) => state.get('tambahKuisPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TambahKuisPage
 */

const makeSelectTambahKuisPage = () => createSelector(
  selectTambahKuisPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectTambahKuisPage;
export {
  selectTambahKuisPageDomain,
};
