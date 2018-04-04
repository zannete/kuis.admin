/**
 *
 * Asynchronously loads the component for TambahKuisPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
