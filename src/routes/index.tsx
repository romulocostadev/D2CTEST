import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
// import TiposContratacao from '../pages/TiposContratacao';
import Frame9 from '../pages/Home';
import TesteVeilingPage from '../pages/TesteVeilingPage';
import Grid from '../pages/Grid';
import Genero from '../pages/Genero';
import Generos from '../pages/Generos';
import Pessoas from '../pages/Pessoas';
import Pessoa from '../pages/Pessoa';
import TesteVeiling from '../pages/TesteVeiling';
import TesteRow from '../pages/TesteRow';
import Page1 from '../pages/Page1';
import AjustarQuantidadePage from '../component/AjustarQuantidade';
import TesteGeracao from '../component/TesteGeracao';
import DatasComemorativasPage from '../pages/DatasComemorativas';
import PreferenciadeProdutosPage from '../pages/PreferenciadeProdutos';
import GestaoQualidade from '../pages/GestaoDeQualidade';
import AlertaPLPPage from '../pages/AlertaPLP';
import ConfiguracoesOferta from '../pages/ConfiguracoesOferta';
import ProductCard from '../pages/NewProductCard';
import ProductCardHorizontalPage from '../pages/ProductCardHorizontal';
import ProductCardCartPage from '../pages/ProductCardCart';
import EcommerceMeusPedidosLkpPage from '../pages/EcommerceMeusPedidosLkp';
import ModalCompositionCancelPage from '../pages/ModalCompositionCancel';
import Teste132 from '../pages/teste123';
import OfertaLKP from '../pages/OfertaLKP';
import BannersAdmin from '../pages/BannersAdmin';
import BannersUpload from '../pages/BannersUpload';
import ProductCardPage from '../pages/ProductCardTest';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path="/home" isPrivate component={Frame9} />
    <Route path="/veiling" isPrivate component={TesteVeilingPage} />
    <Route path="/veilingtest" isPrivate component={TesteVeiling} />
    <Route path="/grid" isPrivate component={Grid} />
    <Route path="/genero/:id" isPrivate component={Genero} />
    <Route path="/genero" isPrivate component={Genero} />
    <Route path="/generos" isPrivate component={Generos} />
    <Route path="/pessoas" isPrivate component={Pessoas} />
    <Route path="/pessoa" isPrivate component={Pessoa} />
    <Route path="/testerow" isPrivate component={TesteRow} />
    <Route path="/page1veiling" isPrivate component={Page1} />
    <Route path="/modal" isPrivate component={AjustarQuantidadePage} />
    <Route path="/teste" isPrivate component={TesteGeracao} />
    <Route path="/teste" isPrivate component={TesteGeracao} />
    <Route path="/productcard" isPrivate component={ProductCard} />
    <Route path="/productcardHorizontal" isPrivate component={Teste132} />

    <Route
      path="/datascomemorativas"
      isPrivate
      component={DatasComemorativasPage}
    />
    <Route
      path="/productCardCartPage"
      isPrivate
      component={ProductCardCartPage}
    />
    <Route
      path="/preferenciaprodutos"
      isPrivate
      component={PreferenciadeProdutosPage}
    />
    <Route path="/gestaoqualidade" isPrivate component={GestaoQualidade} />
    <Route path="/alertaplp" isPrivate component={AlertaPLPPage} />
    <Route path="/configoferta" isPrivate component={ConfiguracoesOferta} />
    <Route
      path="/ecommerce-meus-pedidos"
      isPrivate
      component={EcommerceMeusPedidosLkpPage}
    />
    <Route
      path="/modal-composition"
      isPrivate
      component={ModalCompositionCancelPage}
    />
    <Route path="/ofertalkp" isPrivate component={OfertaLKP} />
    <Route path="/bannersadmin" exact component={BannersAdmin} />
    <Route path="/bannerupload" exact component={BannersUpload} />
    <Route path="/productcardpage" exact component={ProductCardPage} />
  </Switch>
);
export default Routes;
