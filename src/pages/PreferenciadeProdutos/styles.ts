import styled from 'styled-components';

import {
  Layout,
  Row,
  Form,
  Space,
  Col,
  Input,
  Select,
  Button,
  Tabs as TabsAntd,
  Collapse as CollapseAntd,
} from 'antd';

const { Panel: CollapsePanelAntd } = CollapseAntd;

const { TabPane: TabPaneAntd } = TabsAntd;

export const PreferenciasdoProduto = styled(Layout)`
  min-width: 100vw;
  min-height: 100vh;
  padding: 24px 24px 24px 24px;
  background-color: #ffffff;
`;

export const Card = styled(Col).attrs({ md: 24, xs: 24 })`
  padding: 16px 16px 16px 16px;
  background-color: #ffffff;
  border: 1px solid #dadada;
  border-radius: 8px;
`;

export const Body = styled(Col).attrs({ md: 23, xs: 24 })``;

export const ViceriForm = styled(Form)``;

export const ViceriFormSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
export const Line01 = styled(Row).attrs({
  gutter: [16.0, 0],
  justify: 'space-between',
})``;

export const ChaveDiv = styled(Col).attrs({ md: 12, xs: 24 })``;

export const RazaoSocial = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const InputRazaoSocial = styled(Input)`
  width: 100%;
`;

export const Line02 = styled(Row).attrs({
  gutter: [16.0, 0],
})`
  align-items: end;
`;

export const CategoriaDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const Categoria = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const SelectCategoria = styled(Select)`
  width: 100%;
`;

export const SelectCategoriaOption = styled(Select.Option)``;

export const ComposicaoDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const Composicao = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const SelectComposicao = styled(Select)`
  width: 100%;
`;

export const SelectComposicaoOption = styled(Select.Option)``;

export const ProdutoDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const Produto = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const SelectProdutos = styled(Select)`
  width: 100%;
`;

export const SelectProdutosOption = styled(Select.Option)``;

export const ExpedicaoDiv = styled(Col).attrs({ md: 5, xs: 24 })``;

export const Expedicao = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const SelectExpedicao = styled(Select)`
  width: 100%;
`;

export const SelectExpedicaoOption = styled(Select.Option)``;

export const SearchButton = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;

export const Tabs = styled(TabsAntd)``;
export const TabPane = styled(TabPaneAntd)``;

export const Collapse = styled(CollapseAntd)``;
export const CollapsePanel = styled(CollapsePanelAntd)``;
