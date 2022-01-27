import styled from 'styled-components';

import {
  Layout,
  Col,
  Space,
  Row,
  Form,
  Select,
  Button,
  Tabs as TabsAntd,
  Collapse as CollapseAntd,
} from 'antd';

const { Panel: CollapsePanelAntd } = CollapseAntd;

const { TabPane: TabPaneAntd } = TabsAntd;

export const Eventos = styled(Layout)`
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #ffffff;
`;

export const Card = styled(Col).attrs({ md: 23, xs: 24 })`
  padding: 16px 16px 16px 16px;
  border: 1px solid #dadada;
  border-radius: 8px;
`;

export const CardSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
export const Line01 = styled(Row).attrs({
  gutter: [16.0, 0],
})`
  align-items: end;
`;

export const CompetenciaDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const Competencia = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const SelectAnoCompetencia = styled(Select)`
  width: 100%;
`;

export const SelectAnoCompetenciaOption = styled(Select.Option)``;

export const StatusDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const Status = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const SelectStatus = styled(Select)`
  width: 100%;
`;

export const SelectStatusOption = styled(Select.Option)``;

export const FilterActions = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})``;

export const PesquisarDiv = styled(Col).attrs({ md: 11, xs: 24 })``;

export const ButtonPesquisar = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;

export const LimparDiv = styled(Col).attrs({ md: 11, xs: 24 })``;

export const ButtonLimpar = styled(Button)`
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
