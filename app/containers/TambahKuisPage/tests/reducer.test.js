
import { fromJS } from 'immutable';
import tambahKuisPageReducer from '../reducer';

describe('tambahKuisPageReducer', () => {
  it('returns the initial state', () => {
    expect(tambahKuisPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
