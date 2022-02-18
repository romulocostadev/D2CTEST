import { Switch } from 'react-router-dom';
import ProductCardPage from '../pages/ProductCard';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/productcard" exact component={ProductCardPage} />
  </Switch>
);
export default Routes;
