import styled from 'styled-components';

import {
  Layout,
  Col,
  Row,
  Tabs as TabsAntd,
  Button,
  Form,
  Input,
  DatePicker,
  Select,
} from 'antd';

const { TabPane: TabPaneAntd } = TabsAntd;

export const CadastroEstoque = styled(Layout)`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const Page = styled(Col).attrs({ xs: 24 })`
  background-color: #fcfcff;
`;

export const Body = styled(Col).attrs({ xs: 24 })`
  padding: 24px 24px 24px 24px;
  background-color: #ffffff;
`;

export const Card = styled(Col).attrs({ xs: 24 })`
  padding: 16px 16px 16px 16px;
  background-color: #ffffff;
  border: 1px solid #dadada;
  border-radius: 8px;
`;

export const Header = styled(Row).attrs({
  justify: 'space-between',
})``;

export const TabsDiv = styled(Col).attrs({ md: 22, xs: 24 })``;

export const Tabs = styled(TabsAntd)`
  width: 100%;
`;
export const TabPane = styled(TabPaneAntd)`
  width: 100%;
`;
export const PageActions = styled(Col).attrs({})`
  width: 72px;
`;

export const Actions = styled(Row).attrs({
  //   gutter: [8.0, 0],
  justify: 'space-between',
})``;

export const ButtonSalvar = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;

export const ButtonHelper = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;

export const Filters = styled(Row).attrs({
  gutter: [16.0, 0],
  //   justify: 'space-between',
})``;

export const Group1 = styled(Col).attrs({ md: 18, xs: 24 })``;

// export const Group1 = styled.div``;

export const ViceriForm = styled(Form)`
  width: 100%;
`;

export const Line1 = styled(Row).attrs({
  gutter: [16.0, 0],
  //   justify: 'space-between',
})``;

export const ChaveFrame = styled(Col).attrs({ md: 16, xs: 24 })``;

export const InputChave = styled(Input)`
  width: 100%;
`;

export const SemanaFrame = styled(Col).attrs({ md: 8, xs: 24 })``;

export const PickerSemana = styled(DatePicker)`
  width: 100%;
`;

export const Line2 = styled(Row).attrs({
  gutter: [16.0, 0],
  //   justify: 'space-between',
  align: 'bottom',
})`
  margin-top: 10px;
`;

export const CategoriaFrame = styled(Col).attrs({ md: 8, xs: 24 })``;

export const CategoriaSeletec = styled(Select)`
  width: 100%;
`;

export const CategoriaSeletecOption = styled(Select.Option)``;

export const GrupoFrame = styled(Col).attrs({ md: 8, xs: 24 })``;

export const GrupoSelect = styled(Select)`
  width: 100%;
`;

export const GrupoSelectOption = styled(Select.Option)``;

export const QualidadeFrame = styled(Col).attrs({ md: 7, xs: 24 })``;

export const InputLabel = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const DistribuidoSelect = styled(Select)`
  width: 100%;
`;

export const DistribuidoSelectOption = styled(Select.Option)``;

export const ButtonProcurar = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 13px;
  line-height: 13px;
`;

export const DataFrame = styled(Col).attrs({ md: 6, xs: 24 })`
  height: 100px;
`;

export const DataLabel = styled(Row)`
  padding-left: 4px;
`;

export const Datascomemorativas = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const DataList = styled(Col).attrs({ xs: 24 })`
  padding: 8px 8px 8px 8px;
  border: 1px solid #dadada;
  border-radius: 4px;
  height: 100px;
`;

export const Selecioneumasemana = styled.h1`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: left;
`;

export const Body1 = styled(Col).attrs({ xs: 24 })`
  padding-bottom: 16px;
  margin-top: 20px;
`;

export const Collapse = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})`
  padding-left: 16px;
  padding-right: 16px;
`;
