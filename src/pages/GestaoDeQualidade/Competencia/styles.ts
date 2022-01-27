import styled from 'styled-components';

import { Layout, Col, Space, Row, Form, Select, DatePicker, Input } from 'antd';

const { RangePicker } = DatePicker;

export const Competencia = styled(Layout)`
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #ffffff;
`;

export const Body = styled(Col).attrs({ md: 23, xs: 24 })`
  padding: 16px 16px 16px 16px;
  background-color: #ffffff;
  border: 1px solid #dadada;
  border-radius: 8px;
`;

export const BodySpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
export const CadastroDiv = styled(Col).attrs({ xs: 24 })``;

export const CadastroDivSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
export const Line01 = styled(Row).attrs({
  gutter: [16.0, 0],
  justify: 'space-between',
})``;

export const CompetenciaDiv = styled(Col).attrs({ md: 9, xs: 24 })``;

export const AnodeCompetencia = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const SelectAnoCompetencia = styled(Select)`
  width: 100%;
`;

export const SelectAnoCompetenciaOption = styled(Select.Option)``;

export const Line02 = styled(Row).attrs({
  gutter: [16.0, 0],
})``;

export const PeriododeCadastroDiv = styled(Col).attrs({ md: 9, xs: 24 })``;

export const PeriododeCadastros = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const DatePickerPeriodoCadastro = styled(RangePicker)`
  width: 100%;
`;

export const SemanasDisponibilizadasDiv = styled(Col).attrs({
  md: 9,
  xs: 24,
})``;

export const SemanasDisponibilizadas = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const DatePickerSemanaDisponibilizadas = styled(RangePicker)`
  width: 100%;
`;

export const ChaveDiv = styled(Col).attrs({ xs: 24 })``;

export const Chave = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const InputRazaoSocial = styled(Input)`
  width: 100%;
`;

export const JustificativaDiv = styled(Col).attrs({ xs: 24 })``;

export const Justificativa = styled(Form.Item)`
  margin-bottom: 0px;
  width: 100%;
`;

export const JustificativaAlteracao = styled(Input.TextArea).attrs({
  showCount: true,
  maxLength: 100,
  placeholder: 'Justifique a alteração de quantidade...',
})``;
