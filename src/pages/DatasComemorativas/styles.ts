import styled from 'styled-components';

import { Layout, Col, Space, Form, Row, DatePicker, Input, Button } from 'antd';

export const DatasComemorativas = styled(Layout)`
  min-width: 100vw;
  min-height: 100vh;
  padding: 24px 24px 24px 24px;
  background-color: #ffffff;
`;

export const Card = styled(Col).attrs({ xs: 24 })`
  padding: 16px 16px 16px 16px;
  background-color: #ffffff;
  border: 1px solid #dadada;
  border-radius: 8px;
`;

export const DatasComemorativasSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;

export const CardSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
export const Body = styled(Col).attrs({ xs: 24 })``;

export const BodySpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
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

export const SemanaDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const Semana = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const Dia = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const DatePickerSemana = styled(DatePicker)`
  width: 100%;
`;

export const DiaDiv = styled(Col).attrs({ md: 6, xs: 24 })``;

export const DatePickerDia = styled(DatePicker)`
  width: 100%;
`;

export const DescricaoDiv = styled(Col).attrs({ md: 12, xs: 24 })``;

export const Descricao = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const InputDescricao = styled(Input)`
  width: 100%;
`;

export const Line02 = styled(Row).attrs({
  gutter: [16.0, 0],
})`
  align-items: flex-end;
`;

export const SemanasAntDiv = styled(Col).attrs({ md: 6, xs: 24 })`
  margin-right: 16px;
`;

export const SemanasAntecedentes = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

const { RangePicker } = DatePicker;
export const DatePickerSemanaAntecedente = styled(RangePicker)`
  width: 100%;
`;

export const FilterActions = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})``;

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

export const Anchor = styled(Button)`
  padding: 0px;
`;
