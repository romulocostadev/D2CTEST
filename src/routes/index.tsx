import { Switch } from 'react-router-dom';
import EffectsShadowPage from '../pages/EffectsShadow';
import LayerPage from '../pages/Layer';
import ResizingFixedeAutoLayoutGapPage from '../pages/ResizingFixedeAutoLayoutGap';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/test" exact component={ResizingFixedeAutoLayoutGapPage} />
    <Route path="/shadow" exact component={EffectsShadowPage} />
    <Route path="/layer" exact component={LayerPage} />
  </Switch>
);
export default Routes;
