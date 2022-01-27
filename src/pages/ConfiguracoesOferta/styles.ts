import styled from 'styled-components';

import { Layout, Col, Space, Form, Input, Row, Button } from 'antd';

export const Configuracoesdeoferta = styled(Layout)`
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #fcfcff;
`;

export const Card = styled(Col).attrs({ xs: 24 })`
  padding: 16px 16px 16px 16px;
  background-color: #ffffff;
  border: 1px solid #dadada;
  border-radius: 8px;
`;

export const CardSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
export const ChaveDiv = styled(Col).attrs({ xs: 24 })``;

export const InputLabel = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const InputEnterpriseName = styled(Input)`
  width: 100%;
`;

export const PadraoDeContagem = styled(Row).attrs({
  gutter: [16.0, 0],
  justify: 'space-between',
})``;

export const PadraodeContagemVolDiv = styled(Col).attrs({ md: 18, xs: 24 })``;

export const PadraoContagem = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const InputQntVol = styled(Input)`
  width: 100%;
`;

export const HistoricoPorcentagem = styled(Col).attrs({ md: 5, xs: 24 })``;

export const PercentageHistory = styled(Button)`
  padding: 0;
  width: 79px;
  height: 22px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const Composicao = styled(Row).attrs({
  gutter: [16.0, 0],
  justify: 'space-between',
})``;

export const ComposicaoDiv = styled(Col).attrs({ md: 18, xs: 24 })``;

export const ComposicaoFormItem = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const InputComposicao = styled(Input)`
  width: 100%;
`;

export const Line01Action = styled(Col).attrs({ md: 5, xs: 24 })``;

export const CompositionHistory = styled(Button)`
  padding: 0;
  width: 79px;
  height: 22px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const QuantidadeMinima = styled(Row).attrs({
  gutter: [16.0, 0],
  justify: 'space-between',
})``;
